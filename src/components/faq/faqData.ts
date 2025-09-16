interface Video {
    title: string
    link: string
}

export interface FAQItem {
    question: string
    answer: string
    category: string
    videos?: Video[]
}

export const faqData: FAQItem[] = [
  {
    question: "How to design Instagram? System Design Interview Question",
    answer: "Watch this video to understand how to answer this question.",
    category: "System Design",
    videos: [
      { title: "Video1", link: "https://www.youtube.com/watch?v=Q5zkePxzZag&list=PLHmHZfMSUWLrCi86sdetr1d3uQeoWXRyX" },
    //   { title: "Deploy on Netlify", link: "https://youtu.be/netlify-demo" },
    ],
  },
];