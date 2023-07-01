import { FC } from "react";
import { useTsSelector } from "../../redux/reduxHooks";
import { getUserIsLoggedIn } from "../../redux/authUser/authSelectors";

import UserMenu from "../UserMenu";
import { HeaderWrap, HeaderMenu, HeaderTitle } from "./Header.styled";

const Header: FC = () => {
  const isLoggedIn: boolean = useTsSelector(getUserIsLoggedIn);

  return (
    <HeaderWrap>
      <HeaderMenu>
        <HeaderTitle>Phonebook</HeaderTitle>
        {isLoggedIn && <UserMenu />}
      </HeaderMenu>
    </HeaderWrap>
  );
};

export default Header;
