/*---------------------------------------*\
 *              Components
\*---------------------------------------*/

import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: './images/project-1.png',
      title: 'Voice-Enabled Form Making Website',
      tags: ['API', 'Voice Recognition', 'Development'],
      projectLink: 'https://github.com/whao06/Voice-Enabled-Form-Making-Website'
    },
    {
      imgSrc: './images/project-2.jpg',
      title: 'STEMscape: Virtual Expedition',
      tags: ['VR', 'GAME DEVELOPMENT'],
      projectLink: 'https://youtu.be/ZdOX6-u5CXM'
    },
    {
      imgSrc: './images/project-3.png',
      title: 'Personal Portfolio',
      tags: ['Web-design', 'React', 'Vite'],
      projectLink: 'https://github.com/whao06/whao-portfolio'
    },
  ];

const Work = () => {
    return (
        <section id="work" className="section">
            <div className="container">

                <h2 className="headline-2 mb-8 reveal-up">
                    My portfolio highlights
                </h2>

                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {works.map(({ imgSrc, title, tags, projectLink }, key) => (
                        <ProjectCard 
                            key={key}
                            imgSrc={imgSrc}
                            title={title}
                            tags={tags}
                            projectLink={projectLink}
                            classes="reveal-up"
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Work