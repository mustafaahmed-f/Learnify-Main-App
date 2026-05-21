export type DiscoveryCourse = {
  id: string;
  title: string;
  instructor: string;
  level: string;
  duration: string;
  lessons: number;
  rating: number;
  students: string;
  price: string;
  badge: string;
  accent: string;
};

export type DiscoveryInstructor = {
  id: string;
  name: string;
  role: string;
  specialty: string;
  rating: number;
  students: string;
  courses: number;
  accent: string;
};

export type DiscoveryLiveClass = {
  id: string;
  title: string;
  instructor: string;
  startsAt: string;
  duration: string;
  seatsLeft: number;
  level: string;
  accent: string;
};
