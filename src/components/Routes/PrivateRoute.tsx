import { FC } from "react";
import { useTsSelector } from "../../redux/reduxHooks";
import {
  getUserIsLoggedIn,
  getRefetchingUser,
} from "../../redux/authUser/authSelectors";
import { Navigate } from "react-router-dom";

type PrivateRouteProps = {
  component: React.ComponentType<any>;
  redirectTo?: string;
};

export const PrivateRoute: FC<PrivateRouteProps> = ({
  component: Component,
  redirectTo = "/",
}) => {
  const isLoggedIn: boolean = useTsSelector(getUserIsLoggedIn);
  const isRefetchingUser: boolean = useTsSelector(getRefetchingUser);

  const shouldRedirect: boolean = !isRefetchingUser && !isLoggedIn;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};
