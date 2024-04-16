import { ButtonHTMLAttributes, ReactNode, memo } from "react";

import { classNames } from "../../lib/classnames";

import cls from "./Button.module.css";

type VariantType = "icon";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant: VariantType;
  children: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const { className, variant, children, ...otherProps } = props;

  return (
    <button
      className={classNames(cls.button, {}, [className, cls[variant]])}
      type="button"
      {...otherProps}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";
