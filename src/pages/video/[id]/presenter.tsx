import React from "react";
import Layout from "../../../layout";
import style from "./video.module.scss";
import Comment from "../../../components/comment";

type VideoDetailType = {
  commentData: any;
};

const Presenter: React.FC<VideoDetailType> = ({ commentData }) => {
  return (
    <Layout>
      <h1 className={style.ttl}>動画名が入ります。</h1>
      <div className={style.video}>
        <iframe
          className={style.videoFrame}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/jfKfPfyJRdk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className={style.like}>
        <h2 className={style.likeTtl}>いいね</h2>
        <button className={style.likeBtn}>いいねマーク</button>
      </div>
      <Comment commentData={commentData} />
    </Layout>
  );
};

export default Presenter;
