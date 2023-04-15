import React, { ReactNode, useEffect } from "react";
import Header from "../header";
import { checkRoute } from "@/utils/checkRoute";
import { useRouter } from "next/router";

export default function Layout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [isMounted, setIsMounted] = React.useState(false);
  const [allowRoute, setAllowRoute] = React.useState(false);
  const [isAuth] = React.useState(false);

  useEffect(() => {
    if ((checkRoute(router.pathname)).auth == "private") {
      setAllowRoute(isAuth);
    }
    else {
      if (!isAuth) {
        setAllowRoute(true);
      }
      else {
        setAllowRoute(false);
      }
    }
    setIsMounted(true);
    return () => {
      setIsMounted(false);
      setAllowRoute(isAuth);
    };
  }, [router.pathname]);

  useEffect(() => {
    if (isMounted && !allowRoute) {
      const path = checkRoute(router.pathname).redirect;
      router.push(path);
    }
  }, [isMounted]);

  return (
    <div>
      <Header />
      {
        (isMounted && allowRoute) && (
          <>
            {children}
          </>
        )
      }
    </div>
  );
}