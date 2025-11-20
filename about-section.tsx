// Test implementation of About Us section with data mapping and hover effects

const aboutUsData = [
    {
        title: "EDUCATION SHOULD PRODUCE VALUE CREATORS - NOT JOB SEEKERS",
        description: "HUMTRAN believes in inspiring young minds to harness untapped creative capacity for value creation. Through STEAM-focused learning (Science, Technology, Engineering, Arts, Mathematics), the organization equips students not just with knowledge, but with the ability to design, build, invent, and pioneer solutions that shape industries and reshape the future.."
    },
    {
        title: "EDUCATION SHOULD TRANSLATE INTO REAL-WORLD SOLUTIONS - NOT JUST THEORIES",
        description: "HUMTRAN ensures that learning becomes functional, productive, and impactful. Through Foundation-backed projects and innovation programs, HUMTRAN supports regeneration of industries, and creation of new brands, products, advanced technologies and systems that can solve practical problems, and drive real economic impact."
    },
    {
        title: "EDUCATION SHOULD CONTRIBUTE TO SOCIOPOLITICAL, AND SOCIOECONOMIC TRANSFORMATION.",
        description: "HUMTRAN believes that education must extend beyond personal advancement to serve the broader purpose of building a just, fair, and progressive society. As a Foundation, HUMTRAN is deeply committed to working in synergy with thought leaders, policymakers, legal practitioners, and reform advocates to reflect on and contribute to issues surrounding social justice and equity.."
    }
];

const AboutUsSection = () => {
    return (
        <div className="self-stretch flex flex-col justify-start items-start md:px-[50px] px-4 gap-7">
            <div className="justify-start text-stone-950 text-5xl font-semibold font-clash">ABOUT US</div>

            {/* Responsive grid container */}
            <div className="self-stretch grid grid-cols-1 lg:grid-cols-3 gap-5">
                {aboutUsData.map((item, index) => (
                    <div
                        key={index}
                        className="group p-5 outline outline-sky-500 flex flex-col justify-start items-start gap-2.5 hover:bg-[#27ABDC] transition-colors duration-300 cursor-pointer h-full"
                    >
                        {/* Responsive width container */}
                        <div className="w-full lg:w-[383px] py-5 flex flex-col justify-start items-start gap-10">
                            <div className="self-stretch justify-start text-stone-900 group-hover:text-white text-xl font-bold font-work">
                                {item.title}
                            </div>
                            <div className="self-stretch justify-start text-stone-900 group-hover:text-white text-lg font-medium font-work leading-relaxed">
                                {item.description}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutUsSection;
