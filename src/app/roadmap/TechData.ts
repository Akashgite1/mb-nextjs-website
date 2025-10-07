export const COURSE_LINK: Record<string, string> = {
  ReactJS: 'www.link1.com',
  NodeJS: 'www.link2.com',
}

export interface LinkItem {
    label: string
    url: string
}

export interface RowDataItem {
    title: string
    type: "FREE" | "Course" | string // you can make this stricter if needed
    links?: LinkItem[]
}

export interface TopicSection {
    title: string
    rowData: RowDataItem[]
}

export interface TopicCategory {
    category: string
    data: TopicSection[]
}

export const topics: TopicCategory[] = [
    {
        category: "frontend",
        data: [
            {
                title: "Javascript",
                rowData: [
                    {
                        title: "JS - Output based Ques #1",
                        type: "FREE",
                        links: [
                            {
                                label: "Article",
                                url: "https://medium.com/@contactmanoharbatra/js-reverse-a-string-1fb6539e0597",
                            },
                        ],
                    },
                ],
            },
            {
                title: "ReactJS",
                rowData: [
                    {
                        title: "Everything about ReactJs",
                        type: "Course",
                    },
                ],
            },
        ],
    },
    {
        category: "backend",
        data: [],
    },
]
