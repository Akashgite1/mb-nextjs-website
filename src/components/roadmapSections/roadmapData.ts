export interface TechnicalCourse {
  name: string
  link: string
  author?: string
  linkedIn?: string
  connect?: string
  testimonials?: string
  successStories?: string
}

export interface RoadmapData {
  technicalCourses: TechnicalCourse[]
}

export const roadmapData: RoadmapData = {
  technicalCourses: [
    {
      name: "React Interview Ready",
      link: "https://topmate.io/manohar_batra/1587369?utm_source=public_profile&utm_campaign=manohar_batra",
      author: "Manohar Batra",
      linkedIn: "https://linkedin.com/in/johndoe",
      connect: "https://linkedin.com/in/johndoe",
    //   testimonials: "https://reactcourse.com/testimonials",
    //   successStories: "https://reactcourse.com/success-stories",
    },
    {
      name: "Java Springboot Interview Ready",
      link: "https://topmate.io/manohar_batra/1751070?utm_source=public_profile&utm_campaign=manohar_batra",
      author: "Naveen Metta",
      linkedIn: "https://www.linkedin.com/in/metta-naveen/",
      connect: "https://topmate.io/naveen_metta",
    //   testimonials: "https://nodecourse.com/testimonials",
    },
  ],
}
