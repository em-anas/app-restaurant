/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from "react";
import { AppValidations } from "../../utils";

type ValidationErrors<T> = Partial<Record<keyof T, string>>;
type ValidationFunction<T = any> = (
  value: any,
  allValues?: T
) => string | Promise<string>;
type ValidationSchema<T> = Partial<Record<keyof T, ValidationFunction<T>>>;

/**
 * Combines multiple validation functions into one
 *
 * @param validators Array of validation functions
 * @returns A single validation function that runs all validators
 */
export const composeValidators = <T = any>(
  ...validators: ValidationFunction<T>[]
): ValidationFunction<T> => {
  return async (value: any, allValues?: T): Promise<string> => {
    for (const validator of validators) {
      try {
        const error = await Promise.resolve(validator(value, allValues));
        if (error) return error;
      } catch (err) {
        return err instanceof Error ? err.message : "Validation error";
      }
    }
    return "";
  };
};

/**
 * Conditionally applies a validator
 *
 * @param condition Function that determines if validator should be applied
 * @param validator The validation function to conditionally apply
 * @returns A validation function that only runs if condition is met
 */
export const validateIf = <T = any>(
  condition: (values?: T) => boolean,
  validator: ValidationFunction<T>
): ValidationFunction<T> => {
  return (value: any, allValues?: T): string | Promise<string> => {
    if (allValues && condition(allValues)) {
      return validator(value, allValues);
    }
    return "";
  };
};

/**
 * A hook for creating a form validator from a validation schema
 *
 * @param schema Object mapping field names to validation functions
 * @returns A function that validates an entire form
 */
export function useFormValidation<T extends Record<string, any>>(
  schema: ValidationSchema<T>
) {
  return useMemo(() => {
    /**
     * Validates all form values according to the schema
     *
     * @param values The form values to validate
     * @returns An object with validation errors by field name
     */
    const validate = async (values: T): Promise<ValidationErrors<T>> => {
      const errors: ValidationErrors<T> = {};
      const validationPromises: Promise<void>[] = [];

      // Run validation for each field in the schema
      Object.keys(schema).forEach((key) => {
        const field = key as keyof T;
        const validator = schema[field];

        if (validator) {
          const validationPromise = Promise.resolve(
            validator(values[field], values)
          )
            .then((error) => {
              if (error) {
                errors[field] = error;
              }
            })
            .catch((err) => {
              errors[field] =
                err instanceof Error ? err.message : "Validation error";
            });

          validationPromises.push(validationPromise);
        }
      });

      await Promise.all(validationPromises);
      return errors;
    };

    return { validate };
  }, [schema]);
}

// Pre-defined validation schemas for common forms
export const ContactFormSchema = {
  name: AppValidations.name,
  email: AppValidations.email,
  subject: AppValidations.subject,
  message: AppValidations.message,
};

export const ReservationFormSchema = {
  name: AppValidations.name,
  email: AppValidations.email,
  datetime: AppValidations.datetime,
  people: (value: string) =>
    value ? "" : "Please select the number of people",
  request: (value: string) => (value ? AppValidations.message(value) : ""),
};
