import React, { FC } from "react";
import style from "./comment.module.scss";
import dayjs from "dayjs";

const Presenter: FC<any> = ({
  inputData,
  commentData,
  handleChange,
  handleSubmit,
}) => {
  return (
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
              <span className={style.commentListDate}>
                {dayjs(post.createdAt.toDate()).format("YYYY/MM/DD HH:mm")}
              </span>
              <span className={style.commentListContent}>{post.message}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Presenter;
