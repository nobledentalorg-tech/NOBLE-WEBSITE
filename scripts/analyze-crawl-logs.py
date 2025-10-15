#!/usr/bin/env python3
"""Parse web server access logs and summarise Googlebot activity."""

import argparse
import collections
import datetime as dt
import gzip
import re
from pathlib import Path

USER_AGENTS = (
    'Googlebot',
    'Googlebot-Mobile',
    'Googlebot-Image',
    'Googlebot-News',
)

LOG_PATTERN = re.compile(
    r'^(?P<ip>\S+) \S+ \S+ \[(?P<timestamp>[^\]]+)\] "(?P<method>\S+) (?P<path>[^" ]+) (?P<protocol>[^" ]+)" '
    r'(?P<status>\d{3}) (?P<size>\S+) "(?P<referrer>[^"]*)" "(?P<ua>[^"]*)"'
)

DATE_FORMAT = '%d/%b/%Y:%H:%M:%S %z'


def iter_lines(log_file: Path):
    if log_file.suffix == '.gz':
        with gzip.open(log_file, 'rt', encoding='utf-8', errors='ignore') as handle:
            yield from handle
    else:
        with log_file.open('r', encoding='utf-8', errors='ignore') as handle:
            yield from handle


def parse_log_line(line: str):
    match = LOG_PATTERN.match(line)
    if not match:
        return None
    return match.groupdict()


def is_googlebot(user_agent: str) -> bool:
    return any(token in user_agent for token in USER_AGENTS)


def summarize(log_files):
    hits_per_day = collections.Counter()
    status_counter = collections.Counter()
    url_counter = collections.Counter()

    for log_file in log_files:
        for line in iter_lines(log_file):
            data = parse_log_line(line)
            if not data or not is_googlebot(data['ua']):
                continue

            timestamp = dt.datetime.strptime(data['timestamp'], DATE_FORMAT)
            day = timestamp.date()
            hits_per_day[day] += 1
            status_counter[data['status']] += 1
            url_counter[data['path']] += 1

    return hits_per_day, status_counter, url_counter


def main():
    parser = argparse.ArgumentParser(description='Analyse Googlebot crawl logs.')
    parser.add_argument('logs', nargs='+', type=Path, help='Paths to access logs or .gz archives')
    parser.add_argument('--top', type=int, default=20, help='Number of top URLs to display')
    args = parser.parse_args()

    hits_per_day, status_counter, url_counter = summarize(args.logs)

    print('Googlebot visits per day:')
    for day, count in sorted(hits_per_day.items()):
        print(f'  {day}: {count} requests')

    print('\nResponse code distribution:')
    for status, count in status_counter.most_common():
        print(f'  {status}: {count}')

    print(f"\nTop {args.top} URLs crawled:")
    for url, count in url_counter.most_common(args.top):
        print(f'  {url}: {count}')


if __name__ == '__main__':
    main()
