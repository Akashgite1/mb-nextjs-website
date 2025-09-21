interface Video {
    title: string
    link: string
}

interface NewsData {
    date: string
    title: string
    description: string
    videos?: Video[]
    youtubeEmbed?: string
}

export const newsData: NewsData[] = [
    {
        date: "September 21, 2025",
        title: "Donald Trump slams Indian IT sector: H-1B Visa Fees hiked by 80 Lakhs | USA | 2025",
        description:
            "Will it bring more layoffs or jobs in India?",
        // videos: [
        //     { title: "Full Report", link: "https://example.com/report" },
        //     { title: "Press Release", link: "https://example.com/press" },
        // ],
        youtubeEmbed: "https://www.youtube.com/embed/yxOkxUfGuFc?si=Wi5cgkoHeCr7sPlo"
    },
    {
        date: "September 20, 2025",
        title: "Job Market in 2025-2026 | Interview Process and Salaries",
        description:
            "Watch till end",
        // videos: [
        //     { title: "Full Report", link: "https://example.com/report" },
        //     { title: "Press Release", link: "https://example.com/press" },
        // ],
        youtubeEmbed: "https://www.youtube.com/embed/3Jearto87YI?si=PuNx1c0SWd8e3Wht"
    },
]
