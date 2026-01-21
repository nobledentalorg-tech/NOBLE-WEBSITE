import { ADVANCED_PERIO_DB } from './NeoPeriodontics';
import { LocalizedText } from '../types/neoSchema';

// Neo Blog Engine
// Purpose: Convert internal Medical Knowledge into SEO-friendly Blog Posts.

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    content: string; // Markdown
    tags: string[];
}

export class NeoBlogEngine {

    /**
     * Generates a blog post about Advanced Periodontics
     */
    static generatePerioBlog(topicId: string): BlogPost | null {
        const topic = ADVANCED_PERIO_DB[topicId];
        if (!topic) return null;

        const title = `What is ${topic.topic}? Advanced Gum Care explained.`;
        const date = new Date().toISOString().split('T')[0];

        const content = `
# ${title}
*Published on ${date} by Dr. Dhivakaran (AI Assisted)*

## Introduction
Gum disease treatment has evolved beyond simple cleaning. At Noble Dental Care, we use advanced science like **${topic.topic}** to save your teeth.

## What is it?
${topic.description.en}

## How does it help you?
${topic.clinicalApplication.en}

## Why Choose Us?
We follow the latest protocols from top journals like *Periobasics* to ensure you get "University-Grade" treatment in a private clinic setting.

---
*Visit us in Nallagandla for a consultation.*
        `;

        return {
            slug: topicId.replace('_', '-'),
            title,
            excerpt: topic.description.en,
            content,
            tags: ['Periodontics', 'Dental Health', topic.topic]
        };
    }

    /**
     * Lists all available auto-generated blogs
     */
    static getAllAutoBlogs(): BlogPost[] {
        return Object.keys(ADVANCED_PERIO_DB).map(id => this.generatePerioBlog(id)!);
    }
}
