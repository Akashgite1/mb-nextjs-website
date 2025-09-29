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
        date: "September 29, 2025",
        title: "Accenture laid off 11000 employees | 2025",
        description:
            "They are saying AI is the root cause of layoffs but reality is different",
        // videos: [
        //     { title: "Full Report", link: "https://example.com/report" },
        //     { title: "Press Release", link: "https://example.com/press" },
        // ],
        youtubeEmbed: "https://www.youtube.com/embed/FkUFkGFY3HU?si=giUywF7bQx_BD0A4"
    },
    {
        date: "September 21, 2025",
        title: "Donald Trump slams Indian IT sector: H-1B Visa Fees hiked by 80 Lakhs | USA | 2025",
        description:
            "Will it bring more layoffs or jobs in India?",
        youtubeEmbed: "https://www.youtube.com/embed/yxOkxUfGuFc?si=Wi5cgkoHeCr7sPlo"
    },
    {
        date: "September 20, 2025",
        title: "Job Market in 2025-2026 | Interview Process and Salaries",
        description:
            "My predictions for the job market in 2025 and 2026 based on my 10+ yrs exp in IT industry",
        youtubeEmbed: "https://www.youtube.com/embed/3Jearto87YI?si=PuNx1c0SWd8e3Wht"
    },
]
