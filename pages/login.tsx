import React, { useEffect } from "react";
import { AuthRight } from "@/components/auth/authRight";
import LoginLeft from "@/components/login/loginLeft";
import Loader from "@/components/loader";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { signInWithGithub } from "@/api";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { signInWithGithubAsync } from "@/redux/api";
export default function Login() {

  const [isLoading, setLoading] = React.useState(true);

  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (router.query) {
      if (router.query?.auth === "github/callback" && router.query?.code && typeof router.query?.code === "string") {
        const { code } = router.query;
        const manageGihubAccessToken = async (code: string) => {
          try {
            const data = await dispatch(signInWithGithubAsync(code)).unwrap();
            if (data.status) {
              window.location.replace("/");
            }
          } catch (error) {
            const err = error as AxiosError<{ message: string }>;
            window.location.replace("/login");
            toast.error(err.response?.data?.message || "Something went wrong");
          }

        }
        manageGihubAccessToken(code);
      }
      else {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }

    return () => {
      setLoading(false);
    }
  }, []);

  return (
    <>
      {isLoading ? <Loader show={true} />
        :
        (
          <div className="auth-component">
            <LoginLeft />
            <AuthRight />
          </div>
        )
      }
    </>
  )
}
