import { useTsDispatch, useTsSelector } from "../../redux/reduxHooks";
import { getUserEmail } from "../../redux/authUser/authSelectors";
import { logOut } from "../../redux/authUser/authOperations";

import toast from "react-hot-toast";
import { succesStyle, errStyle } from "../../helpers";

import { ImEnter } from "react-icons/im";
import { LogoutButton, UserMenuWrap, UserEmail } from "./UserMenu.styled";

const UserMenu: React.FC = () => {
  const dispatch = useTsDispatch();
  const userEmail: string | null = useTsSelector(getUserEmail);

  return (
    <UserMenuWrap>
      <UserEmail>{userEmail}</UserEmail>
      <LogoutButton
        type="button"
        onClick={() =>
          dispatch(logOut())
            .unwrap()
            .then(() => {
              toast.success("Success logout", succesStyle);
            })
            .catch(() =>
              toast.error(
                "An error occurred while logout, please try again",
                errStyle
              )
            )
        }
      >
        <ImEnter />
      </LogoutButton>
    </UserMenuWrap>
  );
};

export default UserMenu;
