export interface Landmark {
    id: string;
    name: string;
    type: 'Community' | 'ItPark' | 'Mall';
    travelTime: string; // e.g., "5 mins"
    direction: string; // e.g., "Right across the flyover"
    demographicFocus: 'Pediatric' | 'Geriatric' | 'General' | 'Tech';
    socialProof: string; // e.g., "50+ families"
    gateLandmark: string; // e.g., "Main Gate"
}

export const landmarkMatrix: Landmark[] = [
    // 1. APARNA CLUSTER (High Income / Mixed Families)
    {
        id: 'aparna-sarovar',
        name: 'Aparna Sarovar',
        type: 'Community',
        travelTime: '3-5 mins',
        direction: 'via Nallagandla-Tellapur Rd',
        demographicFocus: 'Geriatric', // Focus on Seniors
        socialProof: '80+ families',
        gateLandmark: 'Sarovar Main Gate'
    },
    {
        id: 'aparna-sarovar-zenith',
        name: 'Aparna Sarovar Zenith',
        type: 'Community',
        travelTime: '2 mins',
        direction: 'Just 500m away',
        demographicFocus: 'Pediatric', // Young families
        socialProof: '45+ families',
        gateLandmark: 'Zenith Exit Gate'
    },
    {
        id: 'aparna-cyberzon',
        name: 'Aparna CyberZon',
        type: 'Community',
        travelTime: '6-8 mins',
        direction: 'via Nallagandla Flyover',
        demographicFocus: 'General',
        socialProof: '120+ patients',
        gateLandmark: 'CyberZon Arch'
    },

    // 2. MY HOME CLUSTER (Tech / Young Parents)
    {
        id: 'my-home-mangala',
        name: 'My Home Mangala',
        type: 'Community',
        travelTime: '10-12 mins',
        direction: 'Straight from Bornfire School road',
        demographicFocus: 'Pediatric',
        socialProof: 'Trusted by young parents',
        gateLandmark: 'Mangala Entrance'
    },
    {
        id: 'my-home-avatar',
        name: 'My Home Avatar',
        type: 'Community',
        travelTime: '10 mins',
        direction: 'via DLF Road',
        demographicFocus: 'Tech',
        socialProof: 'Preferred by IT professionals',
        gateLandmark: 'Avatar Main Gate'
    },

    // 3. PREMIUM HIGH-RISES
    {
        id: 'ramky-one-galaxia',
        name: 'Ramky One Galaxia',
        type: 'Community',
        travelTime: '2 mins',
        direction: 'Walkable distance',
        demographicFocus: 'General',
        socialProof: 'Your neighbors choose us',
        gateLandmark: 'Galaxia Gate'
    },
    {
        id: 'vertex-panache',
        name: 'Vertex Panache',
        type: 'Community',
        travelTime: '5 mins',
        direction: 'Opposite Ratnadeep',
        demographicFocus: 'General',
        socialProof: '30+ families',
        gateLandmark: 'Panache Entrance'
    }
];

export const getLandmark = (id: string) => landmarkMatrix.find(l => l.id === id);
