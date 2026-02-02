export const AvailableMemberShipsData: {
  id: number;
  title: string;
  btnText: string;
  type: "student" | "instructor";
  imgURL: string;
}[] = [
  {
    id: 1,
    title: "FOR INSTRUCTORS",
    btnText: "Start a class today",
    type: "instructor",
    imgURL:
      "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "FOR STUDENTS",
    btnText: "Enter access code",
    type: "student",
    imgURL:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80",
  },
];
