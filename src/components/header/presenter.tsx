import React from "react";
import Link from "next/link";
import style from "./header.module.scss";

const Presenter = () => {
  return (
    <header className={style.header}>
      <div className={style.inner}>
        <Link href="/" as="/" passHref>
          <a className={style.txt}>LiveApp</a>
        </Link>
      </div>
    </header>
  );
};

export default Presenter;
