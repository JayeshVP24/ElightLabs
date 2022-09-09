/* eslint-disable @next/next/no-img-element */
import { domAnimation, LazyMotion, m } from "framer-motion";
import { NextPage } from "next";
import { NextSeo, NextSeoProps } from "next-seo";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

const Work: NextPage = () => {
    const SEO: NextSeoProps = {
        title: "Our Work | Elight Labs",
        description: "Client Projects done at Elight Labs",
        openGraph: {
            title: "Our Work | Elight Labs",
            description: "Client Projects done at Elight Labs",
        },
    };

    return (
        <LazyMotion features={domAnimation}>
            <NextSeo {...SEO} />
            <div>
                <Navbar current="Our Work" />
                <main>
                    {/* <section className="mx-7 md:mx-10 mt-14 mb-32 flex flex-col md:flex-row-reverse items-center justify-around ">
                        <div className="md:w-2/5">
                            <m.h1
                                initial={{
                                    y: -50,
                                    opacity: 0,
                                }}
                                animate={{
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        delay: 0.2,
                                    },
                                }}
                                exit={{
                                    y: -50,
                                    opacity: 0,
                                }}
                                transition={{
                                    type: "tween",
                                }}
                                className="text-black font-bold text-5xl  lg:text-[5rem] leading-[3rem] lg:leading-[5rem] "
                            >
                                <span>
                                    Coming{" "}
                                    <span className="text-primary">Soon</span>{" "}
                                </span>
                            </m.h1>
                            <div className="flex text-xs mt-4 lg:text-sm space-x-7  ">
                                <Link passHref href="/">
                                    <m.a
                                        initial={{
                                            scale: 0,
                                            opacity: 0,
                                        }}
                                        animate={{
                                            scale: 1,
                                            opacity: 1,
                                            transition: {
                                                delay: 0.3,
                                            },
                                        }}
                                        exit={{
                                            scale: 0,
                                            opacity: 0,
                                        }}
                                    >
                                        <button className="bg-primary font-medium text-white py-2 rounded-xl w-36 hover:ring active:scale-95 transition-all ring-primary ring-opacity-40">
                                            Go to Home
                                        </button>
                                    </m.a>
                                </Link>
                                <Link passHref href="/contact">
                                    <m.a
                                        initial={{
                                            scale: 0,
                                            opacity: 0,
                                        }}
                                        animate={{
                                            scale: 1,
                                            opacity: 1,
                                            transition: {
                                                delay: 0.3,
                                            },
                                        }}
                                        exit={{
                                            scale: 0,
                                            opacity: 0,
                                        }}
                                    >
                                        <button className="text-secondary font-medium border-2 border-primary py-2 w-36 rounded-xl hover:ring active:scale-95 transition-all ring-primary ring-opacity-20 ">
                                            Contact us
                                        </button>
                                    </m.a>
                                </Link>
                            </div>
                        </div>
                        <div className="mt-5 md:w-2/5 ">
                            <m.img
                                initial={{
                                    y: -70,
                                    opacity: 0,
                                }}
                                animate={{
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        duration: 0.3,
                                    },
                                }}
                                exit={{
                                    y: -70,
                                    opacity: 0,
                                }}
                                src="/work.svg"
                                alt="Services illustration"
                            />
                        </div>
                    </section> */}
                    <section className="mx-7 md:mx-10 mt-3 flex flex-col md:flex-row-reverse items-center justify-around ">
                        <div className="md:w-2/5">
                            <h1 className="text-black font-semibold text-3xl  lg:text-[3rem] leading-[3rem] lg:leading-[5rem] ">
                                <span>Work. Done. <span className="text-primary" >Elight.</span> </span>
                            </h1>
                        </div>
                        <div className="mt-5 md:w-2/5 ">
                            <img
                                src="/work.svg"
                                alt="Work illustration"
                            />
                        </div>
                    </section>
                    <section className="mx-5 mt-16 lg:mt-24">
                        <div className="relative md:px-10 flex -mb-8 items-center ">                            
                            <m.h2
                            initial={{
                                y: -50,
                                opacity: 0,
                            }}
                            animate={{
                                y: 0,
                                opacity: 1,
                                transition: {
                                    delay: 0.2,
                                },
                            }}
                            exit={{
                                y: -50,
                                opacity: 0,
                            }}
                            transition={{
                                type: "tween",
                            }}
                            className="text-2xl lg:text-4xl mx-auto font-semibold text-secondary flex flex-col ">
                                Client Projects
                            </m.h2>
                        </div>
                        <div className="md:w-[90%] mx-auto my-16 space-y-8 md:space-y-14 ">
                            <Product
                                title="Annamaya Multi Cuisine Restaurant and Bar"
                                year="2021"
                                type="Web Design and Development"
                                link="https://annamayarestaurant.in"
                                odd
                            >
                                <span className="text-[12rem] absolute top-0 -right-6 md:left-[34%] lg:left-[36%] lg:top-[50%] lg:translate-y-[-50%] z-0 ">
                                    1
                                </span>
                                <img
                                    className="rounded-[30px] md:rounded-[50px] w-[100%] z-10 "
                                    width="1600"
                                    height="1200"
                                    src="https://ik.imagekit.io/elightlabs/elightlabs/work/tr:lo-true,pr-true/annamaya.png"
                                    alt="img"
                                />
                            </Product>
                            <Product
                                title="Ladu Samrat Sweets and Snacks"
                                year="2021"
                                type="Web Design and Development"
                                link="https://ladusamrat.in/"
                            >
                                <span className="text-[12rem] absolute top-0 -right-6 md:right-[34%] lg:right-[36.5%] lg:top-[50%] lg:translate-y-[-50%] z-0 ">
                                    2
                                </span>
                                <img
                                    className="rounded-[30px] md:rounded-[50px] w-[100%] z-10 "
                                    width="1600"
                                    height="1200"
                                    src="https://ik.imagekit.io/elightlabs/elightlabs/work/tr:lo-true,pr-true/ladu-samrat.png"
                                    alt="img"
                                />
                            </Product>
                            <Product
                                title="Dex Data Processing"
                                year="2021"
                                type="Web Design and Development"
                                link="https://www.dexdatapro.in/"
                                odd
                            >
                                <span className="text-[12rem] absolute top-0 -right-6 md:left-[30%] lg:left-[34%] lg:top-[50%] lg:translate-y-[-50%] z-0 ">
                                    3
                                </span>
                                <img
                                    className="rounded-[30px] md:rounded-[50px] w-[100%] z-10 "
                                    width="1600"
                                    height="1200"
                                    src="https://ik.imagekit.io/elightlabs/elightlabs/work/tr:lo-true,pr-true/dex-data.png"
                                    alt="img"
                                />
                            </Product>
                            {/* <Product
                                title="Lorem Ipsum Muahfae"
                                year="2021"
                                type="Web Design"
                                link="/"
                            >
                                <span className="text-[12rem] absolute top-0 -right-6 md:right-[32%] lg:right-[34.5%] lg:top-[50%] lg:translate-y-[-50%] z-0 ">
                                    4
                                </span>
                                <img
                                    className="rounded-[30px] md:rounded-[50px] w-[100%] z-10 "
                                    width="1600"
                                    height="1200"
                                    src="https://cdn.dribbble.com/users/8590047/screenshots/16267720/media/509c4e4ceedc91f03705bbcf615c66e1.png?compress=1&resize=1600x1200"
                                    alt="img"
                                />
                            </Product> */}
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </LazyMotion>
    );
};

const Product: React.FC<{
    title: string;
    year: string;
    type: string;
    link: string;
    odd?: boolean;
}> = ({ title, year, type, link, children, odd = false }) => {
    return (
        <div
            className={`bg-[#C1DEFF] flex ${
                odd ? "flex-col md:flex-row" : "flex-col md:flex-row-reverse"
            } rounded-[40px] md:rounded-[60px] p-4 marker:d:h-[80vh] relative overflow-hidden`}
        >
            <div className="md:w-2/5 flex flex-col my-4 lg:my-auto md:text-center relative -left-4 px-4 md:ml-3">
                <h1 className="font-bold text-xl md:text-3xl">{title}</h1>
                <span className="text-lg md:text-xl my-4 md:my-8 lg:my-16">
                    <h2>{year}</h2>
                    <h2>{type}</h2>
                </span>
                <Link href={link} passHref>
                    <a className="w-max border-2 border-primary md:mx-auto px-4 py-1 text-sm md:text-base rounded-xl hover:ring ring-primary ring-opacity-20 active:scale-95 transition-all">
                        Visit Website
                    </a>
                </Link>
            </div>
            <div className="md:w-3/5 mt-5 md:mt-0 flex items-center font-extrabold text-secondary text-opacity-30 overflow-visible md:mr-4">
                {children}
            </div>
        </div>
    );
};

export default Work;
