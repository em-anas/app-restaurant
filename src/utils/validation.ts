/* eslint-disable @typescript-eslint/no-explicit-any */
import { VALIDATION_MESSAGES } from "../constants/messages";

/**
 * Validates that a field has a value
 *
 * @param value The field value to validate
 * @returns Error message or empty string
 */
export const required = (value: any): string => {
  // Handle different value types
  if (value === undefined || value === null)
    return VALIDATION_MESSAGES.REQUIRED;

  if (typeof value === "string") {
    return value.trim() ? "" : VALIDATION_MESSAGES.REQUIRED;
  }

  if (typeof value === "boolean") {
    return value ? "" : VALIDATION_MESSAGES.REQUIRED;
  }

  return value ? "" : VALIDATION_MESSAGES.REQUIRED;
};

/**
 * Validates that a string is a valid email
 *
 * @param value The field value to validate
 * @returns Error message or empty string
 */
export const isEmail = (value: string): string => {
  if (!value.trim()) return "";

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(value) ? "" : VALIDATION_MESSAGES.EMAIL;
};

/**
 * Validates that a string is a valid phone number
 *
 * @param value The field value to validate
 * @returns Error message or empty string
 */
export const isPhone = (value: string): string => {
  if (!value.trim()) return "";

  const phoneRegex = /^\+?[0-9]{8,15}$/;
  return phoneRegex.test(value) ? "" : VALIDATION_MESSAGES.PHONE;
};

/**
 * Creates a validator that checks minimum length
 *
 * @param length The minimum length required
 * @returns A validation function
 */
export const minLength =
  (length: number) =>
  (value: string): string => {
    if (!value.trim()) return "";
    return value.length >= length ? "" : VALIDATION_MESSAGES.MIN_LENGTH(length);
  };

/**
 * Creates a validator that checks maximum length
 *
 * @param length The maximum length allowed
 * @returns A validation function
 */
export const maxLength =
  (length: number) =>
  (value: string): string => {
    if (!value.trim()) return "";
    return value.length <= length ? "" : VALIDATION_MESSAGES.MAX_LENGTH(length);
  };

/**
 * Validates that a date is in the future
 *
 * @param value The date string to validate
 * @returns Error message or empty string
 */
export const isFutureDate = (value: string): string => {
  if (!value.trim()) return "";

  const date = new Date(value);
  if (isNaN(date.getTime())) return VALIDATION_MESSAGES.INVALID_DATE;

  const now = new Date();
  // Reset time part for date-only comparison
  now.setHours(0, 0, 0, 0);

  return date >= now ? "" : VALIDATION_MESSAGES.FUTURE_DATE;
};

/**
 * Creates a validator that checks if a value matches a pattern
 *
 * @param pattern Regular expression to match
 * @param errorMessage Error message to display on failure
 * @returns A validation function
 */
export const matchesPattern =
  (pattern: RegExp, errorMessage: string) =>
  (value: string): string => {
    if (!value.trim()) return "";
    return pattern.test(value) ? "" : errorMessage;
  };

/**
 * Creates a validator that confirms two fields match
 *
 * @param fieldToMatch The name of the field to match
 * @param errorMessage Error message to display on failure
 * @returns A validation function
 */
export const matches =
  (fieldToMatch: string, errorMessage: string) =>
  (value: string, allValues?: Record<string, any>): string => {
    if (!value.trim() || !allValues) return "";
    return value === allValues[fieldToMatch] ? "" : errorMessage;
  };

/**
 * Combines multiple validation functions into one
 *
 * @param validators Array of validation functions
 * @returns A single validation function
 */
export const composeValidators =
  (...validators: ((value: string, allValues?: any) => string)[]) =>
  (value: string, allValues?: any): string => {
    for (const validator of validators) {
      const error = validator(value, allValues);
      if (error) return error;
    }
    return "";
  };

// Common validation recipes
export const AppValidations = {
  name: composeValidators(
    required,
    minLength(2),
    matchesPattern(
      /^[A-Za-z\s-]+$/,
      "Please use only letters, spaces, and hyphens"
    )
  ),

  email: composeValidators(required, isEmail),

  subject: composeValidators(required, maxLength(100)),

  message: composeValidators(required, minLength(10), maxLength(500)),

  phone: composeValidators(required, isPhone),

  datetime: composeValidators(required, isFutureDate),
};
