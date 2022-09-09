/* eslint-disable @next/next/no-img-element */
import { m } from "framer-motion";
import Link from "next/link";

const Footer: React.FC = () => {
    return (
        <footer className="relative overscroll-none overflow-hidden">
            <aside className="overflow-hidden relative leading-[0] w-full mt-5  translate-y-2 ">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="rotate-180 h-[130px] lg:h-[230px] w-[100%] "
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
            <section className="bg-[#2D81E2] py-2 lg:px-32 flex flex-col text-white ">
                <div className="flex w-[50%] md:w-[30%] justify-between my-4 self-center ">
                    <Link href="https://www.instagram.com/elightlabs" passHref>
                        <m.a
                            whileHover={{
                                y: -4,
                            }}
                            className="relative"
                            whileTap={{ y: -2 }}
                        >
                            <img
                                width="40"
                                height="40"
                                src="/instagram.svg"
                                alt="https://www.instagram.com/elightlabs"
                            />
                        </m.a>
                    </Link>
                    <Link href="https://www.facebook.com/elightlabs" passHref>
                        <m.a
                            whileHover={{
                                y: -4,
                            }}
                            className="relative"
                            whileTap={{ y: -2 }}
                        >
                            <img
                                width="40"
                                height="40"
                                src="/facebook.svg"
                                alt="https://www.facebook.com/elightlabs"
                            />
                        </m.a>
                    </Link>
                    <Link href="https://www.linkedin.com/company/elightlabs" passHref>
                        <m.a
                            whileHover={{
                                y: -4,
                            }}
                            className="relative"
                            whileTap={{ y: -2 }}
                        >
                            <img
                                width="40"
                                height="40"
                                src="/linkedIn.svg"
                                alt="https://www.linkedin.com/company/elightlabs"
                            />
                        </m.a>
                    </Link>
                    <Link href="https://www.twitter.com/elightlabs" passHref>
                        <m.a
                            whileHover={{
                                y: -4,
                            }}
                            className="relative"
                            whileTap={{ y: -2 }}
                        >
                            <img
                                width="40"
                                height="40"
                                src="/twitter.svg"
                                alt="https://www.twitter.com/elightlabs"
                            />
                        </m.a>
                    </Link>
                </div>
                <div className="flex flex-col md:flex-row px-10 space-y-4 md:space-y-0 md:justify-around mt-4 ">
                    <div className="flex flex-col font-semibold">
                        <span>What we do ?</span>
                        <span className="flex flex-col font-medium text-sm space-y-1 mt-2 ">
                            <Link passHref href="/startups">
                                <m.a
                                    whileHover={{
                                        textDecoration: "underline",
                                    }}
                                >
                                    For Startups
                                </m.a>
                            </Link>
                            <Link passHref href="/services">
                                <m.a
                                    whileHover={{
                                        textDecoration: "underline",
                                    }}
                                >
                                    Our Services
                                </m.a>
                            </Link>
                        </span>
                    </div>
                    <div className="flex flex-col font-semibold">
                        <span>What we did ?</span>
                        <span className="flex flex-col font-medium text-sm space-y-1 mt-2 ">
                            <Link passHref href="/work">
                                <m.a
                                    whileHover={{
                                        textDecoration: "underline",
                                    }}
                                >
                                    Our Work
                                </m.a>
                            </Link>
                            <Link passHref href="/labs">
                                <m.a
                                    whileHover={{
                                        textDecoration: "underline",
                                    }}
                                >
                                    Our Labs
                                </m.a>
                            </Link>
                        </span>
                    </div>
                    <div className="flex flex-col font-semibold">
                        <span>How to talk to us ?</span>
                        <span className="flex flex-col font-medium text-sm space-y-1 mt-2 ">
                            <Link passHref href="/contact">
                                <m.a
                                    whileHover={{
                                        textDecoration: "underline",
                                    }}
                                >
                                    Contact us
                                </m.a>
                            </Link>
                            <Link passHref href="/career">
                                <m.a
                                    whileHover={{
                                        textDecoration: "underline",
                                    }}
                                >
                                    Career with us
                                </m.a>
                            </Link>
                        </span>
                    </div>
                </div>
                <div className="text-sm text-center my-6">
                    <span>© 2021 Elightlabs. All rights reserved.</span>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
