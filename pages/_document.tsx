// eslint-disable-next-line @next/next/no-document-import-in-page
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

type Props = {};

class Document extends NextDocument<Props> {
    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* Create all your favicons and put them inside public/favicons folder */}
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/favicons/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/favicons/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/favicons/favicon-16x16.png"
                    />
                    <link rel="manifest" href="/favicons/site.webmanifest" />
                    <link
                        rel="mask-icon"
                        href="/favicon/safari-pinned-tab.svg"
                        color="#454545"
                    />
                    <meta name="msapplication-TileColor" content="#454545" />
                    <meta name="theme-color" content="#454545" />
                </Head>
                <body className="font-main bg-background w-[100vw] max-w-[100vw]  ">
                    <Main />
                    
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default Document;
