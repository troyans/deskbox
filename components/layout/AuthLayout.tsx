import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const AuthLayout = ({ children }) => {
  const { status, data } = useSession();
  const router = useRouter();

  useEffect(() => {
    console.log(data);
    if (status === "authenticated") {
      if (data.user.projects.length !== 0) {
        router.push(`/project/${data.user.projects[0].id}/inbox`);
      } else {
        router.push("/project/create");
      }
      // router.push("/dashboard");
    }
  }, [status]);

  return <>{children}</>;
};

export default AuthLayout;
