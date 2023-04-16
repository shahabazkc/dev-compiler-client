import { logoutUserAsync } from "@/redux/api"
import { AppDispatch } from "@/redux/store"
import { Button } from "@mui/material"
import { NextPage } from "next"
import React from "react"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"

const Page: NextPage = () => {


  const dispatch = useDispatch<AppDispatch>()
  const handleLogout = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    try {
      const data = await dispatch(logoutUserAsync()).unwrap();
      if (data.status) {
        window.location.replace("/login");
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error.message || "Something went wrong");
    }
  }
  return (
    <>
      <Button classes="bg-dark" onClick={(e) => handleLogout(e)}>Log out</Button>
    </>
  )
}

export default Page