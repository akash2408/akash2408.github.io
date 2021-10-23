import classNames from 'classnames';
import { Transition } from 'react-transition-group';
import DecoderText from 'components/DecoderText';
import Divider from 'components/Divider';
import prerender from 'utils/prerender';
import Section from 'components/Section';
import { reflow } from 'utils/transition';
import Heading from 'components/Heading';
import Text from 'components/Text';
import {numToMs } from 'utils/style';
import './Skill.css';

const Skill = ({ id, visible, sectionRef }) => {
  const initDelay = 600;
  const titleId = `${id}-title`;
  const roles = ['Languages:  Python, Nodejs, HTML, CSS, JavaScript, C++, Dart, Kotlin',
  'Frameworks: Flask, React.js, Ember.js, Express.js',
  'OS: Windows, Linux',
  'Software: Android Studio, Sublime',
  'Database: MySQL, MongoDB'
  ];
  return (
    <Section
      className="skill"
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible} timeout={0} onEnter={reflow}>
        {status => (
          <div className="skill__content">
            <div className="skill__column">
              <div className="skill__tag" aria-hidden>
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
                  Skills
                </div>
              </div>
              <div className="skill-wrapper">
                {!!roles?.length && (
                  <ul className="project__meta">
                  <Heading
                    className={classNames('skill__title', `skill__title--${status}`)}
                    level={3}
                    id={titleId}
                  >
                    <DecoderText text="Technical Skills" start={status !== 'exited'} delay={500} />
                  </Heading>
                    {roles?.map((role, index) => (
                      <li
                        className={classNames('project__meta-item', {
                          'project__meta-item--entered': !prerender,
                        })}
                        style={{ '--delay': numToMs(initDelay + 300 + index * 140) }}
                        key={role}
                      >
                        <Text secondary as="span">
                          {role}
                        </Text>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};

export default Skill;
