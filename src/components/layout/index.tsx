import React, { ReactNode, useEffect } from "react";
import Header from "../header";
import { checkRoute } from "@/utils/checkRoute";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import useFindUser from "@/hooks/useFindUser";
import Loader from "../loader";
import usePages from "@/hooks/usePages";

export default function Layout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [isMounted, setIsMounted] = React.useState(false);
  const [allowRoute, setAllowRoute] = React.useState(false);
  const [isAuth, setAuth] = React.useState<boolean | null>(null);
  usePages();
  const { user, isLoading } = useFindUser();

  useEffect(() => {

    if (!isLoading) {
      if (user) {
        setAuth(true);
      }
      else if (user == null) {
        setAuth(false);
      }
      else {
        setAuth(null);
      }
    }

  }, [isLoading]);

  useEffect(() => {
    if (!isLoading) {
      let isAllowedRoute = false;
      if ((checkRoute(router.pathname)).auth == "private") {
        isAllowedRoute = isAuth ? true : false;
      }
      else {
        if (!isAuth) {
          isAllowedRoute = true;
        }
        else {
          isAllowedRoute = false;
        }
      }

      if (!isAllowedRoute) {
        const path = checkRoute(router.pathname).redirect;
        router.push(path);
        setIsMounted(false);
      }
      else {
        setIsMounted(true);
        setAllowRoute(true)
      }
    }
  }, [router.pathname, isAuth]);

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {
        (isMounted && allowRoute && !isLoading) ? (
          <>
            <Header />
            {children}
          </>
        ) :
          (<Loader show={true} />)
      }

    </div>
  );
}