/* eslint-disable @next/next/no-img-element */
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { AnimatePresence, m, Variants } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import useLockedBody from "../utils/useLockedBody";
import useOnClickOutside from "../utils/useOnClickOutside";

const navs = [
    {
        title: "For Startups",
        current: false,
        href: "/startups",
    },
    {
        title: "Services",
        current: false,
        href: "/services",
    },
    {
        title: "Our Work",
        current: false,
        href: "/work",
    },
    {
        title: "Our Team",
        current: false,
        href: "/team",
    },
    {
        title: "Labs",
        current: false,
        href: "/labs",
    },
    {
        title: "Careers",
        current: false,
        href: "/careers",
    },
    {
        title: "Contact us",
        current: false,
        href: "/contact",
    },
];

const Navbar: React.FC<{ current: string }> = ({ current }) => {
    const [show, setShow] = useState(false);

    useEffect(() => setShow(true), []);

    if (!show) return null;

    return <Child current={current} />;
};

const Child: React.FC<{ current: string }> = ({ current }) => {
    const [navModalOpen, setNavModalOpen] = useState(false);

    navs.forEach((n) => {
        if (n.title === current) {
            n.current = true;
        } else n.current = false;
    });

    const ref = useRef(null);
    const buttonRef = useRef(null);

    useLockedBody(navModalOpen);

    useOnClickOutside(
        ref,
        () => {
            setNavModalOpen(false);
        },
        buttonRef
    );

    const strongV: Variants = {
        initial: {
            height: 0,
        },
        animate: {
            height: "60vh",
            transition: {
                staggerChildren: 0.07,
                delayChildren: 0.2,
            },
        },
        exit: {
            height: 0,
            transition: {
                staggerChildren: 0.07,
                staggerDirection: -1,
                when: "afterChildren",
            },
        },
    };

    const childV: Variants = {
        initial: {
            x: -200,
            opacity: 0,
        },
        animate: {
            x: "0%",
            opacity: 1,
        },
        exit: {
            x: -200,
            opacity: 0,
        },
    };

    const [bgTrans, setBgTrans] = useState(true);

    const [hideOnScroll, setHideOnScroll] = useState(true);

    useScrollPosition(
        ({ prevPos, currPos }) => {
            // console.table({ prevPos, currPos });
            const isShow = currPos.y > prevPos.y;
            if (isShow !== hideOnScroll) setHideOnScroll(isShow);
            if (currPos.y < -30) setBgTrans(false);
            else setBgTrans(true);
        },
        [hideOnScroll],
        undefined,
        false,
        300
    );

    return (
        <>
            {
                <m.header
                    initial={{
                        y: -100,
                        // height: 0
                    }}
                    animate={
                        hideOnScroll
                            ? {
                                  y: 0,
                              }
                            : {
                                  y: -150,
                              }
                    }
                    exit={{
                        y: -150,
                    }}
                    transition={{
                        ease: "easeOut",
                        duration: 0.3,
                    }}
                    className={`sticky transition-all duration-300 z-40 ${
                        bgTrans && !navModalOpen
                            ? "bg-transparent border-opacity-0"
                            : "bg-background border-opacity-100 "
                    } top-0   border-secondary rounded-b-3xl pb-5 mx-auto flex flex-col border-b-4`}
                >
                    <nav className="flex self-center justify-between mt-5 items-center w-4/5 ">
                        <Link href="/" passHref>
                            <a className="z-40">
                                <img
                                    src="/eightlabs.png"
                                    width="70"
                                    height="70"
                                    alt="Elight Labs Logo"
                                    className="w-[70px]"
                                />
                            </a>
                        </Link>
                        <div className="z-40 hidden lg:flex items-center justify-between w-5/6 xl:w-4/6 text-sm text-secondary font-medium ">
                            {navs.map((n) => (
                                <Link key={n.title} href={n.href} passHref>
                                    <m.a
                                        whileHover={{
                                            y: -4,
                                        }}
                                        whileTap={{
                                            y: -2,
                                        }}
                                        className={`active:scale-95 transition-all relative ${
                                            n.current ? "text-primary" : ""
                                        } ${
                                            n.title === "Contact us"
                                                ? "border-2 border-primary px-5 py-1 rounded-xl hover:ring ring-primary ring-opacity-20"
                                                : ""
                                        } `}
                                    >
                                        {n.title}
                                    </m.a>
                                </Link>
                            ))}
                        </div>
                        <span
                            ref={buttonRef}
                            className="z-30 text-secondary lg:hidden cursor-pointer "
                            onClick={() => setNavModalOpen((n) => !n)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <AnimatePresence>
                                    {!navModalOpen && (
                                        <m.path
                                            initial={{
                                                scale: 0,
                                            }}
                                            animate={{
                                                scale: 1,
                                            }}
                                            exit={{
                                                scale: 0,
                                            }}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h8m-8 6h16"
                                        />
                                    )}
                                </AnimatePresence>
                                <AnimatePresence>
                                    {navModalOpen && (
                                        <m.path
                                            initial={{
                                                scale: 0,
                                            }}
                                            animate={{
                                                scale: 1,
                                            }}
                                            exit={{
                                                scale: 0,
                                            }}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    )}
                                </AnimatePresence>
                            </svg>
                        </span>
                    </nav>

                    <AnimatePresence>
                        {navModalOpen && (
                            <m.div
                                variants={strongV}
                                ref={ref}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="lg:hidden flex mx-[10%] flex-col overflow-x-hidden overscroll-x-none font-medium text-2xl my-16 justify-between "
                            >
                                <m.aside
                                    initial={{
                                        scale: 0,
                                    }}
                                    animate={{
                                        scale: 1,
                                    }}
                                    exit={{
                                        scale: 0,
                                        transition: {
                                            duration: 0.3,
                                        },
                                    }}
                                    style={{ originX: 1, originY: 0 }}
                                    className="absolute z-0 top-[-35%] left-[40%] md:left-[65%] md:top-[-20%] "
                                >
                                    <svg
                                        width="397"
                                        height="435"
                                        viewBox="0 0 397 435"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M287.872 96.9992C330.224 136.055 382.461 168.398 394.3 212.58C406.138 256.884 377.701 312.905 335.35 358.674C292.998 404.442 236.978 439.959 186.693 433.978C136.531 428.12 92.2268 380.887 59.2734 335.118C26.32 289.35 4.71716 245.045 0.689521 196.714C-3.33812 148.382 10.2094 96.0228 43.1628 56.9669C76.1162 17.9111 128.476 -7.84142 170.827 2.16666C213.178 12.1747 245.521 57.9433 287.872 96.9992Z"
                                            fill="#2D81E2"
                                        />
                                    </svg>
                                </m.aside>
                                {navs.map((n) => (
                                    <m.div variants={childV} key={n.title}>
                                        <Link href={n.href} passHref>
                                            <a
                                                className={`relative ${
                                                    n.current
                                                        ? "text-primary"
                                                        : "text-secondary"
                                                }`}
                                            >
                                                {n.title}
                                            </a>
                                        </Link>
                                    </m.div>
                                ))}
                            </m.div>
                        )}
                    </AnimatePresence>
                </m.header>
            }
        </>
    );
};

export default Navbar;
