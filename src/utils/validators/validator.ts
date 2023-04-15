import { validatorInputTypes, validatorOptionsTypes } from "@/types/validatorInputTypes";

export const validateInput = (value: validatorInputTypes, options: validatorOptionsTypes): string | boolean => {
    const {
        required = false,
        minLength = 0,
        maxLength = null,
        pattern = null,
        isEmail = false,
        onlyNumbers = false,
        onlyLetters = false,
        onlyLettersAndNumbers = false,
        onlyLettersAndNumbersAndSpaces = false,
        onlyLettersAndNumbersAndSpecialCharacters = false,
        onlyLettersAndSpaces = false
    } = options;

    // Check for required fields
    if (required && !value) {
        return "This field is required.";
    }

    // Check for minimum length
    if (minLength && value.length < minLength) {
        return `This field must be at least ${minLength} characters long.`;
    }

    // Check for maximum length
    if (maxLength && value.length > maxLength) {
        return `This field must be no more than ${maxLength} characters long.`;
    }

    // Check for pattern matching
    if (pattern && !pattern.test(value)) {
        return "This field contains invalid characters.";
    }

    // Check for email
    if (isEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        return "This field must be a valid email address.";
    }

    // Check for only numbers
    if (onlyNumbers && !/^[0-9]+$/.test(value)) {
        return "This field must contain only numbers.";
    }

    // Check for only letters
    if (onlyLetters && !/^[a-zA-Z]+$/.test(value)) {
        return "This field must contain only letters.";
    }

    // Check for only letters and numbers
    if (onlyLettersAndNumbers && !/^[a-zA-Z0-9]+$/.test(value)) {
        return "This field must contain only letters and numbers.";
    }

    // Check for only letters, numbers, and spaces
    if (onlyLettersAndNumbersAndSpaces && !/^[a-zA-Z0-9 ]+$/.test(value)) {
        return "This field must contain only letters, numbers, and spaces.";
    }

    // Check for only letters, numbers, and special characters
    if (onlyLettersAndNumbersAndSpecialCharacters && !RegExp(/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/).test(value)) {
        return "This field must contain only letters, numbers, and special characters.";
    }

    // Check for only letters and spaces
    if (onlyLettersAndSpaces && !/^[a-zA-Z ]+$/.test(value)) {
        return "This field must contain only letters and spaces.";
    }

    // If no errors are found, return true
    return true;
};