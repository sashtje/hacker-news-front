import { Link } from "react-router-dom";

import { getRouteMain } from "../../shared/const/router";

import cls from "./Header.module.css";

import { ReactComponent as LogoIcon } from "../../shared/assets/icons/logo.svg";

export const Header = () => {
  return (
    <header className={cls.header}>
      <Link to={getRouteMain()}>
        <LogoIcon width={60} />
      </Link>
      Hacker News
    </header>
  );
};
