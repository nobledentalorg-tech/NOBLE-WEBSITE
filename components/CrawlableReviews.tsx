import React from 'react';
import { Star, CheckCircle2, MapPin } from 'lucide-react';
import Script from 'next/script';

const reviews = [
    {
        author: "Kavitha K",
        rating: 5,
        text: "Excellent treatment and painless treatment thank-you sir ... God bless you. I can't say great things about Dr.Dhivakaran sir.. Always takes time to answer all of my questions thoroughly... My treatment has be going great.",
        date: "4 months ago",
        badge: "Verified Patient",
        link: "https://maps.app.goo.gl/JGcZBQw2sYdfbQbr8"
    },
    {
        author: "Rahul Seth",
        rating: 5,
        text: "A top-notch dental specialist known for exceptional customer service and swift recovery. Unlike many other clinics, Dr. Dhivakaran fees are remarkably affordable.",
        date: "9 months ago",
        badge: "Local Guide",
        link: "https://maps.app.goo.gl/AqeZUqHnmwidAmMj9"
    },
    {
        author: "Sailaja Kandikatla",
        rating: 5,
        text: "My experience with the Noble dental care has been excellent. The dentist is really caring and always checks in about how my teeth are doing. I love how approachable they are and that they’re always available when needed. The results have been amazing and I truly appreciate their genuine care.",
        date: "5 months ago",
        badge: "Verified Patient",
        link: "https://maps.app.goo.gl/Tc3NcV3rXh9C5d2Z6"
    },
    {
        author: "Suganya Sweety",
        rating: 5,
        text: "Thank you doc it is one of the best dental experiences I've had in a very long time. So clean, careful, thoughtful and very professional. You are outstanding, very patient and explained every procedure with it's pros and cons...",
        date: "3 years ago",
        badge: "6 Reviews",
        link: "https://maps.app.goo.gl/bhwGAYmMujEzVuc56"
    },
    {
        author: "Gedekaphilli Sandhya rani",
        rating: 5,
        text: "The doctor is very very genuine and superb. My previous doctors said they have to cut my bone and do surgery to remove infection but this doctor removed my infection without cutting my bone or surgery. Very very happy that my problem is gone...",
        date: "2 years ago",
        badge: "Verified Patient",
        link: "https://maps.app.goo.gl/1gi45XP2VgUTfj5GA"
    },
    {
        author: "R. Revathi",
        rating: 5,
        text: "Went for Teeth cleaning to remove black stains from my mouth. Dr Dhivakaran was very polite and completely ensured me to be comfortable as I felt sensitivity at times during the process. Also he explained regarding certain brushing habits...",
        date: "a year ago",
        badge: "4 Reviews",
        link: "https://maps.app.goo.gl/amRSHozsMcvRZjBM7"
    },
    {
        author: "Grace",
        rating: 5,
        text: "Doctor is comforting, friendly and very patience with my kids. Very good explanation on good and bad habits with hygiene instructions. Unreasonable charges not done.i liked the way they treated us in the whole treatment.",
        date: "a year ago",
        badge: "Verified Patient",
        link: "https://maps.app.goo.gl/xo5CutNEtZ2YR2feA"
    },
    {
        author: "DIVYA A",
        rating: 5,
        text: "Dr Dhivakaran is kind, sharp, meticulous and takes his time to explain and answer any questions or concerns. I have been to this clinic for removing tooth , done Root canal and feel very satisfied with the level of care.",
        date: "3 years ago",
        badge: "4 Reviews",
        link: "https://maps.app.goo.gl/PBDQKVk4txsUC7E37"
    },
    {
        author: "Sathya",
        rating: 5,
        text: "Had a very pleasant experience with Dr.Dhivakar and his staff. Coming into the office it was very pleasant and calming.The doctor is professional, very friendly and attentive. He took the time to explain the procedure in a very informative way.",
        date: "3 years ago",
        badge: "Verified Patient",
        link: "https://maps.app.goo.gl/wGo6WaRK2bTf4DtY9"
    },
    {
        author: "Vishal Nirmal",
        rating: 5,
        text: "Dr Dhivakaran, soon friendly and very caring. He is very careful, precise, very hygiene, explains and plans the treatment in a very efficient manner. I was advised to remove my buried tooth in the lower jaw...",
        date: "3 years ago",
        badge: "2 Reviews",
        link: "https://maps.app.goo.gl/HKaLkPmfoiWzaMry6"
    },
    {
        author: "Soniya Jenifer",
        rating: 5,
        text: "The staff is friendly and very professional from the moment my walk-in and throughout our appointment.They are helped me to know how to care my teeth better &they made me feel comfortable...",
        date: "2 years ago",
        badge: "Verified Patient",
        link: "https://maps.app.goo.gl/FK4JHy1pPYboXkff9"
    },
    {
        author: "Yegammai Isha",
        rating: 5,
        text: "I had been to this clinic for tooth ache. The doctor was kind enough to listen my issues and helped me out. On top of everything the charges are affordable and good. Will recommend this place.",
        date: "a year ago",
        badge: "8 Reviews",
        link: "https://maps.app.goo.gl/JwAnXbgEYgJiQPbn8"
    },
    {
        author: "Gnanam V",
        rating: 5,
        text: "Complete professionalism from the doctor and his team, really great to have a dental care setup around, like this. I decided to take Dr Divakaran's consultation on any future dental care needs. Thank you and best wishes.",
        date: "2 years ago",
        badge: "4 Reviews",
        link: "https://maps.app.goo.gl/oRSSxMDE5UHufki4A"
    },
    {
        author: "Srinivasarao Yerlanki",
        rating: 5,
        text: "I have shown to my kid 3.5 yrs really Dr fantastic job with out any issue and pain very friendly Dr and smooth coordination and well support always it's clinics phase recommended Dental as Good Dr Diwakaran...",
        date: "a year ago",
        badge: "Local Guide",
        link: "https://maps.app.goo.gl/jU84DrDApJW4FJ7r6"
    }
];

const CrawlableReviews = () => {
    // Generate JSON-LD for each review to create a mathematical trust loop
    const reviewsSchema = {
        "@context": "https://schema.org",
        "@type": "Dentist",
        "@id": "https://nobledentalnallagandla.in/schema/localbusiness.json",
        "name": "Noble Dental Care Nallagandla",
        "image": "https://nobledentalnallagandla.in/images/clinic-front.webp",
        "review": reviews.map(review => ({
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": review.author
            },
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": review.rating,
                "bestRating": "5"
            },
            "reviewBody": review.text,
            "datePublished": review.date, // Note: ISO date preferred but relative string provided for UI
            "url": review.link
        })),
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "427"
        }
    };

    return (
        <section className="py-16 bg-slate-900 border-t border-white/5 relative">
            <Script
                id="verified-reviews-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-black text-white mb-2">
                            Top Rated by <span className="text-blue-500">Your Neighbors</span>
                        </h2>
                        <div className="flex items-center gap-2 text-slate-400">
                            <span className="flex text-yellow-500">
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                            </span>
                            <span className="font-bold text-white">5.0</span>
                            <span>based on 400+ Verified Google Reviews</span>
                        </div>
                    </div>

                    <a
                        href="https://g.page/r/Cfd76839Xv4bEAE/review"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 md:mt-0 inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-blue-600 rounded-full text-white font-bold transition-all border border-white/10"
                    >
                        <Star size={18} className="text-yellow-500" />
                        Write a Review
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-slate-800/50 p-6 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all flex flex-col justify-between group">
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-lg">
                                            {review.author[0]}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white text-sm">{review.author}</h3>
                                            <p className="text-xs text-slate-400 flex items-center gap-1">
                                                {review.badge && <span className="text-amber-500 flex items-center gap-0.5"><CheckCircle2 size={10} /> {review.badge}</span>}
                                            </p>
                                        </div>
                                    </div>
                                    <span className="text-xs text-slate-500">{review.date}</span>
                                </div>

                                <div className="flex text-yellow-500 mb-3">
                                    {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                                </div>

                                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                                    &quot;{review.text}&quot;
                                </p>
                            </div>

                            {review.link && (
                                <div className="pt-4 border-t border-white/5 flex justify-between items-center opacity-70 group-hover:opacity-100 transition-opacity">
                                    <a href={review.link} target="_blank" rel="nofollow noreferrer" className="inline-flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-wider text-blue-400 hover:text-blue-300 transition-colors">
                                        <MapPin size={12} /> Verified on Maps
                                    </a>
                                    <span className="text-[10px] text-slate-500">Google Review</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a href="https://maps.app.goo.gl/xFv4bbsWewmCGgV57" target="_blank" rel="nofollow noreferrer" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-400 transition-colors border-b border-dashed border-slate-700 hover:border-blue-400 pb-0.5">
                        Read all 400+ reviews on Google Maps <CheckCircle2 size={14} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CrawlableReviews;
