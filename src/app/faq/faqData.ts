interface Video {
    title: string
    link: string
}

export interface FAQItem {
    question: string
    answer?: string
    category: string
    visible: boolean
    videos?: Video[]
}

export const faqData: FAQItem[] = [
    {
        question: "How to design Instagram? System Design Interview Question",
        answer: "Watch these videos/playlist to understand how to answer this question.",
        category: "System Design",
        visible: true,
        videos: [
            {
                title: "Playlist",
                link: "https://www.youtube.com/watch?v=Q5zkePxzZag&list=PLHmHZfMSUWLrCi86sdetr1d3uQeoWXRyX",
            },
            {
                title: "Video1",
                link: "https://www.youtube.com/watch?v=Q5zkePxzZag&list=PLHmHZfMSUWLrCi86sdetr1d3uQeoWXRyX",
            },
        ],
    },
    {
        question:
            "I have one day Dual Employment in PF portal - Background Verification",
        answer: "Watch these videos/playlist to understand how to answer this question or book 1:1 session.",
        category: "Background Verification",
        visible: true,
        videos: [
            {
                title: "Playlist",
                link: "https://www.youtube.com/watch?v=Ms8h7ivA8b8&list=PL2YCMAeLwTfEH1DKBacWBYJ1AvzH90s0x",
            },
            //   { title: "Deploy on Netlify", link: "https://youtu.be/netlify-demo" },
        ],
    },
    {
        question:
            "Stay away from people/manager who speak so sweetly but stab you in the back",
        category: "Corporate Gyaan",
        visible: true,
    },
    {
        question:
            "Build a network such that when people leave the company, they give referrals, not sweets.",
        category: "Corporate Gyaan",
        visible: true,
    },
    {
        question:
            "Don't work under such manager who thinks your work is easy and always keep you under tight deadlines",
        category: "Corporate Gyaan",
        visible: true,
    },
    {
        question:
            "Stay sway from such manager jo bole 1 saal aur ruk ja meine tere liye bhut kuch soch rakha hai",
        category: "Corporate Gyaan",
        visible: true,
    },
    {
        question:
            "Anonymous feedbacks are not anonymous. They are tracked and used against you.",
        category: "Corporate Gyaan",
        visible: true,
    },
    {
        question:
            "When long weekend is coming and everyone is taking leaves, you don't take leave but Enjoy paid leave",
        category: "Corporate Gyaan",
        visible: true,
    },
    {
        question:
            "Weekdays will not give you recognition/hike/promotions, weekends will.",
        category: "Corporate Gyaan",
        visible: true,
    },
]
