import { useState } from "react";
import type { NextPage } from "next";
import Presenter from "./presenter";
import comment from "../../../../commentData.json";

export type commentDataType = {
  id: number;
  user_id: number;
  created_at: any;
  message: string;
};

const VideoDetailPage: NextPage = () => {
  const [inputData, setInputData] = useState<string>();
  const [commentData, setCommentData] = useState<any>(comment);

  const handleInput = (e: any) => {
    setInputData(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputData) return;
    setCommentData([
      {
        id: commentData.length + 1,
        user_id: `1`,
        created_at: "12:00",
        message: inputData,
      },
      ...commentData,
    ]);
    setInputData("");
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
