import React from "react";
import RouterLink from "../../atoms/RouterLink/RouterLink";
import IconButton from "../../molecules/IconButton/IconButton";
import Icon from "../../atoms/Icon/Icon";

import LogoIcon from "../../../../assets/logo.png";
import SearchBlackIcon from "../../../../assets/search_black.svg";
import SendIcon from "../../../../assets/send_white.svg";
import NotificationBlackIcon from "../../../../assets/notification_black.svg";
import ProfileBlackIcon from "../../../../assets/profile_black.svg";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-container__inner-container">
        <img className="header-container__logo" src={LogoIcon} alt="logoIcon" />
        <RouterLink linkClassName="header-container__link">
          Dashboard
        </RouterLink>
        <RouterLink linkClassName="header-container__link">
          My investments
        </RouterLink>
        <RouterLink linkClassName="header-container__link">
          Documents
        </RouterLink>
        <RouterLink linkClassName="header-container__link">
          Offerings
        </RouterLink>
      </div>
      <div className="header-container__inner-container">
        <IconButton iconSrc={SendIcon}>Send Request</IconButton>
        <Icon src={SearchBlackIcon} iconClassName="header-container__icon" />
        <Icon
          src={NotificationBlackIcon}
          iconClassName="header-container__icon"
        />
        <Icon
          src={ProfileBlackIcon}
          iconClassName="header-container__profile_icon"
        />
      </div>
    </div>
  );
};

export default Header;
