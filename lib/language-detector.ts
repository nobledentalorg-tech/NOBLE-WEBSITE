/**
 * Language Detection Utility
 * Auto-detects user's preferred language from browser locale
 * Supports: English, Telugu, Hindi, Tamil, Kannada, Malayalam
 */

export type SupportedLanguage = 'en' | 'te' | 'hi' | 'ta' | 'kn' | 'ml'

/**
 * Detect user's preferred language from browser locale
 * Priority: Browser Language > Default (en)
 */
export function detectUserLanguage(): SupportedLanguage {
    if (typeof window === 'undefined') return 'en'

    // Get browser language
    const browserLang = navigator.language || navigator.languages?.[0]
    const langCode = browserLang?.split('-')[0].toLowerCase()

    // Map browser locale to supported languages
    const languageMap: Record<string, SupportedLanguage> = {
        'te': 'te', // Telugu
        'hi': 'hi', // Hindi
        'ta': 'ta', // Tamil
        'kn': 'kn', // Kannada
        'ka': 'kn', // Alternative code for Kannada
        'ml': 'ml', // Malayalam
        'en': 'en', // English
    }

    return languageMap[langCode] || 'en'
}

/**
 * Get language name for display
 */
export function getLanguageName(code: string): string {
    const names: Record<string, string> = {
        'en': 'English',
        'te': 'తెలుగు',
        'hi': 'हिन्दी',
        'ta': 'தமிழ்',
        'kn': 'ಕನ್ನಡ',
        'ml': 'മലയാളം'
    }
    return names[code] || 'English'
}

/**
 * Get language emoji flag
 */
export function getLanguageFlag(code: string): string {
    const flags: Record<string, string> = {
        'en': '🇬🇧',
        'te': '🇮🇳',
        'hi': '🇮🇳',
        'ta': '🇮🇳',
        'kn': '🇮🇳',
        'ml': '🇮🇳'
    }
    return flags[code] || '🌐'
}
