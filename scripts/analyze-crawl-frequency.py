#!/usr/bin/env python3
"""Summarize crawl frequency and surface Googlebot insights from HTTP access logs."""

import argparse
import collections
import gzip
import io
import re
from datetime import datetime

LOG_PATTERN = re.compile(
    r"(?P<ip>\S+) \S+ \S+ \[(?P<datetime>[^\]]+)\] \"(?P<method>\S+) (?P<path>[^\s]+) \S+\" (?P<status>\d{3}) (?P<size>\S+) \"(?P<referrer>[^\"]*)\" \"(?P<ua>[^\"]*)\""
)
DATE_FORMAT = "%d/%b/%Y:%H:%M:%S %z"

def open_log(path: str) -> io.TextIOBase:
    if path.endswith(".gz"):
        return io.TextIOWrapper(gzip.open(path, "rb"))
    return open(path, "r", encoding="utf-8", errors="replace")

def parse_log(path: str):
    with open_log(path) as handle:
        for line in handle:
            match = LOG_PATTERN.match(line)
            if not match:
                continue
            data = match.groupdict()
            try:
                ts = datetime.strptime(data["datetime"], DATE_FORMAT)
            except ValueError:
                continue
            yield {
                "timestamp": ts,
                "path": data["path"],
                "status": int(data["status"]),
                "ua": data["ua"],
            }

def summarize(paths):
    totals = collections.Counter()
    googlebot = collections.Counter()
    status_counts = collections.Counter()

    for path in paths:
        for entry in parse_log(path):
            day = entry["timestamp"].date()
            totals[day] += 1
            status_bucket = f"{entry['status']//100}xx"
            status_counts[status_bucket] += 1
            if "googlebot" in entry["ua"].lower():
                googlebot[day] += 1

    return totals, googlebot, status_counts

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("logs", nargs="+", help="Paths to access logs (supports .gz)")
    args = parser.parse_args()

    totals, googlebot, status_counts = summarize(args.logs)
    if not totals:
        print("No log entries parsed. Check your input files.")
        return

    print("=== Daily Request Volume ===")
    for day in sorted(totals):
        gb_hits = googlebot.get(day, 0)
        share = (gb_hits / totals[day]) * 100 if totals[day] else 0
        print(f"{day}: {totals[day]} requests | Googlebot: {gb_hits} ({share:.1f}% share)")

    print("\n=== Status Code Distribution ===")
    for bucket in sorted(status_counts):
        print(f"{bucket}: {status_counts[bucket]}")

    print("\nNext steps:")
    print("- Investigate 4xx/5xx spikes and resolve canonicalization or robots issues if present.")
    print("- When Googlebot activity dips, submit updated XML sitemaps via Google Search Console.")

if __name__ == "__main__":
    main()
