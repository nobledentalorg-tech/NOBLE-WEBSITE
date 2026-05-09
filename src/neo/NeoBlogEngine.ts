import { PERIO_STAGING } from './NeoPeriodontics';
import { DENTAL_PHARMACOPOEIA } from './NeoPharmacology';
import { PERMANENT_TEETH_DB, PRIMARY_TEETH_DB } from './NeoAnatomy';
import { ORAL_PATHOLOGY_DB } from './NeoPathology';
import { DENTAL_MATERIALS_DB } from './NeoMaterials';
import { DENTAL_FAQ_DB } from './NeoFAQDatabase';
import { LocalizedText } from '../types/neoSchema';
import { applyInternalLinking } from './NeuralLinker';

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    content: string; // Markdown format
    category: string;
    tags: string[];
    date: string;
}

export class NeoBlogEngine {

    private static getToday(): string {
        return new Date().toISOString().split('T')[0];
    }

    // --- 1. PHARMACOLOGY BLOGS ("Is Dolo 650 safe?") ---
    static generatePharmaBlog(drugId: string): BlogPost | null {
        const drug = DENTAL_PHARMACOPOEIA[drugId];
        if (!drug) return null;

        const title = `Is ${drug.genericName} Safe? Dentist's Guide to ${drug.brandExamples[0]}`;

        const content = `
# ${title}
*Medical Review by Dr. Dhivakaran | ${this.getToday()}*

## Overview
${drug.genericName}, commonly sold as **${drug.brandExamples.join(', ')}**, is a standard medication used in dentistry.

## How does it work?
${drug.mechanism.en}

## Who should take this?
${drug.whoShouldTake.en}

## ⚠️ Safety Warning
**Who should avoid it:** ${drug.whoShouldNotTake.en}

**Pregnancy Safety:** Category ${drug.pregnancyCategory}. 
${drug.pregnancyCategory === 'B' ? "Generally considered safe." : "Consult your gynecologist before use."}

## Patient Instructions
> ${drug.patientAdvice.en}

## References
* ${drug.citations.join('\n* ')}

---
*Disclaimer: This content is for informational purposes only and does not substitute professional medical advice.*
`;

        return {
            slug: `medication/${drugId.replace(/_/g, '-')}`,
            title,
            excerpt: drug.mechanism.en,
            content,
            category: 'Medication Guide',
            tags: ['Dental Pain', 'Antibiotics', 'Patient Safety', drug.genericName],
            date: this.getToday()
        };
    }

    // --- 2. ANATOMY BLOGS ("When will my child's tooth fall out?") ---
    static generateAnatomyBlog(toothId: string, isPrimary: boolean): BlogPost | null {
        const db = isPrimary ? PRIMARY_TEETH_DB : PERMANENT_TEETH_DB;
        const tooth = db[toothId];
        if (!tooth) return null;

        const title = `${tooth.name.en}: Eruption, Function & Care Guide`;
        const sheddingInfo = isPrimary ? `\n## When does it fall out?\nThis tooth typically sheds around **${tooth.shedding}**. Do not extract it early!` : "";

        const content = `
# ${title}
*Clinical Anatomy Series | ${this.getToday()}*

## What is this tooth?
The **${tooth.name.en}** (FDI #${tooth.id}) is a key ${tooth.type}. 

## Timeline
* **Eruption Age:** ${tooth.eruption}
${sheddingInfo}

## Why is it important?
${tooth.clinicalSignificance.en}

## Root Canal Details
* **Number of Roots:** ${tooth.roots}
* **Canal Complexity:** ${tooth.canals}

💡 *Note: Teeth with complex root systems (like MB2 canals) require microscopic endodontics for success.*

---
*Visit Noble Dental Care for a checkup regarding your ${tooth.name.en}.*
`;

        return {
            slug: `anatomy/${tooth.name.en.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
            title,
            excerpt: `Everything you need to know about the ${tooth.name.en}. Eruption time: ${tooth.eruption}.`,
            content,
            category: 'Dental Anatomy',
            tags: ['Teeth Eruption', 'Kids Dentistry', 'Root Canal'],
            date: this.getToday()
        };
    }

    // --- 3. PATHOLOGY BLOGS ("Is this white patch cancer?") ---
    static generatePathologyBlog(pathId: string): BlogPost | null {
        const path = ORAL_PATHOLOGY_DB[pathId];
        if (!path) return null;

        const isCancer = path.cancerPotential ? "⚠️ Yes, this has pre-cancerous potential." : "✅ No, this is usually benign.";

        const title = `${path.name.en}: Symptoms, Risks & Treatment`;

        const content = `
# ${title}
*Oral Health Awareness | ${this.getToday()}*

## What is it?
**${path.name.en}** is a condition characterized by:
> ${path.symptoms.en}

## Is it Cancer?
**Risk Level:** ${path.riskLevel}
${isCancer}

## Management & Treatment
${path.management.en}

## When to see a doctor?
If you notice these symptoms persisting for more than 2 weeks, book a biopsy consultation immediately.

---
*Early detection saves lives. Book a screening at Noble Dental Care.*
`;

        return {
            slug: `pathology/${pathId.replace(/_/g, '-')}`,
            title,
            excerpt: path.symptoms.en,
            content,
            category: 'Oral Pathology',
            tags: ['Oral Cancer', 'Ulcers', 'Biopsy', path.name.en],
            date: this.getToday()
        };
    }

    // --- 4. MATERIAL BLOGS ("Zirconia vs Metal") ---
    static generateMaterialBlog(matId: string): BlogPost | null {
        const mat = DENTAL_MATERIALS_DB[matId];
        if (!mat) return null;

        const title = `${mat.brandName} Crowns: Cost, Durability & Aesthetics`;

        const content = `
# ${title}
*Prosthodontic Guide | ${this.getToday()}*

## Overview
**${mat.brandName}** is a **${mat.costTier}** tier dental material made of ${mat.composition}.

## Score Card
* **Aesthetics:** ${mat.estheticScore}/10
* **Durability:** ${mat.durability}

## Best Used For
${mat.bestFor.en}

## Why choose this?
If you are looking for a balance of strength and beauty, this is a strong contender. Compare this with other options during your consultation.

---
*Ask Dr. Dhivakaran if ${mat.brandName} is right for your smile.*
`;

        return {
            slug: `materials/${matId.replace(/_/g, '-')}`,
            title,
            excerpt: `Is ${mat.brandName} good for teeth? Rated ${mat.estheticScore}/10 for looks.`,
            content,
            category: 'Dental Materials',
            tags: ['Crowns', 'Veneers', 'Cost', mat.brandName],
            date: this.getToday()
        };
    }

    // --- 5. FAQ BLOGS (Micro-Questions) ---
    static generateFAQBlog(faqId: string): BlogPost | null {
        const faq = DENTAL_FAQ_DB[faqId];
        if (!faq) return null;

        const title = `${faq.question} | Dentist Answer`;

        const content = `
# ${faq.question}
*Quick Dental Answer | ${this.getToday()}*

## The Short Answer
> **${faq.conciseAnswer}**

## Clinical Explanation
${faq.clinicalDetail}

## Related Treatments
* ${faq.relatedServices.join('\n* ')}

## When to see a doctor?
If you are experiencing this issue, it is best to get a professional evaluation.

---
*Answered by Dr. Dhivakaran, Noble Dental Care.*
`;

        return {
            slug: `faq/${faq.id}`,
            title,
            excerpt: faq.conciseAnswer,
            content,
            category: 'Dental FAQ',
            tags: [formattedCategory(faq.category), 'Q&A', 'Patient Education'],
            date: this.getToday()
        };
    }

    /**
     * MASTER FUNCTION: Generates ALL blogs (100+ pages) at once.
     * Use this in your sitemap.xml generator.
     */
    static getAllAutoBlogs(): BlogPost[] {
        const blogs: BlogPost[] = [];

        // 1. Generate Drug Blogs
        Object.keys(DENTAL_PHARMACOPOEIA).forEach(id => {
            const post = this.generatePharmaBlog(id);
            if (post) blogs.push(this.enrichWithLinks(post));
        });

        // 2. Generate Anatomy Blogs
        Object.keys(PERMANENT_TEETH_DB).forEach(id => {
            const post = this.generateAnatomyBlog(id, false);
            if (post) blogs.push(this.enrichWithLinks(post));
        });
        Object.keys(PRIMARY_TEETH_DB).forEach(id => {
            const post = this.generateAnatomyBlog(id, true);
            if (post) blogs.push(this.enrichWithLinks(post));
        });

        // 3. Generate Pathology Blogs
        Object.keys(ORAL_PATHOLOGY_DB).forEach(id => {
            const post = this.generatePathologyBlog(id);
            if (post) blogs.push(this.enrichWithLinks(post));
        });

        // 4. Generate Material Blogs
        Object.keys(DENTAL_MATERIALS_DB).forEach(id => {
            const post = this.generateMaterialBlog(id);
            if (post) blogs.push(this.enrichWithLinks(post));
        });

        // 5. Generate FAQ Blogs [NEW]
        Object.keys(DENTAL_FAQ_DB).forEach(id => {
            const post = this.generateFAQBlog(id);
            if (post) blogs.push(this.enrichWithLinks(post));
        });

        return blogs;
    }

    private static enrichWithLinks(post: BlogPost): BlogPost {
        return {
            ...post,
            content: applyInternalLinking(post.content)
        };
    }
}

function formattedCategory(cat: string) {
    return cat;
}
