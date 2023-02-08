import LoadingPage from "../pages/LoadingPage";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./utils/routes";

const Router = (): JSX.Element => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        {routes.map(({ path, Component }, key) => (
          <Route path={path} key={key} element={Component} />
        ))}
      </Routes>
    </Suspense>
  );
};
export default Router;
