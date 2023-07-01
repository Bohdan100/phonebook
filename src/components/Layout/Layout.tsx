import { FC } from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";
import { CardWrap, Card } from "./Layout.styled";

const Layout: FC = () => {
  return (
    <>
      <Header />
      <CardWrap>
        <Card>
          <Outlet />
        </Card>
      </CardWrap>
      <Footer />
    </>
  );
};

export default Layout;
