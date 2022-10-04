import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Presenter from "./presenter";
import { collection, getDocs, Timestamp } from "firebase/firestore";
import db from "../../../libs/firebase/client";

export type commentDataType = {
  id: number;
  user_id: number;
  createdAt: Timestamp;
  message: string;
};

const VideoDetailPage: NextPage = () => {
  const [commentData, setCommentData] = useState<any>();

  useEffect(() => {
    fetchMessage();
  }, []);

  const fetchMessage = async (): Promise<any> => {
    const commentData = collection(db, "message");
    getDocs(commentData).then(snapshot => {
      snapshot && setCommentData(snapshot.docs.map(doc => ({ ...doc.data() })));
    });
  };

  return <Presenter commentData={commentData} />;
};

export default VideoDetailPage;
