/*---------------------------------------*\
 *              Components
\*---------------------------------------*/

const aboutItems = [
    {
      label: 'Projects done',
      number: 6
    },
    {
      label: 'Years of experience',
      number: 0.6
    }
  ];

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">

                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                    <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                    Hello! I&apos;m Wei Hao, a recent IT graduate with a passion for exploring various areas of technology. With solid foundation in IT, I&apos;m eager to apply my skills in role that aligns with my aspirations. I'm excited to learn, grow, and contribute to innovative projects
                    </p>

                    <div className="flex flex-wrap itemss-center gap-4 md:gap-7">
                        {
                            aboutItems.map(({ label, number}, key) => (
                                <div key={key}>
                                    <div className="flex items-center md;mb-2">
                                        <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                        <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                    </div>

                                    <p className="text-sm text-zinc-400">{label}</p>
                                </div>
                            ))
                        }

                    </div>
                </div>

            </div>
        </section>
    )
}

export default About;