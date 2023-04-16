import React, { useEffect } from "react";
import { AuthRight } from "@/components/auth/authRight";
import LoginLeft from "@/components/login/loginLeft";
import Loader from "@/components/loader";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { signInWithGithub } from "@/api";
import { useRouter } from "next/router";
export default function Login() {

  const [isLoading, setLoading] = React.useState(true);

  const router = useRouter()

  useEffect(() => {
    if (router.query) {
      if (router.query?.auth === "github/callback" && router.query?.code && typeof router.query?.code === "string") {
        const { code } = router.query;
        const manageGihubAccessToken = async (code: string) => {
          try {
            const { data } = await signInWithGithub(code as string);
            if (data.status) {
              toast.success('User logged in successfully',
                {
                  position: "top-center",
                  autoClose: 500,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                }
              );
              window.location.replace("/");
            }
          } catch (error) {
            const err = error as AxiosError<{ message: string }>;
            toast.error(err.response?.data?.message || "Something went wrong");
            window.location.replace("/login");
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
