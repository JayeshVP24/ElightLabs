/* eslint-disable @next/next/no-img-element */
import { domAnimation, LazyMotion, m } from "framer-motion";
import { NextPage } from "next";
import { NextSeo, NextSeoProps } from "next-seo";
import { FormEvent, useRef, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import emailjs from "emailjs-com";

const Careers: NextPage = () => {
    const SEO: NextSeoProps = {
        title: "Careers | Elight Labs",
        description: "Careers offered by Elight Labs",
        openGraph: {
            title: "Careers | Elight Labs",
            description: "Careers offered by Elight Labs",
        },
    };

    const form = useRef(null);

    const availableJobs = [
        "Full Stack Intern",
        "Wordpress Intern",
        "Backend Intern",
    ];

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
        const phone = form?.current?.elements.namedItem("phone").value;
        // @ts-ignore
        const jobs = form?.current?.elements.namedItem("jobs").value;
        // const jobs: string[] = [];
        // availableJobs.forEach((a) => {
        //     // @ts-ignore
        //     jobs.push(form?.current?.elements.namedItem(a).value);
        // });
        // @ts-ignore
        const message = form?.current?.elements.namedItem("message").value;

        const params = {
            name,
            email,
            phone,
            jobs,
            message,
        };

        emailjs
            .send(
                process.env.EMAILJS_CAREER_SERVICE_ID!,
                process.env.EMAILJS_CAREER!,
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
                <Navbar current="Careers" />
                <main className="">
                    <section className="w-4/4 mx-auto flex flex-col items-center text-center mt-5 z-20 ">
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
                            className="font-bold text-black text-3xl leading-[3rem] lg:max-w-lg  lg:mx-4 lg:text-[3rem] lg:leading-[4.5rem] "
                        >
                            Lets build and reach{" "}
                            <span className="text-primary">Elight</span>{" "}
                            together
                        </m.h1>
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
                        className="my-14 px-10 block md:flex md:flex-row-reverse items-center w-full "
                    >
                        <div className="md:w-2/4 relative md:scale-110 lg:scale-105 ">
                            <img src="/careers.svg" alt="Teams Illustration" />
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
                                    name="name"
                                    required
                                    placeholder="What's your sweet name ?"
                                    className="bg-secondary bg-opacity-10 w-full outline-none border-primary rounded-xl h-10 px-3 text-sm
                                placeholder-shown:text-xs focus:ring transition-all ring-primary ring-opacity-80 placeholder-secondary placeholder-opacity-70 mt-1 "
                                />
                            </label>
                            <label className="font-medium text-lg w-full inline-block">
                                Email
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="Where can we contact you ?"
                                    className="bg-secondary bg-opacity-10 w-full outline-none border-primary rounded-xl h-10 px-3 text-sm
                                placeholder-shown:text-xs focus:ring transition-all ring-primary ring-opacity-80 placeholder-secondary placeholder-opacity-70 mt-1 "
                                />
                            </label>
                            <label className="font-medium text-lg w-full inline-block">
                                Phone
                                <input
                                    name="phone"
                                    required
                                    placeholder="Where do we call you ?"
                                    className="bg-secondary bg-opacity-10 w-full outline-none border-primary rounded-xl h-10 px-3 text-sm
                                placeholder-shown:text-xs focus:ring transition-all ring-primary ring-opacity-80 placeholder-secondary placeholder-opacity-70 mt-1 "
                                />
                            </label>
                            {/* <span className="font-medium text-lg w-full inline-block">
                                Available Opportunities
                                <div className="flex flex-wrap ">
                                    {availableJobs.map((a) => (
                                        <Checkbox key={a} value={a} />
                                    ))}
                                </div>
                            </span> */}

                            <label className="font-medium text-lg w-full inline-block">
                                Available Opportunities
                                <span className="mt-2 flex w-max bg-secondary bg-opacity-10 px-4 py-1 rounded-lg ">
                                    <select
                                        name="jobs"
                                        className="flex bg-transparent text-sm  "
                                    >
                                        {availableJobs.map((a) => (
                                            <option value={a} key={a}>
                                                {a}
                                            </option>
                                        ))}
                                    </select>
                                </span>
                            </label>

                            <label className="font-medium text-lg w-full inline-block">
                                Message
                                <textarea
                                    name="message"
                                    required
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

export default Careers;

// const Checkbox: React.FC<{ value: string }> = ({ value }) => {
//     return (
//         <span className="flex items-center relative m-2">
//             <input
//                 name={value}
//                 id={value}
//                 type="checkbox"
//                 value={value}
//                 className="bg-secondary bg-opacity-10 w-6 h-6 rounded-lg outline-none ring-primary transition-all appearance-none  "
//             />
//             <span className="absolute left-[3px] scale-0 transition-all ">
//                 <svg
//                     width="18"
//                     height="14"
//                     viewBox="0 0 20 16"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="block"
//                 >
//                     <path
//                         d="M2 7.73913L7.17647 13L18 2"
//                         stroke="#404040"
//                         strokeWidth="3"
//                         strokeLinecap="round"
//                     />
//                 </svg>
//             </span>
//             <label htmlFor={value} className="text-sm font-normal ml-2 ">
//                 {value}
//             </label>
//         </span>
//     );
// };
