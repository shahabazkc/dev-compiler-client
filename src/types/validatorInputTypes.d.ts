export type validatorInputTypes = string;
export type validatorOptionsTypes = {
    required?: boolean
    minLength?: number
    maxLength?: number
    pattern?: RegExp
    isEmail?: boolean
    onlyNumbers?: boolean
    onlyLetters?: boolean
    onlyLettersAndNumbers?: boolean
    onlyLettersAndNumbersAndSpaces?: boolean
    onlyLettersAndNumbersAndSpecialCharacters?: boolean
}

