import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import Intro from 'pages/Home/Intro';
import ProjectSummary from 'pages/Home/ProjectSummary';
import Profile from 'pages/Home/Profile';
import Skill from 'pages/Home/Skill';
import Footer from 'components/Footer';
import { usePrefersReducedMotion, useRouteTransition } from 'hooks';
import { useLocation } from 'react-router-dom';
import visualizerPlaceholder from 'assets/visualizer.PNG';
import visualizer from 'assets/visualizer.PNG';
import visualizerLarge from 'assets/visualizer.PNG';
import heartbeatPlaceholder from 'assets/placeholder.jpg';
import heartbeat from 'assets/heartbeat.jpg';
import heartbeatLarge from 'assets/heartbeat.jpg';
import heartbeat2Placeholder from 'assets/placeholder.jpg';
import heartbeat2 from 'assets/heartbeat-app.jpg';
import heartbeat2Large from 'assets/heartbeat-app.jpg';
import beatoPlaceholder from 'assets/placeholder.jpg';
import beato from 'assets/beato.jpg';
import beatoLarge from 'assets/beato.jpg';
import beato2Placeholder from 'assets/placeholder.jpg';
import beato2 from 'assets/beato-app.jpg';
import beato2Large from 'assets/beato-app.jpg';
import keetoPlaceholder from 'assets/placeholder.jpg';
import keeto from 'assets/keeto.jpg';
import keetoLarge from 'assets/keeto.jpg';
import keeto2Placeholder from 'assets/placeholder.jpg';
import keeto2 from 'assets/keeto-app.jpg';
import keeto2Large from 'assets/keeto-app.jpg';
import arcardPlaceholder from 'assets/placeholder.jpg';
import arcard from 'assets/ar-card.gif';
import socketPlaceholder from 'assets/placeholder.jpg';
import socket from 'assets/socket.gif';
import editorPlaceholder from 'assets/placeholder.jpg';
import editor from 'assets/editor.jpg';
import iphone11 from 'assets/iphone-11.glb';
import macbookPro from 'assets/macbook-pro.glb';
import './index.css';

const disciplines = ['Developer', 'Open Source Contributor', 'Coder'];

const Home = () => {
  const { status } = useRouteTransition();
  const { hash, state } = useLocation();
  const initHash = useRef(true);
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const projectFive = useRef();
  const projectSix = useRef();
  const projectSeven = useRef();
  const skills = useRef();
  const details = useRef();
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const revealSections = [intro,projectOne, projectTwo, projectThree,projectFour, projectFive, projectSix,projectSeven,skills,details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px' }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    revealSections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  useEffect(() => {
    const hasEntered = status === 'entered';
    const supportsNativeSmoothScroll = 'scrollBehavior' in document.documentElement.style;
    let scrollObserver;
    let scrollTimeout;

    const handleHashchange = (hash, scroll) => {
      clearTimeout(scrollTimeout);
      const hashSections = [intro, projectOne, skills, details];
      const hashString = hash.replace('#', '');
      const element = hashSections.filter(item => item.current.id === hashString)[0];
      if (!element) return;
      const behavior = scroll && !prefersReducedMotion ? 'smooth' : 'instant';
      const top = element.current.offsetTop;

      scrollObserver = new IntersectionObserver(
        (entries, observer) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            scrollTimeout = setTimeout(
              () => {
                element.current.focus();
              },
              prefersReducedMotion ? 0 : 400
            );
            observer.unobserve(entry.target);
          }
        },
        { rootMargin: '-20% 0px -20% 0px' }
      );

      scrollObserver.observe(element.current);

      if (supportsNativeSmoothScroll) {
        window.scroll({
          top,
          left: 0,
          behavior,
        });
      } else {
        window.scrollTo(0, top);
      }
    };

    if (hash && initHash.current && hasEntered) {
      handleHashchange(hash, false);
      initHash.current = false;
    } else if (!hash && initHash.current && hasEntered) {
      window.scrollTo(0, 0);
      initHash.current = false;
    } else if (hasEntered) {
      handleHashchange(hash, true);
    }

    return () => {
      clearTimeout(scrollTimeout);
      if (scrollObserver) {
        scrollObserver.disconnect();
      }
    };
  }, [hash, state, prefersReducedMotion, status]);

  return (
    <div className="home">
      <Helmet>
        <title>Akashdeep | Engineer + Developer</title>
        <meta
          name="description"
          content="Portfolio of Akashdeep – A Computer Science Engineer And Developer."
        />
        <link rel="prefetch" href={iphone11} as="fetch" crossorigin="" />
        <link rel="prefetch" href={macbookPro} as="fetch" crossorigin="" />
      </Helmet>
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Visualizer"
        description="Study Of Data Structures Using The Most Amazing Visualizers"
        buttonText="View Project"
        buttonLink="/projects/visualizer"
        model={{
          type: 'laptop',
          alt: 'Visualizers Screen',
          textures: [
            {
              src: visualizer,
              srcSet: `${visualizer} 800w, ${visualizerLarge} 1440w`,
              placeholder: visualizerPlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="HeartBeat"
        description="A Music Player App"
        buttonText="View Project"
        buttonLink="/projects/heartbeat"
        model={{
          type: 'phone',
          alt: 'HeartBeat screen',
          textures: [
            {
              src: heartbeat,
              srcSet: `${heartbeat} 254w, ${heartbeatLarge} 508w`,
              placeholder: heartbeatPlaceholder,
            },
            {
              src: heartbeat2,
              srcSet: `${heartbeat2} 254w, ${heartbeat2Large} 508w`,
              placeholder: heartbeat2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Beato"
        description="A Beat Making App"
        buttonText="View Project"
        buttonLink="/projects/beato"
        model={{
          type: 'phone',
          alt: 'Beato screen',
          textures: [
            {
              src: beato,
              srcSet: `${beato} 254w, ${beatoLarge} 508w`,
              placeholder: beatoPlaceholder,
            },
            {
              src: beato2,
              srcSet: `${beato2} 254w, ${beato2Large} 508w`,
              placeholder: beato2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Multi-Client Chatroom"
        description="A Multi-Client Chatroom Created Using Socket and Threading"
        buttonText="View Project"
        buttonLink="https://github.com/akash2408/multi-client-chatroom"
        model={{
          type: 'empty',
          alt: 'Socket Screen',
          image : socket,
          placeholder : socketPlaceholder
        }}
      />
      <ProjectSummary
        id="project-5"
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={5}
        title="Keeto"
        description="A Messaging App with 1v1 Live Stream"
        buttonText="View Project"
        buttonLink="/projects/keeto"
        model={{
          type: 'phone',
          alt: 'Keeto screen',
          textures: [
            {
              src: keeto,
              srcSet: `${keeto} 254w, ${keetoLarge} 508w`,
              placeholder: keetoPlaceholder,
            },
            {
              src: keeto2,
              srcSet: `${keeto2} 254w, ${keeto2Large} 508w`,
              placeholder: keeto2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-6"
        alternate
        sectionRef={projectSix}
        visible={visibleSections.includes(projectSix.current)}
        index={6}
        title="React-Image-Editor"
        description="A Full Featured Image Editor Library Using Html5 Canvas and React. It's Easy To Use And Provides Powerful Tools."
        buttonText="View Project"
        buttonLink="/projects/react-image-editor"
        model={{
          type: 'empty',
          alt: 'Editor Screen',
          image : editor,
          placeholder : editorPlaceholder
        }}
      />
      <ProjectSummary
        id="project-7"
        sectionRef={projectSeven}
        visible={visibleSections.includes(projectSeven.current)}
        index={7}
        title="AR Card"
        description="An Augmented Reality Card For Android App Which Show The Information Related On The Card Using Unity And Vuforia"
        buttonText="View Project"
        buttonLink="https://github.com/akash2408/ARCard"
        model={{
          type: 'empty',
          alt: 'AR Screen',
          image : arcard,
          placeholder : arcardPlaceholder
        }}
      />
      <Skill
        sectionRef={skills}
        visible={visibleSections.includes(skills.current)}
        id="skills"
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};

export default Home;