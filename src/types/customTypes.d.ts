export type SignupDataTypes = {
    username: {
        value: string
        error: string
    }
    email: {
        value: string
        error: string
    }
    mobile: {
        value: string
        error: string
    }
    password: {
        value: string
        error: string
    }
}

export type LoginDataTypes = {
    username: {
        value: string
        error: string
    }
    password: {
        value: string
        error: string
    }
}

export interface SetSignupData {
    (value: React.SetStateAction<SignupDataTypes>): void;
}

export interface SetLoginData {
    (value: React.SetStateAction<LoginDataTypes>): void;
}
