import { Timestamp } from "firebase/firestore";

export type commentDataType = {
  id: number;
  user_id: number;
  createdAt: Timestamp;
  message: string;
};
