export const mockCourseResults = [
  {
    id: "course-react-foundations",
    title: "React Foundations",
    instructor: "Ahmed Hassan",
    rating: 4.9,
    price: "$49",
    level: "Beginner",
  },
  {
    id: "course-next-masterclass",
    title: "Next.js Masterclass",
    instructor: "Mariam Adel",
    rating: 4.8,
    price: "$79",
    level: "Intermediate",
  },
  {
    id: "course-typescript-pro",
    title: "TypeScript Pro Patterns",
    instructor: "Omar Nabil",
    rating: 4.7,
    price: "$59",
    level: "Advanced",
  },
];

export const mockLiveClassResults = [
  {
    id: "live-react-workshop",
    title: "React Workshop Tonight",
    instructor: "Ahmed Hassan",
    startsAt: "Today, 8:00 PM",
    seatsLeft: 12,
    status: "Live soon",
  },
  {
    id: "live-ui-review",
    title: "UI Review Session",
    instructor: "Salma Youssef",
    startsAt: "Tomorrow, 6:30 PM",
    seatsLeft: 8,
    status: "Open",
  },
  {
    id: "live-node-api",
    title: "Building APIs with Node",
    instructor: "Karim Samir",
    startsAt: "Friday, 7:00 PM",
    seatsLeft: 15,
    status: "Open",
  },
];

export const mockInstructorResults = [
  {
    id: "instructor-ahmed-hassan",
    name: "Ahmed Hassan",
    specialty: "React and Next.js",
    coursesCount: 12,
    studentsCount: "2.4k",
    rating: 4.9,
  },
  {
    id: "instructor-mariam-adel",
    name: "Mariam Adel",
    specialty: "Frontend Architecture",
    coursesCount: 8,
    studentsCount: "1.7k",
    rating: 4.8,
  },
  {
    id: "instructor-salma-youssef",
    name: "Salma Youssef",
    specialty: "Product Design",
    coursesCount: 10,
    studentsCount: "2.1k",
    rating: 4.7,
  },
];

export type CourseSearchResult = (typeof mockCourseResults)[number];
export type LiveClassSearchResult = (typeof mockLiveClassResults)[number];
export type InstructorSearchResult = (typeof mockInstructorResults)[number];
