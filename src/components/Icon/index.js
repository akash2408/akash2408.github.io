import classNames from 'classnames';
import { ReactComponent as Github } from 'assets/icons/github.svg';
import { ReactComponent as Menu } from 'assets/icons/menu.svg';
import { ReactComponent as ArrowRight } from 'assets/icons/arrow-right.svg';
import { ReactComponent as ChevronRight } from 'assets/icons/chevron-right.svg';
import { ReactComponent as Close } from 'assets/icons/close.svg';
import { ReactComponent as Send } from 'assets/icons/send.svg';
import './index.css';

export const icons = {
  github: Github,
  menu: Menu,
  arrowRight: ArrowRight,
  chevronRight: ChevronRight,
  close: Close,
  send: Send,
};

const Icon = ({ icon, style, className, ...rest }) => {
  const IconComponent = icons[icon];

  return (
    <IconComponent aria-hidden className={classNames('icon', className)} {...rest} />
  );
};

export default Icon;
