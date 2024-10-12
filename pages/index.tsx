import { useTheme } from "next-themes";

import LandingFeature from "@/components/landingPage/landingFeature";
import LandingHowTo from "@/components/landingPage/landingHowTo";
import LandingHero from "@/components/landingPage/landingHero";
import LandingCta from "@/components/landingPage/landingCta";
import AuthLayout from "@/components/layout/AuthLayout";
import LandingFaq from "@/components/landingPage/landingFaq";
import LandingWhy from "@/components/landingPage/landingWhy";

export default function Home(props) {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  setTheme("system");

  return (
    <AuthLayout>
      <LandingHero />

      <LandingFeature />

      <LandingWhy />

      <LandingHowTo />

      <LandingCta />
    </AuthLayout>
  );
}
