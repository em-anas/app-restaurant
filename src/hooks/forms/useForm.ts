/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useCallback, type FormEvent } from "react";
import type { ChangeEvent } from "react";

type ValidationErrors<T> = Partial<Record<keyof T, string>>;

type Validator<T> =
  | ((values: T) => ValidationErrors<T>)
  | ((values: T) => Promise<ValidationErrors<T>>);

interface UseFormOptions<T> {
  initialValues: T;
  validate?: Validator<T>;
  onSubmit: (values: T) => void | Promise<void>;
}

export function useForm<T extends Record<string, any>>({
  initialValues,
  validate,
  onSubmit,
}: UseFormOptions<T>) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<ValidationErrors<T>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = useCallback(
    (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
      const { name, value, type } = e.target;
      const newValue =
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

      setValues((prev) => ({ ...prev, [name]: newValue }));

      if (errors[name as keyof T]) {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      }
    },
    [errors]
  );

  const handleBlur = useCallback(
    (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
      const { name } = e.target;
      setTouched((prev) => ({ ...prev, [name]: true }));

      if (validate) {
        Promise.resolve(validate(values)).then((validationErrors) => {
          if (validationErrors[name as keyof T]) {
            setErrors((prev) => ({
              ...prev,
              [name]: validationErrors[name as keyof T],
            }));
          }
        });
      }
    },
    [validate, values]
  );

  const setFieldValue = useCallback(
    (field: keyof T, value: any) => {
      setValues((prev) => ({ ...prev, [field]: value }));

      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: "" }));
      }
    },
    [errors]
  );

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      const allTouched = Object.keys(values).reduce(
        (acc, key) => ({ ...acc, [key]: true }),
        {}
      );
      setTouched(allTouched);

      if (validate) {
        try {
          const validationErrors = await Promise.resolve(validate(values));
          setErrors(validationErrors);

          if (Object.values(validationErrors).some(Boolean)) {
            return;
          }
        } catch (error) {
          console.error("Validation error:", error);
          return;
        }
      }

      setIsSubmitting(true);

      try {
        await onSubmit(values);
        setIsSuccess(true);
      } catch (error) {
        setIsSuccess(false);
        console.error("Form submission error:", error);
      } finally {
        setIsSubmitting(false);
      }
    },
    [validate, values, onSubmit]
  );

  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSuccess(false);
  }, [initialValues]);

  return {
    values,
    errors,
    touched,
    isSubmitting,
    isSuccess,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    setFieldValue,
    setValues,
    setErrors,
  };
}
