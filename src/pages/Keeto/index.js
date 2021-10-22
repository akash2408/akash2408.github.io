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
import keetoSlide1 from 'assets/keeto-slide-1.jpg';
import keetoSlideLarge1 from 'assets/keeto-slide-1.jpg';
import keetoSlidePlaceholder1 from 'assets/placeholder.jpg';
import keetoSlide2 from 'assets/keeto-slide-2.jpg';
import keetoSlideLarge2 from 'assets/keeto-slide-2.jpg';
import keetoSlidePlaceholder2 from 'assets/placeholder.jpg';
import keetoSlide3 from 'assets/keeto-slide-3.jpg';
import keetoSlideLarge3 from 'assets/keeto-slide-3.jpg';
import keetoSlidePlaceholder3 from 'assets/placeholder.jpg';
import keetoSlide4 from 'assets/keeto-slide-4.jpg';
import keetoSlideLarge4 from 'assets/keeto-slide-4.jpg';
import keetoSlidePlaceholder4 from 'assets/placeholder.jpg';

import keetoSidebarLayers from 'assets/keeto.jpg';
import keetoSidebarLayersLarge from 'assets/keeto.jpg';
import keetoSidebarLayersPlaceholder from 'assets/placeholder.jpg';
import keetoSidebarAnnotations from 'assets/keeto-app.jpg';
import keetoSidebarAnnotationsLarge from 'assets/keeto-app.jpg';
import keetoSidebarAnnotationsPlaceholder from 'assets/placeholder.jpg';

import { media } from 'utils/style';
import './index.css';

const title = 'Keeto';
const description =
  'A basic messaging app with 1v1 Live Stream Feature';
const roles = ['Kotlin', 'Firebase', 'Agora'];

const ProjectKeeto = () => {
  useScrollRestore();

  return (
    <Fragment>
      <Helmet>
        <title>{`Projects | ${title}`}</title>
        <meta name="description" content={description} />
      </Helmet>
      <ProjectContainer className="keeto">
        <ProjectHeader
          title={title}
          description={description}
          url="https://github.com/Blaze-69/Keeto"
          roles={roles}
        />
        <ProjectSection first>
        <ProjectSectionColumns centered className="keeto__columns">
         <div className="keeto__sidebar-images">
            <Image
              reveal delay={300}
              className="keeto__sidebar-image"
              srcSet={`${keetoSidebarAnnotations} 300w, ${keetoSidebarAnnotationsLarge} 700w`}
              placeholder={keetoSidebarLayersPlaceholder}
              alt="The layers sidebar design, now with user profiles."
              sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
            />
            <Image
              reveal delay={300}
              className="keeto__sidebar-image"
              srcSet={`${keetoSidebarLayers} 300w, ${keetoSidebarLayersLarge} 700w`}
              placeholder={keetoSidebarAnnotationsPlaceholder}
              alt="Multiple user annotations on a shared layer."
              sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
            />
          </div>
          <div className="keeto__sidebar-images">
            <Image
              reveal delay={300}
              className="keeto__sidebar-image"
              srcSet={`${keetoSidebarLayers} 300w, ${keetoSidebarLayersLarge} 700w`}
              placeholder={keetoSidebarLayersPlaceholder}
              alt="The layers sidebar design, now with user profiles."
              sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
            />
            <Image
              reveal delay={300}
              className="keeto__sidebar-image"
              srcSet={`${keetoSidebarAnnotations} 300w, ${keetoSidebarAnnotationsLarge} 700w`}
              placeholder={keetoSidebarAnnotationsPlaceholder}
              alt="Multiple user annotations on a shared layer."
              sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
            />
          </div>
        </ProjectSectionColumns>
          <ProjectSectionContent>
            <ProjectSectionHeading>Glimpses of Application</ProjectSectionHeading>
            <div className = 'mobile-project-summary__content'>
              <Image
                srcSet={`${keetoSlide1} 800w, ${keetoSlideLarge1} 1440w`}
                placeholder={keetoSlidePlaceholder1}
                alt="image of keeto"
                sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
              />
              <Image
                srcSet={`${keetoSlide2} 800w, ${keetoSlideLarge2} 1440w`}
                placeholder={keetoSlidePlaceholder2}
                alt="image of keeto"
                sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
              />
              <Image
                srcSet={`${keetoSlide3} 800w, ${keetoSlideLarge3} 1440w`}
                placeholder={keetoSlidePlaceholder3}
                alt="image of keeto"
                sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
              />
              <Image
                srcSet={`${keetoSlide4} 800w, ${keetoSlideLarge4} 1440w`}
                placeholder={keetoSlidePlaceholder4}
                alt="image of keeto"
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

export default ProjectKeeto;
