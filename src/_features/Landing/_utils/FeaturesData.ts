type featureType = {
  id: number;
  prefix: string;
  suffix: string;
  description: string | string[];
  imgURL: string;
};

export const featuresData: featureType[] = [
  {
    id: 1,
    prefix: "A user interface",
    suffix: "designed for the classroom",
    description: [
      "Teachers don’t get lost in the grid view and have a dedicated Podium space.",
      "TA’s and presenters can be moved to the front of the class.",
      "Teachers can easily see all students and class data at one time.",
    ],
    imgURL:
      "https://res.cloudinary.com/dvvmu40wx/image/upload/v1770059815/samples/eLearning/feature_1_v34cix.png",
  },
  {
    id: 2,
    prefix: "Tools",
    suffix: "For Teachers And Learners",
    description:
      "Class has a dynamic set of teaching tools built to be deployed and used during class. Teachers can handout assignments in real-time for students to complete and submit.",
    imgURL:
      "https://res.cloudinary.com/dvvmu40wx/image/upload/v1770059814/samples/eLearning/feature_2_kscphi.png",
  },
  {
    id: 3,
    prefix: "Assessments,",
    suffix: "Quizzes, Tests",
    description:
      "Easily launch live assignments, quizzes, and tests. Student results are automatically entered in the online gradebook.",
    imgURL:
      "https://res.cloudinary.com/dvvmu40wx/image/upload/v1770059815/samples/eLearning/feature_3_kdqhvc.png",
  },
  {
    id: 4,
    prefix: "Class Management Tools",
    suffix: "for Educators",
    description:
      "Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.",
    imgURL:
      "https://res.cloudinary.com/dvvmu40wx/image/upload/v1770059815/samples/eLearning/feature_4_t7iubl.png",
  },
];
