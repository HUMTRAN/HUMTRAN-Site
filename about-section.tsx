// Test implementation of About Us section with data mapping and hover effects

const aboutUsData = [
    {
        title: "OUR PHILOSOPHY",
        description: "Education should produce Value Creators Not Job Seekers - HUMTRAN believes every young person carries untapped creative capacity. Through STEAM-focused learning (Science, Technology, Engineering, Arts, Mathematics), the organization equips students not just with knowledge, but with the ability to design, build, invent, and pioneer solutions that shape industries and reshape the future.."
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
