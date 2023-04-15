import { LoginDataTypes, SetLoginData, SetSignupData, SignupDataTypes } from "@/types/customTypes";
import { validateInput } from "./validator";

export const validateSignupForm = (signupData: SignupDataTypes, setSignupData: SetSignupData) => {
    let isValid = true;
    const isValidUsername = validateInput(
        signupData.username.value,
        {
            required: true,
            minLength: 4,
            maxLength: 12,
            onlyLettersAndNumbers: true
        }
    );
    const updatedSignupData: SignupDataTypes = { ...signupData };
    if (typeof isValidUsername === "string" && isValidUsername.length > 0) {
        updatedSignupData.username = { value: signupData.username.value, error: isValidUsername };
        isValid = false;
    }
    const isValidEmail = validateInput(
        signupData.email.value,
        {
            required: true,
            isEmail: true,
        }
    );
    if (typeof isValidEmail === "string" && isValidEmail.length > 0) {
        updatedSignupData.email = { value: signupData.email.value, error: isValidEmail };
        isValid = false;
    }
    const isValidMobile = validateInput(
        signupData.mobile.value,
        {
            required: true,
            onlyNumbers: true,
            minLength: 10,
            maxLength: 10
        }
    );
    if (typeof isValidMobile === "string" && isValidMobile.length > 0) {
        updatedSignupData.mobile = { value: signupData.mobile.value, error: isValidMobile };
        isValid = false;
    }
    const isValidPassword = validateInput(
        signupData.password.value,
        {
            required: true,
            minLength: 6,
            maxLength: 16,
            onlyLettersAndNumbersAndSpecialCharacters: true
        }
    );
    if (typeof isValidPassword === "string" && isValidPassword.length > 0) {
        updatedSignupData.password = { value: signupData.password.value, error: isValidPassword };
        isValid = false;
    }

    setSignupData(updatedSignupData);

    return isValid;
};

export const validateLoginForm = (loginData: LoginDataTypes, setLoginData: SetLoginData) => {
    let isValid = true;
    const updatedLoginData: LoginDataTypes = { ...loginData };

    const isValidUsername = validateInput(
        loginData.username.value,
        {
            required: true,
            minLength: 4,
            maxLength: 12,
            onlyLettersAndNumbers: true
        }
    );

    if (typeof isValidUsername === "string" && isValidUsername.length > 0) {
        const isValidEmail = validateInput(
            loginData.username.value,
            {
                required: true,
                isEmail: true,
            }
        );
        if (typeof isValidEmail === "string" && isValidEmail.length > 0) {
            updatedLoginData.username = { value: loginData.username.value, error: isValidUsername };
            isValid = false;
        }
    }

    const isValidPassword = validateInput(
        loginData.password.value,
        {
            required: true,
            minLength: 6,
            maxLength: 16,
            onlyLettersAndNumbersAndSpecialCharacters: true
        }
    );

    if (typeof isValidPassword === "string" && isValidPassword.length > 0) {
        updatedLoginData.password = { value: loginData.password.value, error: isValidPassword };
        isValid = false;
    }

    setLoginData(updatedLoginData);

    return isValid;
}