import React from 'react'

const page = () => {

    const experience = [
        {
            duration: "May 2023 - Present",
            Title: "Software Engineer",
            Company: "SkaiLama",
            companyUrl: "https://skailama.com",
            desc: "I improved Web Vitals, achieving up to 200% better LCP and CLS by optimizing database calls and selective API usage on initial pages. Migrated apps from Node.js 12 to 16, ensuring smooth transitions for frontend and backend. Automated recurring customer integrations and customizations, eliminating such requests. Executed a global database migration to enhance analytics and frequent operations by reorganizing fields into a separate, indexed collection. Additionally, I trained multiple engineers and was directly responsible for applications in the founding engineer's absence.",
            techStack: ["NextJS", "Node", "MongoDB", "AWS"],
        },
        {
            duration: "Septemper 2022 - November 2022",
            Title: "Software Engineer Intern",
            Company: "Nine Lights Technology",
            desc: "Collborated with flipkart for big bilion day sales: Created a flipkart themed game, that got featured on flipkart big billion days sale as an event on app and website and collaborated with the flipkart team to integrate it",
            techStack: ["TypeScript", "React", "Node", "MongoDB", "GCP"],
        },
        {
            duration: "June 2022 - August 2022",
            Title: "Software Engineer Intern",
            Company: "Nine Lights Technology",
            desc: "Led the main project to create and enhance analytics software for transactions on the Polygon network, securing the company a Polygon fellowship. Developed a custom, highly secure authentication system using the Shamir Secret Sharing algorithm and consensus application.",
            techStack: ["EthereumJs", "React", "Node", "MongoDB"],
        },
        {
            duration: "October 2021 - April 2023",
            Title: "Co-Founder",
            Company: "Grayswipe",
            desc: "Led the development and launch of the MVP, handling ideation, coding, deployment, and documentation of the server-side architecture, iterating based on user feedback. Managed a team of 2 engineers, resulting in an MVP that attracted initial customers. Our work earned selection in T-Hub’s Rubrix cohort, where only 12 startups nationwide were chosen. This experience enhanced our product development skills and connected us with key players in Hyderabad's startup ecosystem.",
            techStack: ["NextJS", "Node", "MongoDB", "AWS", "React-Native", "Firebase"],
        },
        {
            duration: "",
            Title: "Engineer",
            Company: "Freelance",
            desc: "Developed a digital attendance solution for remote areas, optimized for minimal network bandwidth and compatibility with low-end mobile phones, ensuring reliable workforce attendance tracking.",
            techStack: ["React", "PSQL", "AWS", "Python"]
        }
    ]

  return (
    <section>
        <span><h1>Experience</h1></span>
        <div>
            <h2 className='font-bold text-2xl' ></h2>
            <br/>
            <ul>
                    {experience.map((exp, index) => (
                        <li key={index}>
                            <h4 className='font-bold' >{exp.Company}</h4>
                            <h3 className='font-semibold italic' >{exp.Title}</h3>
                            <span>Duration: {exp.duration}</span>
                            <div className='pt-2' >
                                {exp.desc}
                            </div>
                            <br/>
                            <div className='flex flex-wrap gap-2' >
                                {exp.techStack.map((tech, index) => (
                                    <span key={index} className='bg-gray-300 rounded-md p-2 px-3 border-2 border-black' >{tech}</span>
                                ))}
                            </div>
                            <hr className='w-full md:w-3/5 my-2' />
                            <br/>
                        </li>
                    ))}
            </ul>
        </div>
    </section>
  )
}

export default page