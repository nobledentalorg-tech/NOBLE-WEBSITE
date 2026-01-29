import { startOfDay, differenceInDays } from 'date-fns';

// CONFIGURATION
const DRIP_START_DATE = new Date('2026-01-30T00:00:00Z');
const PAGES_PER_DAY = 20;

/**
 * Calculates how many auto-generated pages should be visible to search engines today.
 * Formula: (Days Since Launch * Rate)
 */
export function getDripFeedLimit(): number {
    const today = startOfDay(new Date());
    const daysSinceLaunch = differenceInDays(today, DRIP_START_DATE);

    if (daysSinceLaunch < 0) return 0; // Launch hasn't started
    return (daysSinceLaunch + 1) * PAGES_PER_DAY;
}

/**
 * Filters a large list of pages to only return the ones safely indexed for today.
 * Ensuring "Slow & Steady" growth to avoid Google Spam Flags.
 */
export function dripFeedFilter<T>(items: T[]): T[] {
    const limit = getDripFeedLimit();
    // Always return at least the first day's batch or all if limit exceeds
    return items.slice(0, Math.max(PAGES_PER_DAY, limit));
}
