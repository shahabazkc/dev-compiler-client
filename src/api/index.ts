import axios from "axios";

export const AuthServiceBaseURL = "http://localhost:3001/api/auth";

const authApi = axios.create({
    baseURL: AuthServiceBaseURL,
    withCredentials: true
});


export const createUserForm = async (signupData: { [key: string]: string }) => await authApi.post("/v1/signup", signupData);
export const loginUserForm = async (loginData: { [key: string]: string }) => await authApi.post("/v1/login", loginData);
export const verifyAuth = async () => await authApi.get("/v1/verify-auth");
export const logoutUser = async () => await authApi.post("/v1/logout");
export const signInWithGithub = async (code: string) => await authApi.post(`/v1/signInWithGithub`, { code });

