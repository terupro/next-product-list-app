import Link from "next/link";
import React from "react";
import styles from "../../styles/Home.module.css";

export default function ProductsList() {
  return (
    <div>
      <div className={styles.container}></div>
      <main className={styles.main}>
        <h2 className={styles.title}>商品一覧</h2>
        <ul>
          <li>
            <Link href="/products/smartphone">
              <a>スマートフォン</a>
            </Link>
          </li>
          <li>
            <Link href="/products/pc">
              <a>パソコン</a>
            </Link>
          </li>
          <li>
            <Link href="/products/headphone">
              <a>ヘッドフォン</a>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
