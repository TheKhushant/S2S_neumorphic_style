// scripts/generateDescriptions.js
const fs = require('fs');
const path = require('path');

const categories = {
    "Ambedkar": "Dr. B.R. Ambedkar Jayanti Celebration",
    "German": "German Language Workshop",
    "Jullelal": "Sant Shri Julelal Maharaj Jayanti",
    "Media_forum": "Media Forum Discussion",
    "Raisoni_Palloti_Technology": "Raisoni Palloti Technology Workshop",
    "radhikaTaiPandavCollage": "Radhika Tai Pandav College Event",
    "3_Days_CRT_Training_Workshop_at_KDK_College": "3 Days CRT Training Workshop at KDK College"
};

// Generate description mapping for your Gallery component
const generateDescriptionMap = () => {
    const descriptionMap = {};

    Object.entries(categories).forEach(([key, value]) => {
        descriptionMap[key] = `${value} - Showcasing memorable moments and highlights from the event.`;
    });

    fs.writeFileSync(
        './src/utils/galleryDescriptions.js',
        `// Auto-generated gallery descriptions\nexport const galleryDescriptions = ${JSON.stringify(descriptionMap, null, 2)};`
    );

    console.log('Descriptions generated successfully!');
};

generateDescriptionMap();