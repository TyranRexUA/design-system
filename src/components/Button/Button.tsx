import React, { FC, memo } from 'react';
import { IButtonProps } from './interfaces/IButton';
import { cn } from '../../utils/general';
import { useTheme } from '../../utils/customHooks';
import styles from './sass/Button.module.scss';

const Button: FC<IButtonProps> = ({
  label, isDisabled = false, onPress, customClass, themeName,
}) => {
  const theme = useTheme(themeName);

  return (
    <button
      className={cn(
        styles.button,
        styles[theme],
        customClass,
      )}
      onClick={onPress}
      disabled={isDisabled}
      type="button"
    >
      <span>
        {label}
      </span>
    </button>
  );
};

export default memo(Button);
