import { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Image from 'components/Image';
import { useScrollRestore } from 'hooks';
import Footer from 'components/Footer';
import {
  ProjectContainer,
  ProjectSection,
  ProjectSectionContent,
  ProjectImage,
  ProjectTextRow,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectBackground,
  ProjectHeader,
  ProjectSectionColumns,
} from 'components/ProjectLayout';
import visualizerBackground from 'assets/visualizer-background.jpg';
import visualizerBackgroundLarge from 'assets/visualizer-background.jpg';
import visualizerBackgroundPlaceholder from 'assets/placeholder.jpg';
import visualizerApp from 'assets/visualizer-app.jpg';
import visualizerAppLarge from 'assets/visualizer-app.jpg';
import visualizerAppPlaceholder from 'assets/placeholder.jpg';
import visualizerSlide1 from 'assets/visualizer-slide-1.PNG';
import visualizerSlideLarge1 from 'assets/visualizer-slide-1.PNG';
import visualizerSlidePlaceholder1 from 'assets/placeholder.jpg';
import visualizerSlide2 from 'assets/visualizer-slide-2.PNG';
import visualizerSlideLarge2 from 'assets/visualizer-slide-2.PNG';
import visualizerSlidePlaceholder2 from 'assets/placeholder.jpg';
import visualizerSlide3 from 'assets/visualizer-slide-3.PNG';
import visualizerSlideLarge3 from 'assets/visualizer-slide-3.PNG';
import visualizerSlidePlaceholder3 from 'assets/placeholder.jpg';
import visualizerSlide4 from 'assets/visualizer-slide-4.PNG';
import visualizerSlideLarge4 from 'assets/visualizer-slide-4.PNG';
import visualizerSlidePlaceholder4 from 'assets/placeholder.jpg';
import prerender from 'utils/prerender';
import { media } from 'utils/style';
import './index.css';

const title = 'Visualizer';
const description =
  'This project involved designing a better way for learning data structure through visualizations.';
const roles = ['Data Structure', 'Visualizers', 'User Interface'];

const ProjectVisualizer = () => {
  useScrollRestore();

  return (
    <Fragment>
      <Helmet>
        <title>{`Projects | ${title}`}</title>
        <meta name="description" content={description} />
      </Helmet>
      <ProjectContainer className="visualizer">
        <ProjectBackground
          srcSet={`${visualizerBackground} 1280w, ${visualizerBackgroundLarge} 2560w`}
          placeholder={visualizerBackgroundPlaceholder}
          opacity={0.8}
          entered={!prerender}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://ds-visualizers.herokuapp.com/"
          roles={roles}
        />
        <ProjectSection first>
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${visualizerApp} 800w, ${visualizerAppLarge} 1920w`}
              placeholder={visualizerAppPlaceholder}
              alt="The Visualizer web application."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
            <ProjectSectionHeading>Glimpses of Website</ProjectSectionHeading>
            <div className = 'project-summary__content'>
            <Image
              srcSet={`${visualizerSlide1} 800w, ${visualizerSlideLarge1} 1440w`}
              placeholder={visualizerSlidePlaceholder1}
              alt="image of visualizer"
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
            <Image
              srcSet={`${visualizerSlide2} 800w, ${visualizerSlideLarge2} 1440w`}
              placeholder={visualizerSlidePlaceholder2}
              alt="image of visualizer"
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
            <Image
              srcSet={`${visualizerSlide3} 800w, ${visualizerSlideLarge3} 1440w`}
              placeholder={visualizerSlidePlaceholder3}
              alt="image of visualizer"
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
            <Image
              srcSet={`${visualizerSlide4} 800w, ${visualizerSlideLarge4} 1440w`}
              placeholder={visualizerSlidePlaceholder4}
              alt="image of visualizer"
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
            </div>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};

export default ProjectVisualizer;
