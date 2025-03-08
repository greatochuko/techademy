export type UserType = {
  _id: string;
  firstName: string;
  lastName: string;
  profilePicture: string;
};

export type ReviewType = {
  _id: string;
  user: UserType;
  message: string;
  rating: number;
};

export type CreatorType = {
  _id: string;
  name: string;
};

export type CourseType = {
  _id: string;
  title: string;
  thumbnail: string;
  youtubeURL: string;
  durationInSeconds: number;
  reviews: ReviewType[];
  category: string;
  creator: CreatorType;
  dateCreated: Date;
};
