
import { LocalizedText } from '../../../types/neoSchema';

export interface AnatomyNode {
    id: string;
    name: LocalizedText;
    description: LocalizedText;
    function: LocalizedText;
}

export const ANATOMY_DENTAL: AnatomyNode[] = [
    {
        id: 'enamel',
        name: { en: "Enamel", ta: "எனாமல்" },
        description: {
            en: "The hard, outer white layer of the tooth. It is the hardest substance in the human body.",
            ta: "பல்லின் வெளிப்புற வெண்ணிற அடுக்கு."
        },
        function: {
            en: "Protects the inner layers of the tooth from decay and sensitivity.",
            ta: "பல்லின் உட்புற அடுக்குகளை பாதுகாக்கிறது."
        }
    },
    {
        id: 'pulp',
        name: { en: "Dental Pulp", ta: "பல் நரம்பு" },
        description: {
            en: "The soft center of the tooth containing nerves and blood vessels.",
            ta: "பல்லின் மையப்பகுதி."
        },
        function: {
            en: "Provides nutrition and sensation to the tooth. When infected, it causes severe pain.",
            ta: "பல்லிற்கு உணர்வை அளிக்கிறது."
        }
    }
];
