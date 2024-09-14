import { toast } from "@/components/ui/Toast/use-toast";
import axios from "axios";
import { Session } from "next-auth";
import { getSession, signOut } from "next-auth/react";

export let currentSession: Session | null = null;

const WebRequest = () => {
  const instance = axios.create({
    baseURL: "/",
  });

  instance.interceptors.request.use(
    async (request) => {
      if (
        currentSession == null ||
        Date.now() > Date.parse(currentSession.expires)
      ) {
        const session = await getSession();
        currentSession = session;
      }

      if (currentSession) {
        request.headers.Authorization = `Bearer ${currentSession.user.id}`;
      } else {
        delete request.headers.Authorization;
      }

      return request;
    },
    (error) => {
      console.error(`API Error: `, error);
      throw error;
    }
  );

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 401) {
        toast({
          variant: "destructive",
          title: "Unauthorized",
          description: "You are not authorized to access this resource",
        });
        signOut({ redirect: true, callbackUrl: "/login" });
      }
      if (error.response && error.response.data) {
        error.message = error.response.data.message;
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

export const webRequest = WebRequest();
