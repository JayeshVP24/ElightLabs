/* eslint-disable @next/next/no-img-element */
import { domAnimation, LazyMotion, m } from "framer-motion";
import { NextPage } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
    return (
        <LazyMotion features={domAnimation}>
            <div>
                <Navbar current="Home" />

                <main className="w-full mt-8 relative">
                    <section
                        id="hero"
                        className="lg:w-8/12 mx-auto flex h-[60vh] md:h-[50vh] items-center flex-col lg:flex-row "
                    >
                        <div className="w-3/4 lg:w-2/4 mr-0">
                            <m.h1
                                initial={{
                                    y: -50,
                                    opacity: 0,
                                }}
                                animate={{
                                    y: 0,
                                    opacity: 1,
                                }}
                                exit={{
                                    y: -50,
                                    opacity: 0,
                                }}
                                transition={{
                                    type: "tween",
                                }}
                                className="font-bold relative text-primary text-md lg:text-xl mb-2 lg:mb-4"
                            >
                                Welcome to ElightLabs
                            </m.h1>
                            <m.h2
                                initial={{
                                    y: -50,
                                    opacity: 0,
                                }}
                                animate={{
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        delay: 0.1,
                                    },
                                }}
                                exit={{
                                    y: -50,
                                    opacity: 0,
                                }}
                                transition={{
                                    type: "tween",
                                }}
                                className="text-black relative font-medium text-xl lg:text-3xl mb-4 "
                            >
                                We are a creative group of people who
                                design influential brands and digital
                                experiences
                            </m.h2>
                            <div className="flex text-xs lg:text-sm space-x-7  ">
                                <Link passHref href="/services">
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
                                            Check Services
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
                                            Start a Project
                                        </button>
                                    </m.a>
                                </Link>
                            </div>
                        </div>
                        <div className="w-4/5 md:w-3/6 lg:w-2/4 mt-8 lg:mt-0 lg:pl-6">
                            <m.img
                                initial={{
                                    y: -50,
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
                                    y: -50,
                                    opacity: 0,
                                }}
                                className="relative"
                                src="/heroIllustr.svg"
                                alt="Illustration of future preparation"
                            />
                        </div>
                    </section>

                    <aside className="overflow-hidden relative leading-[0] w-full mt-5 md:-translate-y-10 ">
                        <svg
                            data-name="Layer 1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1200 120"
                            preserveAspectRatio="none"
                            className="rotate-180 h-[130px] lg:h-[230px] w-[200%] "
                        >
                            <path
                                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                                opacity=".25"
                                className="shape-fill"
                            ></path>
                            <path
                                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                                opacity=".5"
                                className="shape-fill"
                            ></path>
                            <path
                                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                                className="shape-fill"
                            ></path>
                        </svg>
                        <svg
                            data-name="Layer 1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1200 120"
                            preserveAspectRatio="none"
                            className="rotate-180 relative block lg:w-[150%] h-[130px] -mt-1 "
                        >
                            <path
                                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                                className="shape-fill"
                            ></path>
                        </svg>
                    </aside>

                    <section className="lg:mx-20">
                        <div className="relative px-2 md:px-10 flex  items-center ">
                            <m.h1
                                initial={{
                                    y: -10,
                                    opacity: 0,
                                }}
                                animate={{
                                    y: 0,
                                    opacity: 1,
                                }}
                                exit={{
                                    y: -10,
                                    opacity: 0,
                                }}
                                className="absolute text-[3.25rem] lg:text-8xl font-extrabold text-primary text-opacity-20 "
                            >
                                Our Services
                            </m.h1>
                            <h2 className="text-5xl lg:text-6xl ml-10 font-semibold text-secondary flex flex-col ">
                                <span>What</span>
                                <span>we Offer</span>
                            </h2>
                        </div>

                        <div className="my-10 mx-5 translate-y-16 grid md:grid-cols-2 md:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2 grid-flow-row justify-items-center ">
                            <Service title="Tech Solutions">
                                <img
                                    width="218"
                                    height="169"
                                src="serviceArts/techSolutions.svg"
                                    alt="illustration for Tech Solutions"
                                    className="-translate-y-16 mb-2 "
                                />
                            </Service>

                            <Service title="Designing">
                                <img
                                    width="202"
                                    height="160"
                                src="serviceArts/designing.svg"
                                    alt="illustration for Designing"
                                    className="-translate-y-16 mb-2 "
                                />
                            </Service>

                            <Service title="Branding Solutions">
                                <img
                                    width="199"
                                    height="166"
                                src="serviceArts/brandingSolutions.svg"
                                    alt="illustration for Branding Solutions"
                                    className="-translate-y-16"
                                />
                            </Service>

                            <Service title="Digital Marketing and advertising">
                                <img
                                    width="186"
                                    height="156"
                                src="serviceArts/digitalMarketingAndAdvertising.svg"
                                    alt="illustration for Digital Marketing and advertising"
                                    className="-translate-y-16 mb-2 "
                                />
                            </Service>

                            <Service title="Animations and Graphics">
                                <img
                                    width="186"
                                    height="156"
                                src="serviceArts/animationsAndGraphics.svg"
                                    alt="illustration for Animations and Graphics"
                                    className="-translate-y-16 mb-2 "
                                />
                            </Service>
                            <Service title="Shots and Edits">
                                <img
                                    width="250"
                                    height="156"
                                src="serviceArts/shotsAndEdits.svg"
                                    alt="illustration for Shots and Edits"
                                    className="-translate-y-16 mb-2 "
                                />
                            </Service>
                        </div>
                    </section>

                    <aside className="overflow-hidden relative leading-[0] w-full -translate-y-10 ">
                        <svg
                            data-name="Layer 1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1200 120"
                            preserveAspectRatio="none"
                            className="h-[100px] lg:h-[130px] w-[300%] lg:w-[128%] "
                        >
                            <path
                                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                                className="shape-fill"
                            ></path>
                        </svg>
                        <svg
                            data-name="Layer 1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1200 120"
                            preserveAspectRatio="none"
                            className="relative block  lg:w-[150%] h-[140px] lg:h-[200px] -mt-1 "
                        >
                            <path
                                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                                opacity=".25"
                                className="shape-fill"
                            ></path>
                            <path
                                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                                opacity=".5"
                                className="shape-fill"
                            ></path>
                            <path
                                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                                className="shape-fill"
                            ></path>
                        </svg>
                    </aside>

                    <section className="my-16 px-2 w-full  ">
                        <div className="relative px-2 md:px-10 flex  items-center ">
                            <h1 className="absolute text-[3.25rem] md:text-8xl font-extrabold text-primary text-opacity-20 ">
                                Why us
                            </h1>
                            <h2 className="text-5xl lg:text-6xl ml-10 font-semibold text-secondary flex flex-col ">
                                <span>Why Choose</span>
                                <span className="mt-1 text-primary">
                                    Elight Labs
                                </span>
                            </h2>
                        </div>

                        <div className="w-full space-y-6 lg:space-y-0 mt-8 md:grid md:grid-cols-2 md:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2 md:justify-items-center md:items-center md:px-6 ">
                            <m.span
                                whileHover={{
                                    y: -10,
                                }}
                                className="bg-primary relative mx-auto md:mx-0 w-[20rem] md:w-[24rem] md:my-6 h-80 space-y-4 px-8 py-6 flex flex-col items-center font-semibold text-white text-2xl rounded-[50px]"
                            >
                                <img
                                    width="227"
                                    height="183"
                                    className="w-full h-[80%] "
                                    src="/whyUs/costEfficiency.svg"
                                    alt="Illustration for Cost Efficiency"
                                />
                                <h4>Cost Efficiency</h4>
                            </m.span>
                            <m.span
                                whileHover={{
                                    y: -10,
                                }}
                                className="bg-primary relative mx-auto md:mx-0 w-[20rem] md:w-[24rem] md:my-6 h-80 space-y-4 px-8 py-6 flex flex-col items-center font-semibold text-white text-2xl rounded-[50px]"
                            >
                                <img
                                    width="241"
                                    height="179"
                                    className="w-full h-[80%] "
                                    src="/whyUs/competitiveness.svg"
                                    alt="Illustration for Competitiveness"
                                />
                                <h4>Competitiveness</h4>
                            </m.span>
                            <m.span
                                whileHover={{
                                    y: -10,
                                }}
                                className="bg-primary relative mx-auto md:mx-0 w-[20rem] md:w-[24rem] md:my-6 h-80 space-y-4 px-8 py-6 flex flex-col items-center font-semibold text-white text-2xl rounded-[50px]"
                            >
                                <img
                                    width="246"
                                    height="169"
                                    className="w-full h-[80%] "
                                    src="/whyUs/technology.svg"
                                    alt="Illustration for Technology"
                                />
                                <h4>Technology</h4>
                            </m.span>
                            <m.span
                                whileHover={{
                                    y: -10,
                                }}
                                className="bg-primary relative mx-auto md:mx-0 w-[20rem] md:w-[24rem] md:my-6 h-80 space-y-4 px-8 py-6 flex flex-col items-center font-semibold text-white text-2xl rounded-[50px]"
                            >
                                <img
                                    width="279"
                                    height="159"
                                    className="w-full h-[80%] "
                                    src="/whyUs/effectiveness.svg"
                                    alt="Illustration for Effectiveness"
                                />
                                <h4>Effectiveness</h4>
                            </m.span>
                            <m.span
                                whileHover={{
                                    y: -10,
                                }}
                                className="bg-primary relative mx-auto md:mx-0 w-[20rem] md:w-[24rem] md:my-6 h-80 space-y-4 px-8 py-6 flex flex-col items-center font-semibold text-white text-2xl rounded-[50px]"
                            >
                                <img
                                    width="238"
                                    height="178"
                                    className="w-full h-[80%] "
                                    src="/whyUs/timeManagement.svg"
                                    alt="Illustration for Time Management"
                                />
                                <h4>Time Management</h4>
                            </m.span>
                            <m.span
                                whileHover={{
                                    y: -10,
                                }}
                                className="bg-primary relative mx-auto md:mx-0 w-[20rem] md:w-[24rem] md:my-6 h-80 space-y-4 px-8 py-6 flex flex-col items-center font-semibold text-white text-2xl rounded-[50px]"
                            >
                                <img
                                    width="259 "
                                    height="175"
                                    className="w-full h-[80%] "
                                    src="/whyUs/flexibility.svg"
                                    alt="Illustration for Flexibility"
                                />
                                <h4>Flexibility</h4>
                            </m.span>
                        </div>
                    </section>

                    {/* <section className="mx-5">
                        <div className="relative px-2 md:px-10 flex  items-center ">
                            <h1 className="absolute text-[3.25rem] lg:text-8xl font-extrabold text-primary text-opacity-20 ">
                                Our Work
                            </h1>
                            <h2 className="text-5xl lg:text-6xl ml-10 font-semibold text-secondary flex flex-col ">
                                <span>Happy</span>
                                <span>Clients</span>
                            </h2>
                        </div>
                        <div className="md:w-[90%] mx-auto my-16 space-y-8 md:space-y-14 ">
                            <Product
                                title="Lorem Ipsum Muahfae"
                                year="2021"
                                type="Web Design"
                                link="/"
                                odd
                            >
                                <span className="text-[12rem] absolute top-0 -right-6 md:left-[34%] lg:left-[36%] lg:top-[50%] lg:translate-y-[-50%] z-0 ">
                                    1
                                </span>
                                <img
                                    className="rounded-[30px] md:rounded-[50px] w-[100%] z-10 "
                                    width="1600"
                                    height="1200"
                                    src="https://cdn.dribbble.com/users/8590047/screenshots/16267720/media/509c4e4ceedc91f03705bbcf615c66e1.png?compress=1&resize=1600x1200"
                                    alt="img"
                                />
                            </Product>
                            <Product
                                title="Lorem Ipsum Muahfae"
                                year="2021"
                                type="Web Design"
                                link="/"
                            >
                                <span className="text-[12rem] absolute top-0 -right-6 md:right-[34%] lg:right-[36.5%] lg:top-[50%] lg:translate-y-[-50%] z-0 ">
                                    2
                                </span>
                                <img
                                    className="rounded-[30px] md:rounded-[50px] w-[100%] z-10 "
                                    width="1600"
                                    height="1200"
                                    src="https://cdn.dribbble.com/users/8590047/screenshots/16267720/media/509c4e4ceedc91f03705bbcf615c66e1.png?compress=1&resize=1600x1200"
                                    alt="img"
                                />
                            </Product>
                            <Product
                                title="Lorem Ipsum Muahfae"
                                year="2021"
                                type="Web Design"
                                link="/"
                                odd
                            >
                                <span className="text-[12rem] absolute top-0 -right-6 md:left-[30%] lg:left-[34%] lg:top-[50%] lg:translate-y-[-50%] z-0 ">
                                    3
                                </span>
                                <img
                                    className="rounded-[30px] md:rounded-[50px] w-[100%] z-10 "
                                    width="1600"
                                    height="1200"
                                    src="https://cdn.dribbble.com/users/8590047/screenshots/16267720/media/509c4e4ceedc91f03705bbcf615c66e1.png?compress=1&resize=1600x1200"
                                    alt="img"
                                />
                            </Product>
                            <Product
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
                            </Product>
                        </div>
                    </section> */}
                </main>

                <Footer />
            </div>
        </LazyMotion>
    );
};

// const Product: React.FC<{
//     title: string;
//     year: string;
//     type: string;
//     link: string;
//     odd?: boolean;
// }> = ({ title, year, type, link, children, odd = false }) => {
//     return (
//         <div
//             className={`bg-[#C1DEFF] flex ${
//                 odd ? "flex-col md:flex-row" : "flex-col md:flex-row-reverse"
//             } rounded-[40px] md:rounded-[60px] p-4 marker:d:h-[80vh] relative overflow-hidden`}
//         >
//             <div className="md:w-2/5 flex flex-col my-4 lg:my-auto md:text-center relative -left-4 px-4 md:ml-3">
//                 <h1 className="font-bold text-xl md:text-3xl">{title}</h1>
//                 <span className="text-lg md:text-xl my-4 md:my-8 lg:my-16">
//                     <h2>{year}</h2>
//                     <h2>{type}</h2>
//                 </span>
//                 <Link href={link} passHref>
//                     <a className="w-max border-2 border-primary md:mx-auto px-4 py-1 text-sm md:text-base rounded-xl hover:ring ring-primary ring-opacity-20 active:scale-95 transition-all">
//                         Visit Website
//                     </a>
//                 </Link>
//             </div>
//             <div className="md:w-3/5 mt-5 md:mt-0 flex items-center font-extrabold text-secondary text-opacity-30 overflow-visible md:mr-4">
//                 {children}
//             </div>
//         </div>
//     );
// };

const Service: React.FC<{ title: string }> = ({ title, children }) => {
    return (
        <Link href={`/services#${title}`} passHref>
            <m.a
                whileHover={{
                    y: -10,
                }}
                whileTap={{
                    y: -5,
                    scale: 0.95,
                }}
                className="relative group mb-24 cursor-pointer flex flex-col items-center w-[20rem] bg-backgroundSecondar rounded-[50px] h-60 "
            >
                {children}
                <h3 className="font-bold text-2xl mx-5 text-center -translate-y-8 ">
                    {title}
                </h3>
                <span className="opacity-0 group-hover:opacity-100 transition-all text-xs -translate-y-7 text-secondary ">
                    Learn more
                </span>
            </m.a>
        </Link>
    );
};

export default Home;
