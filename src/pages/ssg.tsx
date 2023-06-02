import { NextPage } from "next";
import Head from "next/head";
import { type } from "os";

type SSGProps = {};

// SSG向けのページを実装
// NextPageはNext.jsのPage向けの型
// NextPage<props>でpropsが入るPageであることを明示
const SSG: NextPage<SSGProps> = () => {
    return (
        <div>
            <Head>
                <title>Static Site Generation</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <p>このサイトは静的サイト生成によってビルド時に生成されたページです</p>
            </main>
        </div>
    )
}

export default SSG;