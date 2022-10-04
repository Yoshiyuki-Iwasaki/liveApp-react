import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Presenter from "./presenter";
import {
  addDoc,
  collection,
  query,
  serverTimestamp,
  getDocs,
  Timestamp,
} from "firebase/firestore";
import db from "../../../libs/firebase/client";

export type commentDataType = {
  id: number;
  user_id: number;
  createdAt: Timestamp;
  message: string;
};

const VideoDetailPage: NextPage = () => {
  const [inputData, setInputData] = useState<string>();
  const [commentData, setCommentData] = useState<any>();

  const handleInput = (e: any) => {
    setInputData(e.target.value);
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    if (!inputData) return;
    try {
      const docRef = await addDoc(collection(db, "message"), {
        id: new Date().getTime(),
        videoId: 1,
        userId: 1,
        message: inputData,
        createdAt: serverTimestamp(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setInputData("");
  };

  useEffect(() => {
    fetchMessage();
  }, []);

  const fetchMessage = async (): Promise<any> => {
    const commentData = collection(db, "message");
    getDocs(commentData).then(snapshot => {
      snapshot && setCommentData(snapshot.docs.map(doc => ({ ...doc.data() })));
    });
  };

  return (
    <Presenter
      commentData={commentData}
      inputData={inputData}
      handleChange={handleInput}
      handleSubmit={handleSubmit}
    />
  );
};

export default VideoDetailPage;
