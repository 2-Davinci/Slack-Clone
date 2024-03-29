import { Avatar } from "@mui/material";
import React from "react";
import styled from "styled-components";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar alt={user?.displayName} src={user.photoURL} />
        <AccessTimeIcon />
      </HeaderLeft>

      <HeaderSearch>
        <SearchIcon className="search" />
        <input placeholder="Search Davinci" />
      </HeaderSearch>

      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--slack-color);
  color: white;
  z-index: 999;
  @media (max-width: 473px) {
    display: block;
  }
`;

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`;

const HeaderSearch = styled.div`
  display: flex;
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;

  display: flex;
  padding: 0 50px;
  color: gray;
  border: 1px gray solid;

  @media (max-width: 470px) {
    margin-top: 10px;
    .MuiSvgIcon {
      display: none;
    }
  }
  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    width: 80%;
    outline: none;
    color: white;
    font-size: 16px;
  }
`;

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
