/* eslint-disable @next/next/no-img-element */
import { domAnimation, LazyMotion, m } from "framer-motion";
import { NextPage } from "next";
import { NextSeo, NextSeoProps } from "next-seo";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Footer from "../components/Footer";

const Startups: NextPage = () => {
    const SEO: NextSeoProps = {
        title: "Startup Services | Elight Labs",
        description: `We, at Elight Labs, provide innovative ideas, keep running with client's expectations and incorporate new technology and architecture to offer software product development benefits to our clients. Our biggest advantage is to adapt to changing business needs & provide optimum quality. Some important product development challenges faced by organizations are 
Time and cost of producing new services or products amidst continuous regulatory and funding changes.

Continuous change in the client's expectations and demands. 

Incorporating the most recent stage, architecture or technology demands enormous expertise and competence.
 
Crucial to offer complete product development solutions directly from product designing to migrating and modernizing it by proper models.`,
        openGraph: {
            title: "Startup Services | Elight Labs",
            description: `We, at Elight Labs, provide innovative ideas, keep running with client's expectations and incorporate new technology and architecture to offer software product development benefits to our clients. Our biggest advantage is to adapt to changing business needs & provide optimum quality. Some important product development challenges faced by organizations are 
Time and cost of producing new services or products amidst continuous regulatory and funding changes.

Continuous change in the client's expectations and demands. 

Incorporating the most recent stage, architecture or technology demands enormous expertise and competence.
 
Crucial to offer complete product development solutions directly from product designing to migrating and modernizing it by proper models.`,
        },
    };

    const techUsed = [
        "Wordpress",
        "NodeJS",
        "Figma",
        "Firebase",
        "React",
        "MongoDB",
        "PHP",
        "Python",
        "Flutter",
    ];

    return (
        <LazyMotion features={domAnimation}>
            <NextSeo {...SEO} />
            <div>
                <Navbar current="For Startups" />

                <main>
                    <section className="mx-7 md:mx-8 mt-3 flex flex-col md:flex-row-reverse items-center justify-around ">
                        <div className="md:w-2/5 text-center md:text-left ">
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
                                className="text-black relative font-bold text-3xl  lg:text-[3rem] leading-[3rem] lg:leading-[5rem] "
                            >
                                <span>
                                    End to End{" "}
                                    <span className="text-primary">
                                        Startup
                                    </span>{" "}
                                    Solutions
                                </span>
                            </m.h1>
                            <m.span
                                initial={{
                                    y: -50,
                                    opacity: 0,
                                }}
                                animate={{
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        delay: 0.5,
                                    },
                                }}
                                exit={{
                                    y: -50,
                                    opacity: 0,
                                }}
                                transition={{
                                    type: "tween",
                                }}
                                className="relative space-y-2 mt-4 block md:flex md:flex-wrap md:space-y-0"
                            >
                                <h2 className="flex font-medium text-lg items-center justify-center md:m-2 ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 mr-2 "
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                        />
                                    </svg>
                                    Design Thinking
                                </h2>
                                <h2 className="flex font-medium text-lg items-center justify-center md:m-2  ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 mr-2 "
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                        />
                                    </svg>
                                    Rapid Prototyping
                                </h2>
                                <h2 className="flex font-medium text-lg items-center justify-center md:m-2  ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 mr-2 "
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                        />
                                    </svg>
                                    Agile Approach
                                </h2>
                            </m.span>
                        </div>
                        <div className="mt-12 md:w-3/6 ">
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
                                className="relative"
                                src="/startups.svg"
                                alt="Services illustration"
                            />
                        </div>
                    </section>

                    {/* <section
                        className="grid grid-cols-2 grid-rows-2 justify-items-center gap-y-4 mx-4 mt-16
                    md:grid-cols-4 md:grid-rows-1"
                    >
                        <div className="flex flex-col w-36 h-36 lg:w-48 lg:h-44 bg-primary rounded-[40px] text-center px-4 py-6 justify-between items-center text-white">
                            <span className="text-5xl lg:text-6xl font-bold">
                                3+
                            </span>
                            <span className="font-semibold text-sm lg:text-lg ">
                                Years of Experiance
                            </span>
                        </div>
                        <div className="flex flex-col w-36 h-36 lg:w-48 lg:h-44 bg-primary rounded-[40px] text-center px-4 py-6 justify-between items-center text-white">
                            <span className="text-5xl lg:text-6xl font-bold">
                                50+
                            </span>
                            <span className="font-semibold text-sm lg:text-lg ">
                                Products Delivered
                            </span>
                        </div>
                        <div className="flex flex-col w-36 h-36 lg:w-48 lg:h-44 bg-primary rounded-[40px] text-center px-4 py-6 justify-between items-center text-white">
                            <span className="text-5xl lg:text-6xl font-bold">
                                10+
                            </span>
                            <span className="font-semibold text-sm lg:text-lg ">
                                Skilled Developers
                            </span>
                        </div>
                        <div className="flex flex-col w-36 h-36 lg:w-48 lg:h-44 bg-primary rounded-[40px] text-center px-4 py-6 justify-between items-center text-white">
                            <span className="text-5xl lg:text-6xl font-bold">
                                100+
                            </span>
                            <span className="font-semibold text-sm lg:text-lg ">
                                Satisfied Customers
                            </span>
                        </div>
                    </section>
 */}
                    <section className="my-16 px-2 w-full  ">
                        <h2 className="text-3xl font-bold mx-12 text-center">
                            Why Choose{" "}
                            <span className="text-primary">Elight Labs</span> ?{" "}
                        </h2>

                        <div className="w-full mt-8 md:flex md:flex-row-reverse md:items-center md:px-6 ">
                            <span className="w-[95%] md:w-2/5 block mx-auto md:pl-4">
                                <img
                                    src="/whyElightLabs.svg"
                                    alt="Why choose Elight Labs Illustration"
                                />
                            </span>
                            <p className="bg-[#C1DEFF] md:w-3/5 lg:w-2/4 mt-6 block rounded-[40px] py-8 px-6 leading-7 md:leading-8">
                                In this digital era, there is hardly any company
                                that is not aimed at improving its new product
                                development process and minimizing time to
                                market. Product development services requires
                                meeting requirements that are constantly
                                changing. Once a company makes and presents a
                                development timeline to customers and investors,
                                it is difficult to cope up with the timeline. We
                                at Elight Labs help you with this exact problem
                                with our End to End Product Development
                                Services. With an amazing team of highly skilled
                                developers and designers, Elight Labs takes on
                                software product development projects for
                                clients looking to reach their Elight.
                            </p>
                        </div>
                    </section>

                    <section className="px-10 my-10 ">
                        <div className="text-center mb-8 lg:mx-20">
                            <h2 className="font-semibold text-2xl">
                                We are using Agile development methodology for
                                flexibility, productivity, transparency, and
                                superior quality.
                            </h2>
                        </div>
                        <div
                            className="bg-[#C1DEFF] rounded-[50px] px-10 py-6 lg:mx-20 flex flex-col
                        md:grid grid-cols-5 grid-rows-3 md:justify-items-center md:items-center"
                        >
                            <h3 className="text-2xl md:text-3xl my-2 font-semibold text-center md:col-span-3 md:col-start-2 md:row-start-2  ">
                                Agile Approach
                            </h3>
                            <span className="text-center font-medium text-xl my-4 space-y-3 ">
                                <img
                                    width="120"
                                    height="120"
                                    className="mx-auto"
                                    src="/agile/idea.png"
                                    alt="Idea icon"
                                />
                                <h4>Idea</h4>
                            </span>
                            <span className="mx-auto">
                                <svg
                                    width="67"
                                    height="98"
                                    viewBox="0 0 67 98"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="md:-rotate-90"
                                >
                                    <path
                                        d="M65.9301 0.61832L66.1441 21.3532L33.7997 54.8089L0.771608 22.028L0.557577 1.29311L33.5872 34.2179L65.9301 0.61832ZM66.3683 43.0736L66.5824 63.8085L34.238 97.2641L1.20984 64.4832L0.995812 43.7484L34.0254 76.6732L66.3683 43.0736Z"
                                        fill="#404040"
                                        fillOpacity="0.2"
                                    />
                                </svg>
                            </span>
                            <span className="text-center font-medium text-xl my-4 space-y-3 ">
                                <img
                                    width="120"
                                    height="120"
                                    className="mx-auto"
                                    src="/agile/design.png"
                                    alt="Design icon"
                                />
                                <h4>Design</h4>
                            </span>
                            <span className="mx-auto">
                                <svg
                                    width="67"
                                    height="98"
                                    viewBox="0 0 67 98"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="md:-rotate-90"
                                >
                                    <path
                                        d="M65.9301 0.61832L66.1441 21.3532L33.7997 54.8089L0.771608 22.028L0.557577 1.29311L33.5872 34.2179L65.9301 0.61832ZM66.3683 43.0736L66.5824 63.8085L34.238 97.2641L1.20984 64.4832L0.995812 43.7484L34.0254 76.6732L66.3683 43.0736Z"
                                        fill="#404040"
                                        fillOpacity="0.2"
                                    />
                                </svg>
                            </span>
                            <span className="text-center font-medium text-xl my-4 space-y-3 ">
                                <img
                                    width="120"
                                    height="120"
                                    className="mx-auto"
                                    src="/agile/develop.png"
                                    alt="Develop icon"
                                />
                                <h4>Develop</h4>
                            </span>
                            <span className="mx-auto md:col-start-5">
                                <svg
                                    width="67"
                                    height="98"
                                    viewBox="0 0 67 98"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className=""
                                >
                                    <path
                                        d="M65.9301 0.61832L66.1441 21.3532L33.7997 54.8089L0.771608 22.028L0.557577 1.29311L33.5872 34.2179L65.9301 0.61832ZM66.3683 43.0736L66.5824 63.8085L34.238 97.2641L1.20984 64.4832L0.995812 43.7484L34.0254 76.6732L66.3683 43.0736Z"
                                        fill="#404040"
                                        fillOpacity="0.2"
                                    />
                                </svg>
                            </span>
                            <span className="text-center font-medium text-xl my-4 space-y-3 md:col-start-5  ">
                                <img
                                    width="120"
                                    height="120"
                                    className="mx-auto"
                                    src="/agile/test.png"
                                    alt="Test icon"
                                />
                                <h4>Test</h4>
                            </span>
                            <span className="mx-auto md:rotate-90 md:col-start-4 md:row-start-3 ">
                                <svg
                                    width="67"
                                    height="98"
                                    viewBox="0 0 67 98"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M65.9301 0.61832L66.1441 21.3532L33.7997 54.8089L0.771608 22.028L0.557577 1.29311L33.5872 34.2179L65.9301 0.61832ZM66.3683 43.0736L66.5824 63.8085L34.238 97.2641L1.20984 64.4832L0.995812 43.7484L34.0254 76.6732L66.3683 43.0736Z"
                                        fill="#404040"
                                        fillOpacity="0.2"
                                    />
                                </svg>
                            </span>
                            <span className="text-center font-medium text-xl my-4 space-y-3 md:col-start-3 md:row-start-3 ">
                                <img
                                    width="120"
                                    height="120"
                                    className="mx-auto"
                                    src="/agile/deploy.png"
                                    alt="Deploy icon"
                                />
                                <h4>Deploy</h4>
                            </span>
                            <span className="mx-auto md:rotate-90 md:col-start-2 md:row-start-3 ">
                                <svg
                                    width="67"
                                    height="98"
                                    viewBox="0 0 67 98"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M65.9301 0.61832L66.1441 21.3532L33.7997 54.8089L0.771608 22.028L0.557577 1.29311L33.5872 34.2179L65.9301 0.61832ZM66.3683 43.0736L66.5824 63.8085L34.238 97.2641L1.20984 64.4832L0.995812 43.7484L34.0254 76.6732L66.3683 43.0736Z"
                                        fill="#404040"
                                        fillOpacity="0.2"
                                    />
                                </svg>
                            </span>
                            <span className="text-center font-medium text-xl my-4 space-y-3 md:col-start-1 md:row-start-3">
                                <img
                                    width="120"
                                    height="120"
                                    className="mx-auto"
                                    src="/agile/review.png"
                                    alt="Review icon"
                                />
                                <h4>Review</h4>
                            </span>
                            <span className="mx-auto hidden md:block md:rotate-180 md:col-start-1 md:row-start-2 ">
                                <svg
                                    width="67"
                                    height="98"
                                    viewBox="0 0 67 98"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M65.9301 0.61832L66.1441 21.3532L33.7997 54.8089L0.771608 22.028L0.557577 1.29311L33.5872 34.2179L65.9301 0.61832ZM66.3683 43.0736L66.5824 63.8085L34.238 97.2641L1.20984 64.4832L0.995812 43.7484L34.0254 76.6732L66.3683 43.0736Z"
                                        fill="#404040"
                                        fillOpacity="0.2"
                                    />
                                </svg>
                            </span>
                        </div>
                    </section>

                    <section className="my-14 px-2 w-full ">
                        <h2 className="text-2xl font-semibold mx-6 text-center">
                            We provide End to End Startup Solutions
                        </h2>

                        <div className="w-full mt-8 md:flex md:flex-row md:items-center md:px-12">
                            <span className="w-[95%] md:w-2/5 block px-4 mx-auto md:pr-4 ">
                                <img
                                    src="/EndToEnd.svg"
                                    alt="End to End Product Development Services Illustration"
                                />
                            </span>
                            <p className="bg-[#C1DEFF] mt-6 block rounded-[40px] md:w-3/5 lg:w-2/4  py-8 px-6 leading-7 md:leading-8 ">
                                In this digital era, there is hardly any company
                                that is not aimed at improving its new product
                                development process and minimizing time to
                                market. Product development services requires
                                meeting requirements that are constantly
                                changing. Once a company makes and presents a
                                development timeline to customers and investors,
                                it is difficult to cope up with the timeline. We
                                at Elight Labs help you with this exact problem
                                with our End to End Product Development
                                Services. With an amazing team of highly skilled
                                developers and designers, Elight Labs takes on
                                software product development projects for
                                clients looking to reach their Elight.
                            </p>
                        </div>

                        <span className="block w-full mt-8 md:hidden" >
                            <img className="w-[100%] mx-auto" src="/EndToEndMobileSolution.svg" alt="End To End Solutions" />
                        </span>
                        <span className="hidden w-full mt-8 md:block" >
                            <img className="w-[99%] mx-auto" src="/EndToEndSolution.svg" alt="End To End Solutions" />
                        </span>
                    </section>

                    <section className="my-16 px-2 w-full  ">
                        <h2 className="text-3xl font-bold mx-12 text-center">
                            The Need for Innovative Product Development Services
                        </h2>

                        <div className="w-full mt-8 md:flex md:flex-row-reverse md:items-center md:px-6 ">
                            <span className="w-[95%] md:w-2/5 block mx-auto md:pl-4">
                                <img
                                    src="/innovative.svg"
                                    alt="The need for innovative Illustration"
                                />
                            </span>
                            <p className="bg-[#C1DEFF] md:w-3/5 lg:w-2/4 mt-6 block rounded-[40px] py-8 px-6 leading-7 md:leading-8">
                                We, at Elight Labs, provide innovative ideas,
                                keep running with {`client's`} expectations, and
                                incorporate new technology and architecture to
                                offer software product development benefits to
                                our clients. Our biggest advantage is to adapt
                                to changing business needs {`&`} provide optimum
                                quality. Some important product development
                                challenges faced by organizations are Time and
                                cost of producing new services or products
                                amidst continuous regulatory and funding
                                changes, Continuous change in the {`client's`}
                                expectations and demands Incorporating the most
                                recent stage, architecture or technology demands
                                enormous expertise and competence, Crucial to
                                offer complete product development solutions
                                directly from product designing to migrating and
                                modernizing it by proper models.
                            </p>
                        </div>
                    </section>

                    <section className="my-14 px-2 w-full  ">
                        <div className="w-full mt-8 md:flex md:flex-row md:items-center md:px-12">
                            <span className="w-[95%] md:w-2/5 block px-4 mx-auto md:pr-4 ">
                                <img
                                    src="/startupServices.svg"
                                    alt="Startup Services Illustration"
                                />
                            </span>
                            <span className=" mt-12 block  md:w-3/5 lg:w-2/4   ">
                                <div className="bg-[#C1DEFF] w-max rounded-[40px] py-8 px-6 pr-24">
                                    <h3 className="text-xl font-semibold mb-2">
                                        Services we offer
                                    </h3>
                                    <span className="block pl-4 leading-7 md:leading-8 ">
                                        <li>Product Development</li>
                                        <li>Designing and protoyping</li>
                                        <li>Advertising and marketing</li>
                                        <li>Branding</li>
                                        <li>Other essential services </li>
                                    </span>
                                </div>
                            </span>
                        </div>
                    </section>

                    <section className="my-14 px-2 w-full  ">
                        <div className="w-full mt-8 md:flex md:flex-row-reverse md:items-center md:px-12">
                            <span className="w-[95%] md:w-2/5 block px-4 mx-auto md:pr-4 ">
                                <img
                                    src="/startupBuilding.svg"
                                    alt="Startup building Illustration"
                                />
                            </span>
                            <span className=" mt-12 block  md:w-3/5 lg:w-2/4   ">
                                <div className="bg-[#C1DEFF] w-full text-center rounded-[40px] py-8 px-20 ">
                                    <h3 className="text-xl font-semibold mb-2">
                                        Our Elight Service
                                    </h3>
                                    <p className="text-lg  mb-2 leading-7 md:leading-8">
                                        We also help to get your startup
                                        connected with incubations and
                                        industrial mentors, launching ur mvp and
                                        connecting you with investors{" "}
                                    </p>
                                </div>
                            </span>
                        </div>
                    </section>

                    <section className="px-5 md:px-20 my-10">
                        <h3 className="font-semibold text-2xl text-center">
                            Technologies we excel in
                        </h3>
                        <div className="bg-[#C1DEFF] rounded-[40px] p-5 md:p-8 mt-5 ">
                            <div className="flex flex-wrap justify-between md:justify-around md:px-auto ">
                                {techUsed.map((t) => (
                                    <m.span
                                        whileHover={{
                                            scale: 1.1,
                                        }}
                                        key={t}
                                        className="font-medium text-xs min-w-[5rem] mx-1 lg:mx-4 my-2 px-2 rounded-[25px] py-3 bg-backgroundTert flex flex-col items-center justify-around "
                                    >
                                        <img
                                            width="40"
                                            height="40"
                                            src={`/techIcons/${t}.png`}
                                            alt={`${t} Icon`}
                                            className="text-[9px]"
                                        />
                                        <h4>{t}</h4>
                                    </m.span>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="px-5 md:px-20 my-16">
                        <h3 className="font-semibold text-2xl text-center">
                            Lets connect and start off your business
                        </h3>
                        <Link href="contact">
                            <a className="bg-[#C1DEFF] mx-auto rounded-xl w-max font-semibold px-8 py-2 block mt-5 hover:ring transition-all active:scale-90 ring-primary ring-opacity-30">
                                Contact us
                            </a>
                        </Link>
                    </section>
                </main>

                <Footer />
            </div>
        </LazyMotion>
    );
};

export default Startups;
