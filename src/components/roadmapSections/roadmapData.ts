export interface TechnicalCourse {
  name: string
  link: string
  author?: string
  linkedIn?: string
  connect?: string
  testimonials?: string
  successStories?: string
  articles?: string
}

export interface RoadmapData {
  technicalCourses: TechnicalCourse[]
}

export const roadmapData: RoadmapData = {
  technicalCourses: [
    {
      name: "100% Interview Ready - GenAI React System Design DSA",
      link: "https://topmate.io/manohar_batra/1587369",
      author: "Manohar Batra",
      linkedIn: "https://www.linkedin.com/in/manoharbatra/",
      connect: "https://topmate.io/manohar",
      // articles: "https://medium.com/@contactmanoharbatra",
    //   testimonials: "https://reactcourse.com/testimonials",
    //   successStories: "https://reactcourse.com/success-stories",
    },
    {
      name: "100% Java Springboot Interview Ready",
      link: "https://topmate.io/manohar_batra/1751070",
      author: "Naveen Metta",
      linkedIn: "https://www.linkedin.com/in/metta-naveen/",
      connect: "https://topmate.io/naveen_metta",
    },
    {
      name: "Check how much IT Engineers are earning",
      link: "https://topmate.io/manohar_batra/1801807",
      author: "Manohar Batra",
    },
    {
      name: "800+ Companies are Hiring now!",
      link: "https://topmate.io/manohar_batra/1627184",
      author: "Manohar Batra",
      }
  ],
}
