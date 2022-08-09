import React from 'react';
import { themeColors } from '../../utils/colors';
import * as styles from './LoadingSpinner.module.scss';

interface LoadingSpinnerProps {
  size?: 'xs' | 'sm' | 'lg';
  color?: string;
}

export const LoadingSpinner = ({
  size = 'lg',
  color = 'accent1',
}: LoadingSpinnerProps) => {
  return (
    <div
      className={`${styles.loadingSpinner}${
        size === 'xs'
          ? ` ${styles.loadingSpinnerXSmall}`
          : size === 'sm'
          ? ` ${styles.loadingSpinnerSmall}`
          : ''
      }`}
      style={{
        borderLeftColor: `rgba(${themeColors[color].rgb}, 0.3)`,
        borderRightColor: `rgba(${themeColors[color].rgb}, 0.3)`,
        borderBottomColor: `rgba(${themeColors[color].rgb}, 0.3)`,
        borderTopColor: themeColors[color].hex,
      }}
    ></div>
  );
};
