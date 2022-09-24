import React from "react";
import Layout from "../../../layout";
import style from "./video.module.scss";

type CommentFormType = {
  commentData: any;
  inputData: any;
  handleChange: any;
  handleSubmit: any;
};

const Presenter: React.FC<CommentFormType> = ({
  commentData,
  inputData,
  handleChange,
  handleSubmit,
}) => {
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
      <div className={style.comment}>
        <h2 className={style.commentTtl}>コメント</h2>
        <form className={style.commentInput} onSubmit={e => handleSubmit(e)}>
          <input
            placeholder="message"
            value={inputData}
            onChange={e => handleChange(e)}
          />
        </form>
        <ul className={style.commentList}>
          {commentData &&
            commentData.map((post: any, index: number) => (
              <li key={index} className={style.commentListItem}>
                <span className={style.commentListDate}>{post.created_at}</span>
                <span className={style.commentListContent}>{post.message}</span>
              </li>
            ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Presenter;
