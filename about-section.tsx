// Test implementation of About Us section with data mapping and hover effects

const aboutUsData = [
    {
        title: "WHO WE ARE",
        description: "We are a foundation dedicated to bridging the gap between traditional education and real-world problem solving through Science, Technology, Engineering, Arts, and Mathematics (STEAM) by empowering young minds both within and beyond the academic community to foster innovation, create values and drive transformation."
    },
    {
        title: "WHAT WE DO",
        description: "We design unique and customizable educational solutions that promote hands-on learning, critical thinking, and creativity through partnerships with academic and non-academic institutions, community programs, and individual initiatives within our global network."
    },
    {
        title: "OUR GOAL",
        description: "Our goal is to cultivate a generation of innovative thinkers and problem-solvers who are equipped with the skills, mindset, and confidence to tackle real-world challenges and contribute meaningfully to society."
    }
];

const AboutUsSection = () => {
    return (
        <div className="self-stretch flex flex-col justify-start items-start gap-7">
            <div className="justify-start text-stone-950 text-5xl font-semibold font-clash">ABOUT US</div>
            <div className="self-stretch inline-flex justify-between items-start">
                {aboutUsData.map((item, index) => (
                    <div
                        key={index}
                        className="group self-stretch p-5 outline outline-sky-500 inline-flex flex-col justify-start items-start gap-2.5 hover:bg-[#27ABDC] transition-colors duration-300 cursor-pointer"
                    >
                        <div className="w-[383px] py-5 flex flex-col justify-start items-start gap-10">
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
