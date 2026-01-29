export interface LocalityData {
    id: string;
    name: string;
    distance: string; // e.g., "2.7 - 4.4 km"
    time: string; // e.g., "8-12 mins"
    landmarks: string[];
    demographic: string;
    metaTitleSuffix: string; // e.g., "Near DLF Cyber City"
}

export const LOCALITY_MATRIX: Record<string, LocalityData> = {
    'tellapur': {
        id: 'tellapur',
        name: 'Tellapur',
        distance: '2.7 - 4.4 km',
        time: '8-12 mins',
        landmarks: ['Glendale/Meru International School', 'Aparna Apartments', 'Outer Ring Road (ORR) access'],
        demographic: 'High-end Gated Community residents & IT professionals',
        metaTitleSuffix: 'Near Aparna & Meru School'
    },
    'gachibowli': {
        id: 'gachibowli',
        name: 'Gachibowli',
        distance: '~4.0 km',
        time: '10-15 mins',
        landmarks: ['DLF Cyber City', 'Microsoft Campus', 'Mushroom Rock'],
        demographic: 'Tech employees & Financial District professionals',
        metaTitleSuffix: 'Near DLF & Microsoft'
    },
    'chanda-nagar': {
        id: 'chanda-nagar',
        name: 'Chanda Nagar',
        distance: '~2.8 km',
        time: '7-10 mins',
        landmarks: ['GSM Mall', 'Chanda Nagar Railway Station', 'Gangaram Ratnadeep'],
        demographic: 'Families & budget-conscious residents',
        metaTitleSuffix: 'Near GSM Mall'
    },
    'kondapur': {
        id: 'kondapur',
        name: 'Kondapur',
        distance: '~6.0 km',
        time: '15-20 mins',
        landmarks: ['Sarath City Capital Mall', 'Botanical Garden', 'KIMS Hospital'],
        demographic: 'Urban professionals looking for Clear Aligners',
        metaTitleSuffix: 'Near Sarath City Mall'
    },
    'serilingampally': {
        id: 'serilingampally',
        name: 'Serilingampally',
        distance: '1.2 - 3.4 km',
        time: '5-8 mins',
        landmarks: ['Lingampally Railway Station', 'P. Sundarayya Bridge', 'Nallagandla Dam'],
        demographic: 'High-density family residential hub',
        metaTitleSuffix: 'Near Railway Station'
    }
};

export const getLocalityData = (slug: string): LocalityData | null => {
    return LOCALITY_MATRIX[slug] || null;
};
