// types/next-auth.d.ts
import "next-auth";

declare module "next-auth" {
  interface Session {
    error?: string;
    user?: User;
  }

  interface User {
    id: string;
    projects?: any;
    isOnboard: boolean;
  }
}

declare module "next-auth/jwt" {
  interface UserJwt {
    id: string;
    projects?: any;
    isOnboard?: boolean;
  }

  interface JWT {
    exp?: number;
    iat?: number;
    jti?: string;
    user?: UserJwt;
  }
}
