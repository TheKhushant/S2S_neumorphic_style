// src/data/galleryData.ts
import { GalleryItem, GalleryTab } from "../types/gallery.types";

export const galleryItems: GalleryItem[] = [
    {
        id: 1,
        type: "image",
        category: "classroom",
        title: "Live Interactive Sessions",
        description: "Real-time learning with expert instructors",
        image: "/img/live.png",
        badge: "Live"
    },
    {
        id: 2,
        type: "discussion",
        category: "group",
        title: "Chhatrapati Shivaji Maharaj Jayanti Celebration",
        description: "A group discussion and cultural celebration honoring the legacy of Chhatrapati Shivaji Maharaj.",
        image: "/img/jayanti.jpeg",
        badge: "Celebration"
    },
    {
        id: 3,
        type: "discussion",
        category: "group",
        title: "Job Fair 2023",
        description: "Interactive group discussion on career opportunities, placements, and experiences from Job Fair 2023.",
        image: "/img/jobfair.jpeg",
        badge: "Job Fair 2023"
    },
    {
        id: 4,
        type: "discussion",
        category: "group",
        title: "Group Discussion on AI",
        description: "Interactive group discussion about AI-powered learning and its impact on education.",
        image: "/img/gd.jpeg",
        badge: "Group Discussion"
    },
    {
        id: 5,
        type: "image",
        category: "projects",
        title: "Hands-on Workshops",
        description: "Practical coding sessions",
        image: "/img/workshop.jpeg",
        badge: "Workshop"
    },
    {
        id: 6,
        type: "image",
        category: "success",
        title: "Certificate Distribution",
        description: "Celebrating student achievements",
        image: "/img/group.jpeg",
        badge: "Certified"
    }
];

// Utility function to generate tabs dynamically from gallery items
export const getGalleryTabs = (items: GalleryItem[]): GalleryTab[] => {
    const categoryMap = new Map<string, number>();

    // Count items per category
    items.forEach(item => {
        const count = categoryMap.get(item.category) || 0;
        categoryMap.set(item.category, count + 1);
    });

    // Create tabs array
    const tabs: GalleryTab[] = [
        { id: "all", label: "All", count: items.length }
    ];

    // Add category tabs
    const categoryOrder: GalleryItem["category"][] = ["classroom", "group", "projects", "success"];
    categoryOrder.forEach(category => {
        const count = categoryMap.get(category) || 0;
        if (count > 0) {
            tabs.push({
                id: category,
                label: category.charAt(0).toUpperCase() + category.slice(1),
                count
            });
        }
    });

    return tabs;
};