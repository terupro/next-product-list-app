import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "../../styles/Home.module.css";

{
  /* 
// SSGの場合

// ビルド時にレンダリングする (プリレンダリング) (params = url情報)
export async function getStaticProps({ params }) {
  const req = await fetch(`http://localhost:3000/${params.id}.json`);
  const data = await req.json();
  // Productに渡すprops
  return {
    props: {
      product: data,
    },
  };
}

// getStaticPropsで静的に生成されるパスを定義する
export async function getStaticPaths() {
  const req = await fetch(`http://localhost:3000/products.json`);
  const data = await req.json();
  const paths = data.map((product) => {
    return {
      params: {
        id: product,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
*/
}

// SSRの場合
// ユーザーのリクエスト時にレンダリングする
export async function getServerSideProps({ params }) {
  const req = await fetch(`http://localhost:3000/${params.id}.json`);
  const data = await req.json();
  // Productに渡すprops
  return {
    props: {
      product: data,
    },
  };
}

export default function Product({ product }) {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <div className={styles.container}></div>
      <main className={styles.main}>
        <h1>{id}のページです</h1>
        <img src={product.image} width="300" height="400" />
        <p>{product.name}</p>
        <br />
        <Link href="/products">商品一覧へ</Link>
      </main>
    </div>
  );
}
