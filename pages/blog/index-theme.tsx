import { useTheme } from "next-themes";

import BlogFeatured from "@/components/blog/blogFeatured"
import BlogLatest from "@/components/blog/blogLatest"
import LandingFooter from "@/components/landingPage/landingFooter";
import AuthLayout from "@/components/layout/AuthLayout";
import BlogPagination from "@/components/blog/blogPagination";
import BlogHeader from "@/components/blog/blogheader";


export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  setTheme("system");

  return (
    <AuthLayout>
    
        <BlogHeader/> 
    
        <BlogFeatured />

        <BlogLatest />
      
        <BlogPagination />

        <LandingFooter />
        
    </AuthLayout>
  );
}
