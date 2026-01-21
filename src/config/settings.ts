
import { SupportedLanguage } from '../types/neoSchema';

export const NEO_CONFIG = {
    // 1. Language Settings
    defaultLanguage: 'en' as SupportedLanguage,
    supportedLanguages: ['en', 'ta', 'te', 'kn', 'hi'] as SupportedLanguage[],

    // 2. Safety Settings (Sensitivity: 0-1)
    safetyThreshold: 0.8,
    blockedKeywords: [
        'sex', 'nude', 'hot', 'fuck', 'bitch', 'porn', 'love you', 'kiss', 'date'
    ],

    // 3. Clinical Settings
    emergencyPrefix: '🚨 EMERGENCY PROTOCOL: ',
    doctorPrefix: '(Doctor Mode) ',
    momPrefix: '(Mom Mode 🌸) ',

    // 4. Contact
    emergencyPhone: '+918686676781',
    clinicName: 'Noble Dental Care',
};
