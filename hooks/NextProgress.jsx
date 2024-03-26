import { useEffect } from "react";
import NProgress from "nprogress";
import Router from "next/router";

const NextProgress = ({
  color = "blue",

  options,
}) => {
  const routeChangeStart = () => {
    NProgress.set(startPosition);
    NProgress.start();
  };

  const routeChangeEnd = () => {
    if (timer) clearTimeout(timer);
    const timer = setTimeout(() => {
      NProgress.done(true);
    }, stopDelayMs);
  };

  useEffect(() => {
    if (options) {
      NProgress.configure(options);
    }

    Router.events.on("routeChangeStart", routeChangeStart);
    Router.events.on("routeChangeComplete", routeChangeEnd);
    Router.events.on("routeChangeError", routeChangeEnd);

    return () => {
      Router.events.off("routeChangeStart", routeChangeStart);
      Router.events.off("routeChangeComplete", routeChangeEnd);
      Router.events.off("routeChangeError", routeChangeEnd);
    };
  }, []);
};

export default NextProgress;
