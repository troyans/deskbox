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


export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session; slug: string }>) {
  useEffect(() => {
    const props = {
      page_title: pageProps.slug || null,
    };

    gtmPageView(props);
  }, [pageProps]);

  return (
    <>
      
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
    </>
  );
}
