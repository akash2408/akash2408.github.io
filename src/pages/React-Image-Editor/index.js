import { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Image from 'components/Image';
import { useScrollRestore } from 'hooks';
import editor from 'assets/editor.mp4';
import classNames from 'classnames';
import Footer from 'components/Footer';
import {
  ProjectContainer,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectBackground,
  ProjectHeader,
} from 'components/ProjectLayout';
import editorBackground from 'assets/editor-background.jpg';
import editorBackgroundLarge from 'assets/editor-background.jpg';
import editorBackgroundPlaceholder from 'assets/placeholder.jpg';
import editorSlide1 from 'assets/editor-slide-1.PNG';
import editorSlideLarge1 from 'assets/editor-slide-1.PNG';
import editorSlidePlaceholder1 from 'assets/placeholder.jpg';
import editorSlide2 from 'assets/editor-slide-2.PNG';
import editorSlideLarge2 from 'assets/editor-slide-2.PNG';
import editorSlidePlaceholder2 from 'assets/placeholder.jpg';
import editorSlide3 from 'assets/editor-slide-3.PNG';
import editorSlideLarge3 from 'assets/editor-slide-3.PNG';
import editorSlidePlaceholder3 from 'assets/placeholder.jpg';
import editorSlide4 from 'assets/editor-slide-4.PNG';
import editorSlideLarge4 from 'assets/editor-slide-4.PNG';
import editorSlidePlaceholder4 from 'assets/placeholder.jpg';
import prerender from 'utils/prerender';
import { media } from 'utils/style';
import './index.css';

const title = 'React-Image-Editor';
const description =
  'This project involved creating an react library which is easy to established in any object. It provides crop, add text , draw etc features.';
const roles = ['Fabric.js', 'npm', 'React'];

const ProjectEditor = () => {
  useScrollRestore();

  return (
    <Fragment>
      <Helmet>
        <title>{`Projects | ${title}`}</title>
        <meta name="description" content={description} />
      </Helmet>
      <ProjectContainer className="editor">
        <ProjectBackground
          srcSet={`${editorBackground} 1280w, ${editorBackgroundLarge} 2560w`}
          placeholder={editorBackgroundPlaceholder}
          opacity={0.8}
          entered={!prerender}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://www.npmjs.com/package/canvas-image-editor"
          roles={roles}
        />
        <ProjectSection first>
        <div
            className={classNames(
              'editor-page_video-container',
            )} >
          <video
            autoPlay
            muted
            loop
            playsInline
            className={classNames('editor-page_video')}
          >
            <source src={editor } type="video/mp4" />
          </video>
        </div>
          <ProjectSectionContent>
            <ProjectSectionHeading>Glimpses of Website</ProjectSectionHeading>
            <div className = 'laptop-project-summary__content'>
            <Image
              srcSet={`${editorSlide1} 800w, ${editorSlideLarge1} 1440w`}
              placeholder={editorSlidePlaceholder1}
              alt="image of editor"
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
            <Image
              srcSet={`${editorSlide2} 800w, ${editorSlideLarge2} 1440w`}
              placeholder={editorSlidePlaceholder2}
              alt="image of editor"
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
            <Image
              srcSet={`${editorSlide3} 800w, ${editorSlideLarge3} 1440w`}
              placeholder={editorSlidePlaceholder3}
              alt="image of editor"
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
            <Image
              srcSet={`${editorSlide4} 800w, ${editorSlideLarge4} 1440w`}
              placeholder={editorSlidePlaceholder4}
              alt="image of editor"
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

export default ProjectEditor;
