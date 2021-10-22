import classNames from 'classnames';
import { useId } from 'hooks';
import './index.css';

function Monogram({ highlight, className, ...props }) {
  const id = useId();
  const clipId = `monogram-clip-${id}`;

  return (
    <svg
      aria-hidden
      className={classNames('monogram', className)}
      width="46"
      height="29"
      viewBox="0 0 46 29"
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <path d="M 23 20 L 20 16 L 23 0 L 3 29 z z L 43 29 L 23 0 L 26 16" />
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className="monogram__highlight" width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
}

export default Monogram;
