import { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Image from 'components/Image';
import { useScrollRestore } from 'hooks';
import Footer from 'components/Footer';
import {
  ProjectContainer,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectHeader,
  ProjectSectionColumns,
} from 'components/ProjectLayout';
import beatoSlide1 from 'assets/beato-slide-1.jpg';
import beatoSlideLarge1 from 'assets/beato-slide-1.jpg';
import beatoSlidePlaceholder1 from 'assets/placeholder.jpg';
import beatoSlide2 from 'assets/beato-slide-2.jpg';
import beatoSlideLarge2 from 'assets/beato-slide-2.jpg';
import beatoSlidePlaceholder2 from 'assets/placeholder.jpg';
import beatoSlide3 from 'assets/beato-slide-3.jpg';
import beatoSlideLarge3 from 'assets/beato-slide-3.jpg';
import beatoSlidePlaceholder3 from 'assets/placeholder.jpg';
import beatoSlide4 from 'assets/beato-slide-4.jpg';
import beatoSlideLarge4 from 'assets/beato-slide-4.jpg';
import beatoSlidePlaceholder4 from 'assets/placeholder.jpg';

import beatoSidebarLayers from 'assets/beato.jpg';
import beatoSidebarLayersLarge from 'assets/beato.jpg';
import beatoSidebarLayersPlaceholder from 'assets/placeholder.jpg';
import beatoSidebarAnnotations from 'assets/beato-app.jpg';
import beatoSidebarAnnotationsLarge from 'assets/beato-app.jpg';
import beatoSidebarAnnotationsPlaceholder from 'assets/placeholder.jpg';

import { media } from 'utils/style';
import './index.css';

const title = 'Beato';
const description =
  'This project involved creating a fully functional beat making which consist of beats of various instruments.';
const roles = ['Kotlin', 'AudioManager', 'File Handling'];

const ProjectBeato = () => {
  useScrollRestore();

  return (
    <Fragment>
      <Helmet>
        <title>{`Projects | ${title}`}</title>
        <meta name="description" content={description} />
      </Helmet>
      <ProjectContainer className="beato">
        <ProjectHeader
          title={title}
          description={description}
          url="https://github.com/Blaze-69/Beato"
          roles={roles}
        />
        <ProjectSection first>
        <ProjectSectionColumns centered className="beato__columns">
         <div className="beato__sidebar-images">
            <Image
              reveal delay={300}
              className="beato__sidebar-image"
              srcSet={`${beatoSidebarAnnotations} 300w, ${beatoSidebarAnnotationsLarge} 700w`}
              placeholder={beatoSidebarLayersPlaceholder}
              alt="The layers sidebar design, now with user profiles."
              sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
            />
            <Image
              reveal delay={300}
              className="beato__sidebar-image"
              srcSet={`${beatoSidebarLayers} 300w, ${beatoSidebarLayersLarge} 700w`}
              placeholder={beatoSidebarAnnotationsPlaceholder}
              alt="Multiple user annotations on a shared layer."
              sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
            />
          </div>
          <div className="beato__sidebar-images">
            <Image
              reveal delay={300}
              className="beato__sidebar-image"
              srcSet={`${beatoSidebarLayers} 300w, ${beatoSidebarLayersLarge} 700w`}
              placeholder={beatoSidebarLayersPlaceholder}
              alt="The layers sidebar design, now with user profiles."
              sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
            />
            <Image
              reveal delay={300}
              className="beato__sidebar-image"
              srcSet={`${beatoSidebarAnnotations} 300w, ${beatoSidebarAnnotationsLarge} 700w`}
              placeholder={beatoSidebarAnnotationsPlaceholder}
              alt="Multiple user annotations on a shared layer."
              sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
            />
          </div>
        </ProjectSectionColumns>
          <ProjectSectionContent>
            <ProjectSectionHeading>Glimpses of Application</ProjectSectionHeading>
            <div className = 'mobile-project-summary__content'>
              <Image
                srcSet={`${beatoSlide1} 800w, ${beatoSlideLarge1} 1440w`}
                placeholder={beatoSlidePlaceholder1}
                alt="image of beato"
                sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
              />
              <Image
                srcSet={`${beatoSlide2} 800w, ${beatoSlideLarge2} 1440w`}
                placeholder={beatoSlidePlaceholder2}
                alt="image of beato"
                sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
              />
              <Image
                srcSet={`${beatoSlide3} 800w, ${beatoSlideLarge3} 1440w`}
                placeholder={beatoSlidePlaceholder3}
                alt="image of beato"
                sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
              />
              <Image
                srcSet={`${beatoSlide4} 800w, ${beatoSlideLarge4} 1440w`}
                placeholder={beatoSlidePlaceholder4}
                alt="image of beato"
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

export default ProjectBeato;
