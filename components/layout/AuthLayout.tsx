import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const AuthLayout = ({ children }) => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status]);

  return <>{children}</>;
};

export default AuthLayout;
