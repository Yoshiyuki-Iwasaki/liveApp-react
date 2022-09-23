import React from "react";
import Layout from "../layout";
import Image from "next/image";
import Link from "next/link";
import style from "./top.module.scss";

const Presenter = () => {
  return (
    <Layout>
      <ul className={style.list}>
        <li className={style.listItem}>
          <Link href="/video/01">
            <a>
              <Image
                src="/thumb.png"
                width={320}
                height={250}
                alt="My avatar"
              />
              <div className={style.list_txtArea}>
                <h2 className={style.list_ttl}>
                  タイトルが入ります。タイトルが入ります。
                </h2>
                <p className={style.list_txt}>
                  説明が入ります。説明が入ります。説明が入ります。
                </p>
              </div>
            </a>
          </Link>
        </li>
        <li className={style.listItem}>
          <Link href="/video/02">
            <a>
              <Image
                src="/thumb.png"
                width={320}
                height={250}
                alt="My avatar"
              />
              <div className={style.list_txtArea}>
                <h2 className={style.list_ttl}>
                  タイトルが入ります。タイトルが入ります。
                </h2>
                <p className={style.list_txt}>
                  説明が入ります。説明が入ります。説明が入ります。
                </p>
              </div>
            </a>
          </Link>
        </li>
        <li className={style.listItem}>
          <Link href="/video/03">
            <a>
              <Image
                src="/thumb.png"
                width={320}
                height={250}
                alt="My avatar"
              />
              <div className={style.list_txtArea}>
                <h2 className={style.list_ttl}>
                  タイトルが入ります。タイトルが入ります。
                </h2>
                <p className={style.list_txt}>
                  説明が入ります。説明が入ります。説明が入ります。
                </p>
              </div>
            </a>
          </Link>
        </li>
        <li className={style.listItem}>
          <Link href="/video/03">
            <a>
              <Image
                src="/thumb.png"
                width={320}
                height={250}
                alt="My avatar"
              />
              <div className={style.list_txtArea}>
                <h2 className={style.list_ttl}>
                  タイトルが入ります。タイトルが入ります。
                </h2>
                <p className={style.list_txt}>
                  説明が入ります。説明が入ります。説明が入ります。
                </p>
              </div>
            </a>
          </Link>
        </li>
        <li className={style.listItem}>
          <Link href="/video/03">
            <a>
              <Image
                src="/thumb.png"
                width={320}
                height={250}
                alt="My avatar"
              />
              <div className={style.list_txtArea}>
                <h2 className={style.list_ttl}>
                  タイトルが入ります。タイトルが入ります。
                </h2>
                <p className={style.list_txt}>
                  説明が入ります。説明が入ります。説明が入ります。
                </p>
              </div>
            </a>
          </Link>
        </li>
      </ul>
    </Layout>
  );
};

export default Presenter;
