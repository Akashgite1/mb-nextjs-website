interface Video {
    title: string
    link: string
}

export interface FAQItem {
    question: string
    answer: string
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
        question: "I have one day Dual Employment in PF portal - Background Verification",
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
]
