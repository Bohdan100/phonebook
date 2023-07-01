import { FC, useEffect, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { useTsDispatch, useTsSelector } from "./redux/reduxHooks";
import { refetch } from "./redux/authUser/authOperations";
import { getRefetchingUser } from "./redux/authUser/authSelectors";

import { Circles } from "react-loader-spinner";
import { Toaster } from "react-hot-toast";

import { PrivateRoute, PublicRoute } from "./components/Routes";

import Layout from "./components/Layout";
import RegisterPage from "./Pages/RegisterPage";

import imgWrap from "./images/background.jpg";
import { AppWrapper, SpinerWrapper } from "./App.styled";

const LoginPage = lazy(() => import("./Pages/LoginPage"));
const ContactsPage = lazy(() => import("./Pages/ContactsPage"));
const AddContact = lazy(() => import("./Pages/AddContact"));
const UpdateContact = lazy(() => import("./Pages/UpdateContact"));
const NotFoundPage = lazy(() => import("./Pages/NotFoundPage"));

const App: FC = () => {
  const dispatch = useTsDispatch();
  const isRefetchingUser = useTsSelector(getRefetchingUser);

  useEffect(() => {
    dispatch(refetch());
  }, [dispatch]);

  return isRefetchingUser ? (
    <SpinerWrapper>
      <Circles
        height="80"
        width="80"
        color="#713200"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </SpinerWrapper>
  ) : (
    <AppWrapper imgWrap={imgWrap}>
      <Suspense
        fallback={
          <SpinerWrapper>
            <Circles
              height="80"
              width="80"
              color="#713200"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </SpinerWrapper>
        }
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <PublicRoute component={RegisterPage} redirectTo="/contacts" />
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute component={LoginPage} redirectTo="/contacts" />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute component={ContactsPage} redirectTo="/login" />
              }
            />
            <Route
              path="/contacts/add"
              element={
                <PrivateRoute component={AddContact} redirectTo="/login" />
              }
            />
            <Route
              path="/contacts/update"
              element={
                <PrivateRoute component={UpdateContact} redirectTo="/login" />
              }
            />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            background: "#713200",
            color: "#ffffff",
          },
        }}
      />
    </AppWrapper>
  );
};

export default App;
