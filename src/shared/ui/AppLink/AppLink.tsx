import { ReactNode, memo } from "react";
import { Link, LinkProps } from "react-router-dom";

import { classNames, Mods } from "shared/lib/classnames";
import { ReactComponent as ExternalLinkIcon } from "shared/assets/icons/external-link.svg";

import cls from "./AppLink.module.css";

type AppLinkVariant = "default" | "icon";

interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkVariant;
  children?: ReactNode;
  external?: boolean;
}

export const AppLink = memo((props: AppLinkProps) => {
  const {
    className,
    children,
    variant = "default",
    external = false,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.external]: external,
  };

  return (
    <Link
      className={classNames(cls.link, mods, [className, cls[variant]])}
      target={external ? "_blank" : "_self"}
      {...otherProps}
    >
      {children}

      {external && <ExternalLinkIcon width={30} />}
    </Link>
  );
});

AppLink.displayName = "AppLink";
