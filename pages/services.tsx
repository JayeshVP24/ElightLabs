/* eslint-disable @next/next/no-img-element */
import { domAnimation, LazyMotion } from "framer-motion";
import { NextPage } from "next";
import { NextSeo, NextSeoProps } from "next-seo";
import Navbar from "../components/Navbar";

const Services: NextPage = () => {
    const SEO: NextSeoProps = {
        title: "Services | Elight Labs",
        description: "Services offered by Elight Labs",
        openGraph: {
            title: "Services | Elight Labs",
            description: "Services offered by Elight Labs",
        },
    };

    return (
        <LazyMotion features={domAnimation}>
            <NextSeo {...SEO} />
            <div className="">
                <Navbar current="Services" />
                <aside className="absolute top-[20%] left-[-45%] md:left-[-15%] lg:top-[40%] lg:left-[-5%] ">
                    <svg
                        width="316"
                        height="295"
                        viewBox="0 0 316 295"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="lg:w-[150%] lg:h-[150%] "
                    >
                        <path
                            d="M249.866 63.0622C277.358 83.8027 308.796 108.454 314.28 138.831C319.698 169.209 299.164 205.243 271.605 235.76C244.047 266.277 209.533 291.208 172.476 293.861C135.42 296.445 95.8883 276.822 63.3134 246.305C30.7385 215.788 5.25386 174.516 1.3743 129.124C-2.50525 83.8027 15.2872 34.4305 47.8621 13.69C80.437 -7.05049 127.727 0.910516 163.179 13.271C198.697 25.6315 222.308 42.3915 249.866 63.0622Z"
                            fill="#2D81E2"
                            fillOpacity="0.2"
                        />
                    </svg>
                </aside>

                <aside className="absolute z-20 right-0 top-0 md:hidden ">
                    <svg
                        width="143"
                        height="178"
                        viewBox="0 0 143 178"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M308.007 -147.347C351.664 -104.179 373.307 -38.5459 360.582 14.3691C347.949 67.377 300.854 107.574 257.196 135.888C213.539 164.202 173.318 180.634 136.627 177.013C99.9355 173.393 66.867 149.813 43.6448 121.499C20.4226 93.1846 7.04657 60.136 2.03057 22.0743C-2.98544 -15.9874 0.265674 -59.1549 23.4879 -102.322C46.7101 -145.49 89.9035 -188.657 144.243 -199.983C198.676 -211.216 264.349 -190.514 308.007 -147.347Z"
                            fill="#2D81E2"
                            fillOpacity="0.2"
                        />
                    </svg>
                </aside>
                <aside className="absolute z-20 right-0 top-0 hidden md:block lg:hidden">
                    <svg
                        width="219"
                        height="228"
                        viewBox="0 0 219 228"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M195.163 21.2622C222.826 48.6133 236.54 90.1986 228.476 123.726C220.472 157.312 190.631 182.78 162.968 200.72C135.305 218.66 109.82 229.071 86.571 226.777C63.3223 224.483 42.3691 209.543 27.6547 191.603C12.9404 173.663 4.46493 152.724 1.28663 128.608C-1.89167 104.492 0.16834 77.1407 14.8827 49.7896C29.597 22.4386 56.9657 -4.91248 91.3973 -12.0885C125.888 -19.2056 167.5 -6.08886 195.163 21.2622Z"
                            fill="#2D81E2"
                            fillOpacity="0.2"
                        />
                    </svg>
                </aside>

                <aside className="absolute z-20 right-0 top-0 hidden lg:block ">
                    <svg
                        width="395"
                        height="402"
                        viewBox="0 0 395 402"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M354.884 27.5997C405.122 77.2772 430.027 152.808 415.383 213.703C400.846 274.705 346.654 320.964 296.416 353.548C246.178 386.132 199.895 405.042 157.674 400.875C115.453 396.709 77.4004 369.573 50.6782 336.989C23.9559 304.405 8.56393 266.372 2.79193 222.571C-2.98007 178.769 0.761038 129.091 27.4833 79.4139C54.2055 29.7364 103.909 -19.9411 166.439 -32.9748C229.076 -45.9016 304.646 -22.0778 354.884 27.5997Z"
                            fill="#2D81E2"
                            fillOpacity="0.2"
                        />
                    </svg>
                </aside>

                <main>
                    <section className="mx-7 md:mx-12 mt-3 flex flex-col md:flex-row-reverse items-center justify-around ">
                        <div className="md:w-2/5">
                            <h1 className="text-black font-semibold text-3xl  lg:text-[3rem] leading-[3rem] lg:leading-[5rem] ">
                                Services that help your business reach its{" "}
                                <span className="text-primary">Elight</span>
                            </h1>
                        </div>
                        <div className="mt-5 md:w-2/5 ">
                            <img
                                src="/services.svg"
                                alt="Services illustration"
                            />
                        </div>
                    </section>

                    <section className="mx-4 my-10 translate-y-16 flex flex-col items-center ">
                        <Service
                            techUsed={["HTML", "CSS", "Javascript"]}
                            title="Tech Solutions"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem praesentium laudantium facilis et blanditiis? Obcaecati debitis ad tenetur fugiat ea, est recusandae vitae architecto at totam, ex, cumque aliquid optio?"
                        >
                            <img
                                width="218"
                                height="169"
                                src="services/techSolutions.svg"
                                alt="illustration for Tech Solutions"
                                className="-translate-y-16 mb-2 relative lg:scale-150 md:-left-24  "
                            />
                        </Service>
                        <Service
                            techUsed={["HTML", "CSS", "React"]}
                            title="Designing"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem praesentium laudantium facilis et blanditiis? Obcaecati debitis ad tenetur fugiat ea, est recusandae vitae architecto at totam, ex, cumque aliquid optio?"
                        >
                            <img
                                width="202"
                                height="160"
                                src="services/designing.svg"
                                alt="illustration for Designing"
                                className="-translate-y-16 mb-2 relative lg:scale-150 md:right-[-25rem] lg:right-[-45rem]"
                            />
                        </Service>
                        <Service
                            techUsed={["Javascript", "CSS", "React"]}
                            title="Branding Solutions"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem praesentium laudantium facilis et blanditiis? Obcaecati debitis ad tenetur fugiat ea, est recusandae vitae architecto at totam, ex, cumque aliquid optio?"
                        >
                            <img
                                width="199"
                                height="166"
                                src="services/brandingSolutions.svg"
                                alt="illustration for Branding Solutions"
                                className="-translate-y-16 relative lg:scale-150 md:-left-24 "
                            />
                        </Service>
                        <Service
                            techUsed={["Javascript", "CSS", "React"]}
                            title="Digital Marketing and Advertising"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem praesentium laudantium facilis et blanditiis? Obcaecati debitis ad tenetur fugiat ea, est recusandae vitae architecto at totam, ex, cumque aliquid optio?"
                        >
                            <img
                                width="186"
                                height="156"
                                src="services/digitalMarketingAndAdvertising.svg"
                                alt="illustration for Digital Marketing and advertising"
                                className="-translate-y-16 mb-2 relative lg:scale-150 md:right-[-25rem] lg:right-[-45rem]  "
                            />
                        </Service>
                        <Service
                            techUsed={["Javascript", "CSS", "React"]}
                            title="Animations and Graphics"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem praesentium laudantium facilis et blanditiis? Obcaecati debitis ad tenetur fugiat ea, est recusandae vitae architecto at totam, ex, cumque aliquid optio?"
                        >
                            <img
                                width="186"
                                height="156"
                                src="services/animationsAndGraphics.svg"
                                alt="illustration for Animations and Graphics"
                                className="-translate-y-16 mb-2 relative lg:scale-150 md:-left-24 "
                            />
                        </Service>
                        <Service
                            techUsed={["Javascript", "CSS", "React"]}
                            title="Shots and Edits"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem praesentium laudantium facilis et blanditiis? Obcaecati debitis ad tenetur fugiat ea, est recusandae vitae architecto at totam, ex, cumque aliquid optio?"
                        >
                            <img
                                width="250"
                                height="156"
                                src="services/shotsAndEdits.svg"
                                alt="illustration for Shots and Edits"
                                className="-translate-y-16 mb-2 relative lg:scale-150 md:right-[-23rem] lg:right-[-43rem]  "
                            />
                        </Service>
                    </section>
                </main>
            </div>
        </LazyMotion>
    );
};

const Service: React.FC<{
    title: string;
    description: string;
    techUsed: string[];
}> = ({ title, description, techUsed, children }) => {
    return (
        <div className="relative md:max-w-xl lg:max-w-4xl bg-backgroundSecondar rounded-[40px] px-8 mb-20 ">
            {children}
            <div className="relative mt-6 -translate-y-16 md:translate-y-[-4.5rem] ">
                <h2 className="font-bold max-w-xs mx-auto text-xl lg:text-2xl md:text-center relative md:-translate-y-5   ">
                    {title}
                </h2>
                <h3 className="text-sm lg:text-base mt-1 mb-2 ">
                    {description}
                </h3>
                <span className="text-lg lg:text-xl font-semibold">
                    Technologies used
                </span>
                <div id={title} className="flex flex-wrap justify-start ">
                    {techUsed.map((t) => (
                        <span
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
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
