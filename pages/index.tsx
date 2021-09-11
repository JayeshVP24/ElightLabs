/* eslint-disable @next/next/no-img-element */
import { domAnimation, LazyMotion, m } from "framer-motion";
import { NextPage } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
    return (
        <LazyMotion features={domAnimation}>
            <m.div
                initial={{
                    opacity: 0,
                    y: -50,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                exit={{
                    opacity: 0,
                    y: 50,
                }}
            >
                <Navbar current="Home" />

                <main className="w-full mt-8 relative">
                    <section
                        id="hero"
                        className="lg:w-8/12 mx-auto flex h-[60vh] md:h-[50vh] items-center flex-col lg:flex-row "
                    >
                        <div className="w-3/4 lg:w-2/4 mr-0">
                            <h1 className="font-bold text-primary text-md lg:text-xl mb-2 lg:mb-4">
                                Welcome to EightLabs
                            </h1>
                            <h2 className="text-black font-medium text-xl lg:text-3xl mb-4 ">
                                We are a creative group of people who
                                design influential brands and digital
                                experiences
                            </h2>
                            <div className="flex text-xs lg:text-sm space-x-7  ">
                                <button className="bg-primary font-medium text-white py-2 rounded-xl w-36 hover:ring active:scale-95 transition-all ring-primary ring-opacity-40">
                                    Check Services
                                </button>
                                <button className="text-secondary font-medium border-2 border-primary py-2 w-36 rounded-xl hover:ring active:scale-95 transition-all ring-primary ring-opacity-20 ">
                                    Start a Project
                                </button>
                            </div>
                        </div>
                        <div className="w-4/5 md:w-3/6 lg:w-2/4 mt-8 lg:mt-0 lg:pl-6">
                            <img
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
                            <h1 className="absolute text-[3.25rem] lg:text-8xl font-extrabold text-primary text-opacity-20 ">
                                Our Services
                            </h1>
                            <h2 className="text-5xl lg:text-6xl ml-10 font-semibold text-secondary flex flex-col ">
                                <span>What</span>
                                <span>we Offer</span>
                            </h2>
                        </div>

                        <div className="my-10 mx-5 translate-y-16 grid md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 grid-flow-row justify-items-center ">
                            <Service title="Tech Solutions">
                                <img
                                    width="218"
                                    height="169"
                                    src="services/techSolutions.svg"
                                    alt="illustration for Tech Solutions"
                                    className="-translate-y-16 mb-2 "
                                />
                            </Service>

                            <Service title="Designing">
                                <img
                                    width="202"
                                    height="160"
                                    src="services/designing.svg"
                                    alt="illustration for Designing"
                                    className="-translate-y-16 mb-2 "
                                />
                            </Service>

                            <Service title="Branding Solutions">
                                <img
                                    width="199"
                                    height="166"
                                    src="services/brandingSolutions.svg"
                                    alt="illustration for Branding Solutions"
                                    className="-translate-y-16"
                                />
                            </Service>
                            
                            <Service title="Digital Marketing and advertising">
                                <img
                                    width="186"
                                    height="156"
                                    src="services/digitalMarketingAndAdvertising.svg"
                                    alt="illustration for Digital Marketing and advertising"
                                    className="-translate-y-16 mb-2 "
                                />
                            </Service>


                            <Service title="Animations and Graphics">
                                <img
                                    width="186"
                                    height="156"
                                    src="services/animationsAndGraphics.svg"
                                    alt="illustration for Animations and Graphics"
                                    className="-translate-y-16 mb-2 "
                                />
                            </Service>
                            <Service title="Shots and Edits">
                                <img
                                    width="250"
                                    height="156"
                                    src="services/shotsAndEdits.svg"
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
                </main>
            </m.div>
        </LazyMotion>
    );
};

const Service: React.FC<{ title: string }> = ({ title, children }) => {
    return (
        <Link href={`/services#${title}`} passHref>
            <a className="group mb-24 cursor-pointer active:scale-95 transition-all flex flex-col items-center w-[20rem] bg-backgroundSecondar rounded-[50px] h-60 ">
                {children}
                <h3 className="font-bold text-2xl mx-5 text-center -translate-y-8 ">
                    {title}
                </h3>
                <span className="opacity-0 group-hover:opacity-100 transition-all text-xs -translate-y-7 text-secondary ">
                    Learn more
                </span>
            </a>
        </Link>
    );
};

export default Home;
