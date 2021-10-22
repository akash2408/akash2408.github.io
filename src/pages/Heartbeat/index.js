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
import heartbeatBackground from 'assets/heartbeat-background.jpg';
import heartbeatBackgroundLarge from 'assets/heartbeat-background.jpg';
import heartbeatBackgroundPlaceholder from 'assets/placeholder.jpg';
import heartbeatApp from 'assets/heartbeat-app.jpg';
import heartbeatAppLarge from 'assets/heartbeat-app.jpg';
import heartbeatAppPlaceholder from 'assets/placeholder.jpg';
import heartbeatSlide1 from 'assets/heartbeat-slide-1.jpg';
import heartbeatSlideLarge1 from 'assets/heartbeat-slide-1.jpg';
import heartbeatSlidePlaceholder1 from 'assets/placeholder.jpg';
import heartbeatSlide2 from 'assets/heartbeat-slide-2.jpg';
import heartbeatSlideLarge2 from 'assets/heartbeat-slide-2.jpg';
import heartbeatSlidePlaceholder2 from 'assets/placeholder.jpg';
import heartbeatSlide3 from 'assets/heartbeat-slide-3.jpg';
import heartbeatSlideLarge3 from 'assets/heartbeat-slide-3.jpg';
import heartbeatSlidePlaceholder3 from 'assets/placeholder.jpg';
import heartbeatSlide4 from 'assets/heartbeat-slide-4.jpg';
import heartbeatSlideLarge4 from 'assets/heartbeat-slide-4.jpg';
import heartbeatSlidePlaceholder4 from 'assets/placeholder.jpg';

import heartbeatSidebarLayers from 'assets/heartbeat.jpg';
import heartbeatSidebarLayersLarge from 'assets/heartbeat.jpg';
import heartbeatSidebarLayersPlaceholder from 'assets/placeholder.jpg';
import heartbeatSidebarAnnotations from 'assets/heartbeat-app.jpg';
import heartbeatSidebarAnnotationsLarge from 'assets/heartbeat-app.jpg';
import heartbeatSidebarAnnotationsPlaceholder from 'assets/placeholder.jpg';

import prerender from 'utils/prerender';
import { media } from 'utils/style';
import './index.css';

const title = 'Hearbeat';
const description =
  'This project involved creating a fully functional music player.';
const roles = ['Kotlin', 'Visualizers', 'User Interface'];

const ProjectHeartbeat = () => {
  useScrollRestore();

  return (
    <Fragment>
      <Helmet>
        <title>{`Projects | ${title}`}</title>
        <meta name="description" content={description} />
      </Helmet>
      <ProjectContainer className="heartbeat">
        <ProjectHeader
          title={title}
          description={description}
          url="https://github.com/akash2408/HeartBeat"
          roles={roles}
        />
        <ProjectSection first>
        <ProjectSectionColumns centered className="heartbeat__columns">
         <div className="heartbeat__sidebar-images">
            <Image
              reveal delay={300}
              className="heartbeat__sidebar-image"
              srcSet={`${heartbeatSidebarAnnotations} 300w, ${heartbeatSidebarAnnotationsLarge} 700w`}
              placeholder={heartbeatSidebarLayersPlaceholder}
              alt="The layers sidebar design, now with user profiles."
              sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
            />
            <Image
              reveal delay={300}
              className="heartbeat__sidebar-image"
              srcSet={`${heartbeatSidebarLayers} 300w, ${heartbeatSidebarLayersLarge} 700w`}
              placeholder={heartbeatSidebarAnnotationsPlaceholder}
              alt="Multiple user annotations on a shared layer."
              sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
            />
          </div>
          <div className="heartbeat__sidebar-images">
            <Image
              reveal delay={300}
              className="heartbeat__sidebar-image"
              srcSet={`${heartbeatSidebarLayers} 300w, ${heartbeatSidebarLayersLarge} 700w`}
              placeholder={heartbeatSidebarLayersPlaceholder}
              alt="The layers sidebar design, now with user profiles."
              sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
            />
            <Image
              reveal delay={300}
              className="heartbeat__sidebar-image"
              srcSet={`${heartbeatSidebarAnnotations} 300w, ${heartbeatSidebarAnnotationsLarge} 700w`}
              placeholder={heartbeatSidebarAnnotationsPlaceholder}
              alt="Multiple user annotations on a shared layer."
              sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
            />
          </div>
        </ProjectSectionColumns>
          <ProjectSectionContent>
            <ProjectSectionHeading>Glimpses of Application</ProjectSectionHeading>
            <div className = 'project-summary__content'>
              <Image
                srcSet={`${heartbeatSlide1} 800w, ${heartbeatSlideLarge1} 1440w`}
                placeholder={heartbeatSlidePlaceholder1}
                alt="image of heartbeat"
                sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
              />
              <Image
                srcSet={`${heartbeatSlide2} 800w, ${heartbeatSlideLarge2} 1440w`}
                placeholder={heartbeatSlidePlaceholder2}
                alt="image of heartbeat"
                sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
              />
              <Image
                srcSet={`${heartbeatSlide3} 800w, ${heartbeatSlideLarge3} 1440w`}
                placeholder={heartbeatSlidePlaceholder3}
                alt="image of heartbeat"
                sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
              />
              <Image
                srcSet={`${heartbeatSlide4} 800w, ${heartbeatSlideLarge4} 1440w`}
                placeholder={heartbeatSlidePlaceholder4}
                alt="image of heartbeat"
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

export default ProjectHeartbeat;
