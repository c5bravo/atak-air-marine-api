import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  RouterProvider,
} from "@tanstack/react-router";


import enLang from "./locales/en.json";
import fiLang from "./locales/fi.json";
import svLang from "./locales/sv.json";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const RootLayoutComponent = () => (
  <div className="max-w-5xl mx-auto p-6">
    <Outlet />
  </div>
);

const rootRoute = createRootRoute({
  component: RootLayoutComponent,
});



interface Props {
  data: {};
}

export const PRODUCT_SHORTNAME = "airmarine";

export default ({ data }: Props) => {

  const router = createRouter({ basepath: "/product/airmarine" });

  return (
<p>moro</p>
  );
};
