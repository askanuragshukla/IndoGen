import React from "react";

import {
  SidebarContainer,
  SidebarWrapper,
  SideBtnWrap,
  SidebarRoute,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink
} from "./SidebarElements";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="member" onClick={toggle}>
            सदस्य बने
          </SidebarLink>
          <SidebarLink to="blog" onClick={toggle}>
            पाठशाला
          </SidebarLink>
          <SidebarLink to="buy" onClick={toggle}>
            फ़ीड खरीदें
          </SidebarLink>
          <SidebarLink to="sell" onClick={toggle}>
            उत्पाद विक्रय
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SideBar;
