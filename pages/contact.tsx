/* eslint-disable @next/next/no-img-element */
import { domAnimation, LazyMotion, m } from "framer-motion";
import { NextPage } from "next";
import { NextSeo, NextSeoProps } from "next-seo";
import { FormEvent, useRef, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import emailjs from "emailjs-com";

const Contact: NextPage = () => {
    const SEO: NextSeoProps = {
        title: "Contact | Elight Labs",
        description: "Contact Elight Labs at enquire@elightlabs.com",
        openGraph: {
            title: "Contact | Elight Labs",
            description: "Contact Elight Labs at enquire@elightlabs.com",
        },
    };

    const form = useRef(null);

    const [disable, setDisable] = useState(false);
    const [submitText, setSubmitText] = useState("Submit");


    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setSubmitText("You're mails going...");
        setDisable(true);
        // @ts-ignore
        const name = form?.current?.elements.namedItem("name").value;
        // @ts-ignore
        const email = form?.current?.elements.namedItem("email").value;
        // @ts-ignore
        const subject = form?.current?.elements.namedItem("subject").value;
        // @ts-ignore
        const message = form?.current?.elements.namedItem("message").value;
        console.log(name, email, subject, message);

        const params = {
            name,
            email,
            subject,
            message,
        };

        emailjs
            .send(
                process.env.EMAILJS_ENQUIRE_SERVICE_ID!,
                process.env.EMAILJS_ENQUIRE!,
                params
            )
            .then(() => {
                setSubmitText("We received your mail, Thank You!");
                setTimeout(() => {
                    setDisable(false);
                    setSubmitText("Submit");
                }, 3000);
            })
            .catch(() => {
                setSubmitText("Somthings wrong, Please Try again later...");
                setTimeout(() => {
                    setDisable(false);
                    setSubmitText("Submit");
                }, 3000);
            });
    };

    return (
        <LazyMotion features={domAnimation}>
            <NextSeo {...SEO} />
            <div>
                <Navbar current="Contact" />

                <main className="mx-10">
                    <section className=" text-center mt-5  ">
                        <div>
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
                                className="font-bold text-4xl lg:text-5xl leading-[3.5rem]"
                            >
                                Let{`'`}s{" "}
                                <span className="text-primary">Elight</span> and
                                empower your dreams together{" "}
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
                                        delay: 0.3,
                                    },
                                }}
                                exit={{
                                    y: -50,
                                    opacity: 0,
                                }}
                                transition={{
                                    type: "tween",
                                }}
                                className="font-medium mt-4 text-secondary lg:text-lg "
                            >
                                Talk with us and we will help you
                            </m.h2>
                        </div>
                    </section>
                    <m.section
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
                        className="my-24 md:flex items-center w-full "
                    >
                        <div className="md:w-2/4 relative md:scale-125 md:right-16 ">
                            <img src="/team.svg" alt="Teams Illustration" />
                        </div>
                        <form
                            onSubmit={onSubmit}
                            ref={form}
                            id="form"
                            className="mt-10 md:mt-0 space-y-4 inline-block md:w-2/4 md:ml-8 lg:pr-14"
                        >
                            <label className="font-medium text-lg w-full inline-block ">
                                Name
                                <input
                                    required
                                    name="name"
                                    placeholder="What's your sweet name ?"
                                    className="bg-secondary bg-opacity-10 w-full outline-none border-primary rounded-xl h-10 px-3 text-sm
                                placeholder-shown:text-xs focus:ring transition-all ring-primary ring-opacity-80 placeholder-secondary placeholder-opacity-70 mt-1 "
                                />
                            </label>
                            <label className="font-medium text-lg w-full inline-block">
                                Email
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    placeholder="Where can we contact you ?"
                                    className="bg-secondary bg-opacity-10 w-full outline-none border-primary rounded-xl h-10 px-3 text-sm
                                placeholder-shown:text-xs focus:ring transition-all ring-primary ring-opacity-80 placeholder-secondary placeholder-opacity-70 mt-1 "
                                />
                            </label>
                            <label className="font-medium text-lg w-full inline-block">
                                Subject
                                <input
                                    required
                                    name="subject"
                                    placeholder="What is this about ?"
                                    className="bg-secondary bg-opacity-10 w-full outline-none border-primary rounded-xl h-10 px-3 text-sm
                                placeholder-shown:text-xs focus:ring transition-all ring-primary ring-opacity-80 placeholder-secondary placeholder-opacity-70 mt-1 "
                                />
                            </label>
                            <label className="font-medium text-lg w-full inline-block">
                                Message
                                <textarea
                                    required
                                    name="message"
                                    placeholder="Whats on your mind ?"
                                    className="bg-secondary bg-opacity-10 w-full outline-none border-primary rounded-xl h-20 px-3 text-sm
                                placeholder-shown:text-xs focus:ring transition-all ring-primary ring-opacity-80 placeholder-secondary placeholder-opacity-70 mt-1 py-3 "
                                />
                            </label>
                            <button
                                type="submit"
                                className="bg-primary mx-auto md:mx-0 font-medium text-white py-2 rounded-xl w-max px-12 h-max md:h-10 flex justify-center items-center hover:ring active:scale-95 transition-all ring-primary ring-opacity-40 disabled:cursor-not-allowed disabled:opacity-60 "
                                disabled={disable}
                            >
                                {submitText}
                            </button>
                        </form>
                    </m.section>
                </main>

                <Footer />
            </div>
        </LazyMotion>
    );
};

export default Contact;
