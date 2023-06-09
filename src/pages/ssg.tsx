import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { type } from "os";

type SSGProps = {
  message: string;
};

// SSG向けのページを実装
// NextPageはNext.jsのPage向けの型
// NextPage<props>でpropsが入るPageであることを明示
const SSG: NextPage<SSGProps> = (props) => {
  const { message } = props;

  return (
    <div>
      <Head>
        <title>Static Site Generation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>このサイトは静的サイト生成によってビルド時に生成されたページです</p>
        <p>{message}</p>
      </main>
    </div>
  );
};

// getStaticPropsはビルドによって事前に実行される
//GetStaticProps<SSGProps>はSSGPropsを引数に取るgetStaticPropsの型

export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
  const timestamp = new Date().toLocaleString();
  const message = `${timestamp}にgetStaticPropsが実行されました`;

  console.log(message);

  return {
    // ここで返したpropsを元にSSGコンポーネントが生成される
    props: {
      message,
    },
  };
};

export default SSG;
