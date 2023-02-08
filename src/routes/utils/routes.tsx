import { lazy } from "react";

const Home = lazy(() => import("../../pages/Home"));
const PurchaseCompleted = lazy(() => import("../../pages/PurchaseCompleted"));
const ShoppingCart = lazy(() => import("../../pages/ShoppingCart"));

type RouteType = {
  path: string;
  name?: string;
  Component: JSX.Element;
};

export const routes: RouteType[] = [
  {
    path: ``,
    name: "Home",
    Component: <Home />,
  },
  {
    path: `/shopping-cart`,
    name: "Shopping Cart",
    Component: <ShoppingCart />,
  },
  {
    path: `/purchase-completed`,
    name: "Purchase Completed",
    Component: <PurchaseCompleted />,
  },
];
