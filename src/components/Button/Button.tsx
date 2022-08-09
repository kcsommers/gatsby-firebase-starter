import * as React from 'react';
import { useEffect, useRef } from 'react';
import { ColorTypes } from '../../utils';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';
import * as styles from './Button.module.scss';

type ButtonProps = {
  text: string;
  size?: 'lg' | 'md' | 'sm';
  isFullWidth?: boolean;
  showSpinner?: boolean;
  isDisabled?: boolean;
  isAsync?: boolean;
  type?: ColorTypes;
  onClick?: () => void | Promise<any>;
};

export const Button = ({
  text,
  isFullWidth = true,
  size = 'md',
  type = 'accent1',
  isDisabled = false,
  isAsync = false,
  onClick,
}: ButtonProps) => {
  const buttonEl = useRef<HTMLButtonElement>();
  const [showSpinner, setShowSpinner] = React.useState(false);

  const clicked = async (event: React.MouseEvent) => {
    event.preventDefault();
    if (!onClick || !buttonEl.current || showSpinner) {
      return;
    }

    buttonEl.current.blur();
    if (!isAsync) {
      onClick();
      return;
    }
    setShowSpinner(true);
    await onClick();
    setShowSpinner(false);
  };

  useEffect(() => {
    if (!buttonEl.current || isFullWidth) {
      return;
    }

    const _btnWidth = buttonEl.current.getBoundingClientRect().width;
    buttonEl.current.style.minWidth = `${_btnWidth}px`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [buttonEl]);

  return (
    <button
      className={`app-btn ${styles.btn} ${styles[`btn_${size}`]} ${[
        `${styles[`btn_${type}`]}`,
      ]} ${isFullWidth ? styles.btn_full_width : ''}${
        isDisabled ? ' disabled' : ''
      }`}
      onClick={clicked}
      ref={(el: HTMLButtonElement) => (buttonEl.current = el)}
    >
      {showSpinner ? <LoadingSpinner size='xs' /> : text}
    </button>
  );
};
