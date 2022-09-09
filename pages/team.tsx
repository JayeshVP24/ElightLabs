/* eslint-disable @next/next/no-img-element */
import { domAnimation, LazyMotion, m } from "framer-motion";
import { NextPage } from "next";
import { NextSeo, NextSeoProps } from "next-seo";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Team: NextPage = () => {
    const SEO: NextSeoProps = {
        title: "Our Team | Elight Labs",
        description: `The Team of Elight Labs. We are a bunch of dreamers, designers and futurists
                            high on collaboration, low on ego and take our happy
                            hours seriously and take out time to celebrate our
                            team’s successes`,
        openGraph: {
            title: "Our Team | Elight Labs",
            description: `The Team of Elight Labs. We are a bunch of dreamers, designers and futurists
                            high on collaboration, low on ego and take our happy
                            hours seriously and take out time to celebrate our
                            team’s successes`,
        },
    };

    return (
        <LazyMotion features={domAnimation}>
            <NextSeo {...SEO} />

            <div className=" ">
                <Navbar current="Our Team" />

                <aside className="absolute z-[-10] top-[10%] left-[-80%] lg:top-[-8%] lg:left-[10%] ">
                    <svg
                        width="557"
                        height="557"
                        viewBox="0 0 557 557"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g filter="url(#filter0_f)">
                            <circle
                                cx="278.5"
                                cy="278.5"
                                r="128.5"
                                fill="#1377E1"
                                fillOpacity="0.5"
                            />
                        </g>
                        <defs>
                            <filter
                                id="filter0_f"
                                x="0"
                                y="0"
                                width="557"
                                height="557"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                            >
                                <feFlood
                                    floodOpacity="0"
                                    result="BackgroundImageFix"
                                />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="BackgroundImageFix"
                                    result="shape"
                                />
                                <feGaussianBlur
                                    stdDeviation="75"
                                    result="effect1_foregroundBlur"
                                />
                            </filter>
                        </defs>
                    </svg>
                </aside>

                <aside className="lg:hidden absolute z-[-10] right-0 top-0 lg:left-[45%] lg:top-0 ">
                    <svg
                        width="293"
                        height="410"
                        viewBox="0 0 293 410"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g filter="url(#filter0_f)">
                            <path
                                d="M369 150.5C369 210.975 319.975 260 259.5 260C199.025 260 150 210.975 150 150.5C150 90.0248 199.025 41 259.5 41C319.975 41 369 90.0248 369 150.5Z"
                                fill="#1377E1"
                                fillOpacity="0.4"
                            />
                        </g>
                        <defs>
                            <filter
                                id="filter0_f"
                                x="0"
                                y="-109"
                                width="519"
                                height="519"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                            >
                                <feFlood
                                    floodOpacity="0"
                                    result="BackgroundImageFix"
                                />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="BackgroundImageFix"
                                    result="shape"
                                />
                                <feGaussianBlur
                                    stdDeviation="75"
                                    result="effect1_foregroundBlur"
                                />
                            </filter>
                        </defs>
                    </svg>
                </aside>
                <aside className="hidden lg:block absolute z-[-10] top-[-2%] left-[30%] lg:left-[45%] lg:top-0 ">
                    <svg
                        width="519"
                        height="519"
                        viewBox="0 0 519 519"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g filter="url(#filter0_f)">
                            <path
                                d="M369 259.5C369 319.975 319.975 369 259.5 369C199.025 369 150 319.975 150 259.5C150 199.025 199.025 150 259.5 150C319.975 150 369 199.025 369 259.5Z"
                                fill="#1377E1"
                                fillOpacity="0.4"
                            />
                        </g>
                        <defs>
                            <filter
                                id="filter0_f"
                                x="0"
                                y="0"
                                width="519"
                                height="519"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                            >
                                <feFlood
                                    floodOpacity="0"
                                    result="BackgroundImageFix"
                                />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="BackgroundImageFix"
                                    result="shape"
                                />
                                <feGaussianBlur
                                    stdDeviation="75"
                                    result="effect1_foregroundBlur"
                                />
                            </filter>
                        </defs>
                    </svg>
                </aside>
                <main className="">
                    <section className="w-3/4 mx-auto flex flex-col items-center text-center mt-5 z-20 ">
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
                            className="font-bold text-black text-3xl leading-[3rem] lg:max-w-sm  lg:mx-4 lg:text-[3rem] lg:leading-[4.5rem] "
                        >
                            Meet the Gang of{" "}
                            <span className="text-primary">ElightLabs</span>
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
                            className="text-lg lg:text-xl font-medium text-black mt-5 lg:max-w-2xl "
                        >
                            We are a bunch of dreamers, designers and futurists
                            high on collaboration, low on ego and take our happy
                            hours seriously and take out time to celebrate our
                            team’s successes
                        </m.h2>
                    </section>

                    <section className="flex flex-col lg:grid md:grid-cols-2 md:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2 lg:my-20">
                        <TeamCard
                            name="Arbaaz Kadwekar"
                            title="CEO & Founder"
                            description="He's a charismatic man and the face of our company, introducing CEO,entrepreneur, Arbaaz Kadvekar!"
                        >
                            <img
                                width="384"
                                height="469"
                                src="/teamImages/arbaaz.jpg"
                                alt="CEO/Founder Image"
                                className="w-[180px] h-[230px] object-cover border- border-black rounded-[35px]
                                -translate-y-16"
                            />
                        </TeamCard>
                        <TeamCard
                            name="Kshitij Sakpal"
                            title="COO"
                            description="He's a persuaive individual and the co-founder, introducing the charming and bold, Kshitij Sakpal!"
                        >
                            <img
                                width="384"
                                height="469"
                                src="/teamImages/kshitij.jpg"
                                alt="CEO/Founder Image"
                                className="w-[140px] h-[200px] object-cover  rounded-[35px]
                                -translate-y-16"
                            />
                        </TeamCard>
                        <TeamCard
                            name="Husain Mamuwala"
                            title="CTO"
                            description="He's the techno-savvy and ever curious gadgeteer, introducing the innovative and ingenious, Husain Mamuwala!"
                        >
                            <img
                                width="384"
                                height="469"
                                src="/teamImages/husain.jpg"
                                alt="CEO/Founder Image"
                                className="w-[140px] h-[200px] object-cover  rounded-[35px]
                                -translate-y-16"
                            />
                        </TeamCard>                      
                        <TeamCard
                            name="Devashree Kandar"
                            title="Senior Graphic Designer"
                            description="She's a people's person and an excellent judge of character, introducing the sharp and prudent, Devashree Kandar!"
                        >
                            <img
                                width="384"
                                height="469"
                                src="/teamImages/devashree.jpeg"
                                alt="CEO/Founder Image"
                                className="w-[140px] h-[200px] object-cover  rounded-[35px]
                                -translate-y-16"
                            />
                        </TeamCard>
                        <TeamCard
                            name="Jayesh Potlabattini"
                            title="Senior Developer"
                            description="UI/UX Designer & Full Stack Web Developer
                            He's an architect of the creative websites you see, introducing the experienced and professional, Jayesh Potlabattini!"
                        >
                            <img
                                width="384"
                                height="469"
                                src="/teamImages/jayesh.jpg"
                                alt="CEO/Founder Image"
                                className="w-[140px] h-[200px] object-cover  rounded-[35px]
                                -translate-y-16"
                            />
                        </TeamCard>
                        <TeamCard
                            name="Rishika Tripathi and Nirmitee Keluskar"
                            title="Heads of Social Media Marketing"
                            description="They're the dynamic duo with effervescent personalities, introducing the social media bees, Rishika Tripathi and Nirmitee Keluskar!"
                        >
                            <img
                                width="384"
                                height="469"
                                src="/teamImages/rishikaAndNirmitee.jpeg"
                                alt="CEO/Founder Image"
                                className="w-[140px] h-[200px] object-cover  rounded-[35px]
                                -translate-y-16"
                            />
                        </TeamCard>
                        <TeamCard
                            name="Tanay Jawle"
                            title="Content Creation"
                            description="He's a witty storyteller with a keen eye for adventures, introducing the eloquent and brainy, Tanay Jawle!"
                        >
                            <img
                                width="384"
                                height="469"
                                src="/teamImages/tanay.jpg"
                                alt="CEO/Founder Image"
                                className="w-[140px] h-[200px] object-cover  rounded-[35px]
                                -translate-y-16"
                            />
                        </TeamCard>
                        <TeamCard
                            name="Midhat Shaikh"
                            title="Head of Branding and Marketing"
                            description="She's an insightful individual with an extensive passion for branding, introducing the creative and analytical, Midhat Shaikh!"
                        >
                            <img
                                width="384"
                                height="469"
                                src="/teamImages/midhat.jpg"
                                alt="CEO/Founder Image"
                                className="w-[140px] h-[200px] object-cover  rounded-[35px]
                                -translate-y-16"
                            />
                        </TeamCard>
                        <TeamCard
                            name="Anushri Rao"
                            title="Head of Management"
                            description="She's an organized and outgoing gal who has everything under control, introducing the empowering and impeccable, Anushri Rao!"
                        >
                            <img
                                width="384"
                                height="469"
                                src="/teamImages/anushree.jpg"
                                alt="CEO/Founder Image"
                                className="w-[140px] h-[200px] object-cover  rounded-[35px]
                                -translate-y-16"
                            />
                        </TeamCard>
                    </section>
                </main>

                <Footer />
            </div>
        </LazyMotion>
    );
};

const TeamCard: React.FC<{
    name: string;
    title: string;
    description?: string;
}> = ({ name, title, description, children }) => {
    return (
        <div
            className={`flex flex-col items-center   rounded-[40px] bg-[#9BC9FF] mt-24 mx-4 md:max-w-md md:mx-auto
        lg:w-[22rem] ${
            name === "Arbazz Kadvekar"
                ? "xl:w-[26rem] xl:col-start-2 xl:relative xl:-translate-y-8 "
                : ""
        } ${
                name === "Kshitij Sakpal"
                    ? "xl:w-[24rem] xl:col-start-1 xl:row-start-1 "
                    : ""
            } `}
        >
            {children}
            <div className="flex mx-5  flex-col items-center -translate-y-8 text-base text-center ">
                <h1 className="font-bold text-xl">{name}</h1>
                <h2 className="font-semibold mt-2 ">{title}</h2>
                <h3 className="mt-2 ">{description}</h3>
            </div>
        </div>
    );
};

export default Team;
