/*---------------------------------------*\
 *              Node Modules
    1. Lenis Library - github.com/darkroomengineering/lenis
\*---------------------------------------*/

import { ReactLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

/*---------------------------------------*\
 *              GSAP Plugins
\*---------------------------------------*/
gsap.registerPlugin(useGSAP, ScrollTrigger);


/*---------------------------------------*\
 *              Components
\*---------------------------------------*/

import Header  from "./components/Header";
import Front   from "./components/Front";
import About   from "./components/About";
import Skill   from "./components/Skills";
import Work    from "./components/Work";
import Contact from "./components/Contact";
import Footer  from "./components/Footer";

const App = () => {

    useGSAP(() => {
        const elements = gsap.utils.toArray('.reveal-up');
        
        elements.forEach((element) => {
            gsap.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: '-200 bottom',
                    end: 'bottom 70%',
                    scrub: true
                },
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.out'
            })
        });
    });

    return (
        <ReactLenis root>
            <Header />
            <main>
                <Front />
                <About />
                <Skill />
                <Work />
                <Contact />
                <Footer />
            </main>
        </ReactLenis>
    )
        
}

export default App;