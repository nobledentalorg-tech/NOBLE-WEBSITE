import { SupportedLanguage } from '../types/neoSchema';

export const NEO_CONFIG = {
    // 1. Identity & Context
    botName: "Neo",
    clinicName: "Noble Dental Care",
    clinicLocation: "Nallagandla, Hyderabad",

    // 2. Language Settings
    defaultLanguage: 'en' as SupportedLanguage,
    supportedLanguages: ['en', 'ta', 'te', 'kn', 'hi'] as SupportedLanguage[],

    // 3. Safety & Moderation
    safetyThreshold: 0.8,
    blockedKeywords: [
        'sex', 'nude', 'hot', 'fuck', 'bitch', 'porn', 'love you', 'kiss', 'date',
        'kill', 'suicide', 'bomb', 'hack', 'scam', 'hate'
    ],

    // 4. Clinical Settings
    emergencyPrefix: '🚨 EMERGENCY PROTOCOL: ',
    doctorPrefix: '(Doctor Mode) ',
    momPrefix: '(Mom Mode 🌸) ',

    // 5. Contact Info
    emergencyPhone: '+918686676781',
    bookingUrl: '/book-appointment',

    // 6. Feature Flags (The New Upgrades)
    features: {
        enableGeminiFallback: true, // Set to false to turn off the "Teacher" AI
        enableVoiceInput: true,     // Enables the microphone button
        enableLearningMemory: true, // Enables saving new answers to DB
        debugMode: process.env.NODE_ENV === 'development',
    },

    // 7. System Limits
    maxHistoryLength: 10, // How many previous messages Neo remembers
    geminiModel: 'gemini-1.5-flash',
};
