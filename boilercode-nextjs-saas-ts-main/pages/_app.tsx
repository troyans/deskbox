import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import LandingLayout from "@/components/landingPage/landingLayout";
import Script from "next/script";
import SEO from "@/components/additional/seo";
import { ThemeProvider } from "next-themes";
import GoogleAnalytics from "@/components/additional/googleAnalytics";
import { AppProps } from "next/app";
import { Session } from "next-auth";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <>
      <GoogleAnalytics />
      <SEO />
      <SessionProvider session={session}>
        <ThemeProvider attribute="class">
          <LandingLayout>
            <Component {...pageProps} />
          </LandingLayout>
        </ThemeProvider>
      </SessionProvider>
    </>
  );
}
