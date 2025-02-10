/*---------------------------------------*\
 *              Components
\*---------------------------------------*/

import SkillCard from "./SkillCard";

const skillItem = [
    {
      imgSrc: '/images/python.svg',
      label: 'Python',
      desc: 'Programming, Scripting'
    },
    {
      imgSrc: '/images/java.svg',
      label: 'Java',
      desc: 'Programming'
    },
    {
      imgSrc: '/images/c++.svg',
      label: 'C++',
      desc: 'Programming'
    },
    {
      imgSrc: '/images/c-sharp.svg',
      label: 'C#',
      desc: 'Programming'
    },
    {
      imgSrc: '/images/css3.svg',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: '/images/nodejs.svg',
      label: 'NodeJS',
      desc: 'Web Server'
    },
    {
      imgSrc: '/images/react.svg',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: '/images/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/unity.svg',
      label: 'Unity',
      desc: 'Game Development'
    },
  ];

const Skill = () => {
    return (
        <section className="section">
            <div className="container"> 
                <h2 className="headline-2 reveal-up">
                    Tools and Frameworks I use
                </h2>

                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
                Explore the tools and technologies I use to build outstanding, high-performace software and applications.
                </p>

                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {
                        skillItem.map(({ imgSrc, label, desc}, key) => (
                            <SkillCard 
                                key={key}
                                imgSrc={imgSrc}
                                label={label}
                                desc={desc}
                                classes="reveal-up"
                            />
                        ))
                    }
                </div>

            </div>
        </section>
    )
}

export default Skill