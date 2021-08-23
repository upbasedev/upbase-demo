import { useEffect, useState } from "react";

import Footer from "./Footer";
import Head from "next/head";
import Header from "./Header";
import NProgress from "nprogress";
import Router from "next/router";
import { capitalize } from "lib";
import { useAppState } from "components/AppProvider";
import { useRouter } from "next/router";

const NonDashboardRoutes = [
  "/signin",
  "/_error",
  "/404"
];


const Page = ({ children }) => {
  const [state] = useAppState();
  const [open, setOpened] = useState(true);
  const { pathname, asPath } = useRouter();

  useEffect(() => {
    setOpened(state.mobile ? false : true);
  }, [state.mobile]);

  const onSetOpen = (open) => {
    setOpened(open);
  };

  const toggleOpen = (ev) => {
    setOpened(!open);

    if (ev) {
      ev.preventDefault();
    }
  };

  Router.onRouteChangeStart = () => {
    NProgress.start();
  };
  Router.onRouteChangeComplete = () => {
    if (state.mobile) setOpened(false);
    NProgress.done();
    document.querySelector("body").scrollTop = 0;
  };
  Router.onRouteChangeError = () => {
    NProgress.done();
  };

  const isNotDashboard = NonDashboardRoutes.includes(pathname);

  const pageName = asPath.split("/").reverse()[0];

  return (
    <>
      <Head>
        <title>
          {pageName ? capitalize(pageName) : "Home"} | Upbase Demo
        </title>
      </Head>

      <div
        className={`antialiased font-sans text-sm text-gray-900 dark:text-white flex flex-col w-full h-full min-h-screen bg-body dark:bg-gray-700 z-0 ${
          state.collapsed && "page-sidebar-collapsed"
        } `}
        dir={state.rtl ? "rtl" : "ltr"}
      >
        {!isNotDashboard ? (
          <>
            <div
                className={`w-full flex-1 relative pt-4 pr-4 pl-4 mx-auto ${
                  pathname === "/messages" ? "p-0" : ""
                }`}
              >
                {children}
              </div>
              <Footer />
          </>
        ) : (
          children
        )}
      </div>
    </>
  );
};

export default Page;
