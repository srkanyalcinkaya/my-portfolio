import React from 'react'
const userData = {
    
        experience: [
            
            {
                title: "Software Developer",
                company: "Chavinci Network",
                year: "2022-∞",
                companyLink: "https://chavinci.com",
                desc: "At Chavinci, we are developing a new technology to enable users to access a better, reliable and faster internet environment.",
            },
            {
                title: "Software Developer",
                company: "Vibof Network",
                year: "2022-2022",
                companyLink: "https://vibof.com.tr/",
                desc: "I worked here for a year as a full-stack and blockchain developer.",
            },
            {
                title: "Freelancer",
                company: "-",
                year: "2020-2022",
                companyLink: "#",
                desc: "I started working as a freelancer.",
            },
        ],

}
    
export const metadata = {
    title: 'Experience',
    description: 'Experience',
  };
const page = () => {
    return (
        <section className="">
            <div className="max-w-6xl mx-auto h-48">
                <h1 className=" text-3xl md:text-6xl font-bold py-20 text-center md:text-left">
                    Experience
                </h1>
            </div>
            <div className=" -mt-4">
                <div className="grid grid-cols-1  max-w-xl mx-auto pt-20">
                    {/* Experience card */}
                    {userData.experience.map((exp, idx) => (
                        <>
                            <ExperienceCard
                                key={idx}
                                title={exp.title}
                                desc={exp.desc}
                                year={exp.year}
                                company={exp.company}
                                companyLink={exp.companyLink}
                            />
                            {idx === userData.experience.length - 1 ? null : (
                                <div className="divider-container flex flex-col items-center -mt-2">
                                    <div className="w-4 h-4 bg-green-500 rounded-full relative z-10">
                                        <div className="w-4 h-4 bg-green-500 rounded-full relative z-10 animate-ping"></div>
                                    </div>
                                    <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
                                </div>
                            )}
                        </>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default page


const ExperienceCard = ({ title, desc, year, company, companyLink }) => {
    return (
        <div className="relative experience-card border p-4 rounded-md shadow-xl  z-10 mx-4">
            <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-200 font-bold">
                {year}
            </h1>
            <h1 className="font-semibold text-xl">{title}</h1>
            <a href={companyLink} className="text-gray-500">
                {company}
            </a>
            <p className="text-gray-600 dark:text-gray-400 my-2">{desc}</p>
        </div>
    );
};