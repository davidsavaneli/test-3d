import React, { memo } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export type ComponentProps = React.ComponentProps<'button'> & {
  label?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'text' | 'contained' | 'faded' | 'outlined' | 'dropdown';
  rounded?: boolean;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  color?: 'success' | 'error';
  noGutters?: boolean;
  badge?: boolean | number;
  loading?: boolean;
};

const Button = ({
  label,
  size = 'medium',
  variant = 'contained',
  rounded = false,
  iconPosition = 'left',
  fullWidth = false,
  color,
  noGutters = false,
  loading = false,
  badge = false,
  ...props
}: ComponentProps) => {
  return (
      <button
        className={clsx('f-bold', styles.button, {
          [styles.small]: size === 'small',
          [styles.medium]: size === 'medium',
          [styles.large]: size === 'large',
          [styles.contained]: variant === 'contained',
          [styles.outlined]: variant === 'outlined',
          [styles.faded]: variant === 'faded',
          [styles.text]: variant === 'text',
          [styles.dropdown]: variant === 'dropdown',
          [styles.colorSuccess]: color === 'success',
          [styles.colorError]: color === 'error',
          [styles.rounded]: rounded,
          [styles.loading]: loading,
          [styles.noGutters]: noGutters,
        })}
        {...props}
      >
        {/* {iconName && iconPosition === 'left' && (
          <div className={clsx(styles.icon, styles.iconLeft)}>
            <Icon name={iconName} size={size} noGutters />
          </div>
        )} */}
        {label && <div className={styles.label}>{label}</div>}
        {/* {iconName && iconPosition === 'right' && (
          <div className={clsx(styles.icon, styles.iconRight)}>
            <Icon name={iconName} size={size} noGutters />
          </div>
        )} */}
        {/* {variant === 'dropdown' && (
          <div className={clsx(styles.icon, styles.iconRight, styles.iconDropdown)}>
            <Icon name="MdKeyboardArrowDown" size={size} noGutters />
          </div>
        )} */}
        {badge && typeof badge === 'boolean' && <div className={styles.badge}></div>}
        {badge && typeof badge === 'number' && <div className={clsx(styles.badgeNumber, 'f-bold')}>{badge}</div>}
        {loading && <div className={styles.loaderBox}></div>}
      </button>
  );
};

export default memo<ComponentProps>(Button);