import { FC } from "react";
import { useTsSelector } from "../../redux/reduxHooks";
import { getUserIsLoggedIn } from "../../redux/authUser/authSelectors";
import { Navigate } from "react-router-dom";

type PrivateRouteProps = {
  component: React.ComponentType<any>;
  redirectTo?: string;
};

export const PublicRoute: FC<PrivateRouteProps> = ({
  component: Component,
  redirectTo = "/",
}) => {
  const isLoggedIn: boolean = useTsSelector(getUserIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};
