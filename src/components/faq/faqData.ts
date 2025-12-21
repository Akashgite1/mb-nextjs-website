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

export const collegeQnA = [
    {
        title: "General Questions",
        data: [
            {
                question: "Should I accept sales or marketing job as they are offering 8.5 LPA?",
            },
            {
                question: "Should I accept job via Agency as they are asking for 20k and promised to give 8 LPA job?",
            },
            {
                question: "Should I join coding institute as they promise 20 LPA?",
            },
            {
                question: "I am doing BCA, should I accept job offer from TCS, Infosys, Deloitte or go ahead with MCA",
            }
        ],
    },
]

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
        ],
    },
    {
        question: "I have multiple job offers - Which one to select?",
        answer: "Watch these videos/playlist to decide or book 1:1 session.",
        category: "Multiple Job Offers",
        visible: true,
        videos: [
            {
                title: "Playlist",
                link: "https://www.youtube.com/watch?v=ZJCvjq1xkq0&list=PL2YCMAeLwTfHNUBjfGPzaxfHFo3Zk2TWJ",
            },
        ],
    },
]
