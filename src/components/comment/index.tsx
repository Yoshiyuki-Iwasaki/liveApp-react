import React, { FC, useState } from "react";
import Presenter from "./presenter";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import db from "../../libs/firebase/client";

const Comment: FC<any> = ({ commentData }) => {
  const [inputData, setInputData] = useState<string>();

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

  return (
    <Presenter
      commentData={commentData}
      handleInput={handleInput}
      handleSubmit={handleSubmit}
    />
  );
};

export default Comment;
