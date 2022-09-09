import "../styles/globals.css";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import { AppProps } from "next/app";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import { init } from "emailjs-com";
import * as gtag from "../utils/gtag";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Script from "next/script";

function MyApp({ Component, pageProps, router }: AppProps) {
    init(process.env.EMAILJS_USERID!);

    const url = `https://jayeshpotlabattini.com${router.route}`;

    const Router = useRouter();
    useEffect(() => {
        const handleRouteChange = (url: any) => {
            gtag.pageview(url);
        };
        Router.events.on("routeChangeComplete", handleRouteChange);
        return () => {
            Router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [Router.events]);

    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
            />
            <Script
                id="gtag"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
                }}
            />
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta
                    httpEquiv="Content-Type"
                    content="text/html; charset=utf-8 "
                />
            </Head>
            <div className="overscroll-x-none">
                <DefaultSeo {...SEO} />
                <AnimatePresence exitBeforeEnter>
                    <Component {...pageProps} key={url} />
                </AnimatePresence>
            </div>
        </>
    );
}

export default MyApp;
