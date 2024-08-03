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
        }
    ]

  return (
    <section>
        <span><h1>Experience and Projects</h1></span>
        <div>
            <h2 className='font-bold text-2xl' >Experience</h2>
            <ul>
                    {experience.map((exp, index) => (
                        <li key={index}>
                            <h3>{exp.Title}</h3>
                            <h4>{exp.Company}</h4>
                            <span>Duration: {exp.duration}</span>
                            <div>
                                {exp.desc}
                            </div>
                            <div>
                                {exp.techStack.map((tech, index) => (
                                    <span key={index} className='bg-gray-300 rounded-md p-1' >{tech}</span>
                                ))}
                            </div>
                        </li>
                    ))}
            </ul>
        </div>
    </section>
  )
}

export default page