export interface User {
  _id: string;
  courses: Course[];
  name: string;
  lastName: string;
  username: string;
  email: string;
  avatar: string;
  isOnline: boolean;
  inscriptionDate: string;
  phone: string;
}

export interface Course {
  _id: string;
  description: string;
  inscriptionDate: string;
  percentCompleted: number;
  title: string;
}
