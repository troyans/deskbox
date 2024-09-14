import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import LandingLayout from "@/components/landingPage/landingLayout";
import SEO from "@/components/additional/seo";
import { ThemeProvider } from "next-themes";
import GoogleAnalytics from "@/components/additional/googleAnalytics";
import { AppProps } from "next/app";
import { Session } from "next-auth";
import { GoogleTagManager } from "@next/third-parties/google";
import { useEffect } from "react";
import { gtmPageView } from "@/lib/gtm";
import { TooltipProvider } from "@/components/ui/Tooltip";
import { Toaster } from "@/components/ui/Toast/toaster";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { useRouter } from "next/router";

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host:
      process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
    person_profiles: "identified_only",
    // Enable debug mode in development
    loaded: (posthog) => {
      if (process.env.NODE_ENV === "development") posthog.debug();
    },
  });
}

export default function App({
      Component,
      pageProps: { session, ...pageProps },
    }) {
  const router = useRouter();

  useEffect(() => {
    // Track page views
    const handleRouteChange = () => posthog?.capture("$pageview");
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  useEffect(() => {
    const props = {
      page_title: pageProps.slug || null,
    };

    gtmPageView(props);
  }, [pageProps]);

  return (
    <>
      <PostHogProvider client={posthog}>
        <GoogleAnalytics />
        <SEO />
        <SessionProvider session={session}>
          <ThemeProvider attribute="class" forcedTheme="light">
            <LandingLayout>
              <TooltipProvider>
                <Component {...pageProps} />
                <GoogleTagManager gtmId={process.env.GTM_ID} />
                <Toaster />
              </TooltipProvider>
            </LandingLayout>
          </ThemeProvider>
        </SessionProvider>
      </PostHogProvider>
    </>
  );
}
