import { PricingPlan } from "./types";

export const pricingPlans: PricingPlan[] = [
    {
        id: "prep-kit",
        icon: "📚",
        title: "Frontend Interview Prep Kit",
        description:
            "The same material used by Cohort 1 & 2 participants — now available for self-paced learning with bi-weekly AMA sessions",
        features: [
            "16 Recorded Sessions",
            "Notion Study Materials",
            "Bi-Weekly AMA Sessions",
            "Lifetime Access",
        ],
        price: "₹4,999",
        buttonText: "Get the Prep Kit",
        featured: true,
    },
    {
        id: "mentorship",
        icon: "👥",
        title: "1-on-1 Mentorship",
        description:
            "Don't want to wait? Get personalized mentorship with weekly sessions, mock interviews, and hands-on guidance",
        features: [
            "Dedicated Staff Engineer Mentor",
            "Weekly 1-on-1 Sessions",
            "Mock Interviews & Feedback",
            "Resume & Profile Review",
        ],
        price: "₹15,000/month",
        buttonText: "Start Mentorship",
    },
    {
        id: "cohort",
        icon: "🚀",
        title: "Intensive Cohort",
        description:
            "Cohort 2 is live now! Join the waitlist for Cohort 3 — 8 weeks of live sessions, group learning, and placement support",
        features: [
            "8 Weeks Intensive",
            "Live Sessions + Recording",
            "1-on-1 Mentoring",
            "Placement Support",
        ],
        price: "Cohort 3: Oct 2026",
        buttonText: "Join Waitlist",
    },
];