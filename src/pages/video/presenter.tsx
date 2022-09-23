import React from "react";
import Layout from "../../layout";
import style from "./video.module.scss";

const Presenter = () => {
  return (
    <Layout>
      <h1 className={style.ttl}>動画名が入ります。</h1>
      <div className={style.video}>
        <iframe
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
        <p className={style.commentInputWrap}>
          <input type="text" name="content" />
        </p>
        <button className={style.commentBtn}>save</button>
        <ul className={style.commentList}>
          <li className={style.commentListItem}>
            <p className={style.commentListTxtArea}>
              <span className={style.commentListDate}>日付が入ります。</span>
              <span className={style.commentListContent}>コメント内容</span>
            </p>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default Presenter;
