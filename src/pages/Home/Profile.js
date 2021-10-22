import { Fragment } from 'react';
import classNames from 'classnames';
import { Transition } from 'react-transition-group';
import Link from 'components/Link';
import { Button } from 'components/Button';
import DecoderText from 'components/DecoderText';
import Divider from 'components/Divider';
import Image from 'components/Image';
import Section from 'components/Section';
import ProfileImg from 'assets/profile.jpg';
import ProfileImgPlaceholder from 'assets/profile-placeholder.jpg';
import { reflow } from 'utils/transition';
import { media } from 'utils/style';
import Heading from 'components/Heading';
import Text from 'components/Text';
import './Profile.css';

const ProfileText = ({ status, titleId }) => (
  <Fragment>
    <Heading
      className={classNames('profile__title', `profile__title--${status}`)}
      level={3}
      id={titleId}
    >
      <DecoderText text="Hi there" start={status !== 'exited'} delay={500} />
    </Heading>
    <Text
      className={classNames('profile__description', `profile__description--${status}`)}
      size="l"
    >
      I am Akash deep from the Indian Institute of Information Technology,
      Nagpur, India pursuing Computer Science and Engineering. I am interested
      in Open Source Software development, competitive coding. Apart from this,
      I have some good designing skills. In past, I have worked on many projects
      which were enlightening learning experiences for me.
    </Text>
    <Text
      className={classNames('profile__description', `profile__description--${status}`)}
      size="l"
    >
      In my spare time I am also contributing
      to the open-source community so that I can give back to the organizations
      whose products have been valuable assets to me.
    </Text>
  </Fragment>
);

const Profile = ({ id, visible, sectionRef }) => {
  const titleId = `${id}-title`;

  return (
    <Section
      className="profile"
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible} timeout={0} onEnter={reflow}>
        {status => (
          <div className="profile__content">
            <div className="profile__column">
              <ProfileText status={status} titleId={titleId} />
              <Button
                secondary
                className={classNames('profile__button', `profile__button--${status}`)}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className="profile__column">
              <div className="profile__tag" aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={status !== 'entered'}
                  collapseDelay={1000}
                />
                <div
                  className={classNames(
                    'profile__tag-text',
                    `profile__tag-text--${status}`
                  )}
                >
                  About Me
                </div>
              </div>
              <div className="profile__image-wrapper">
                <Image
                  reveal
                  delay={100}
                  placeholder={ProfileImgPlaceholder}
                  srcSet={`${ProfileImg} 480w`}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me"
                />
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};

export default Profile;
