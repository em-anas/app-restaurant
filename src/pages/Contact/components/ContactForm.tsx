import React from "react";
import type { ContactFormProps } from "./types";
import { useForm, useFormValidation } from "../../../hooks";
import { ContactFormSchema } from "../../../hooks/forms/useFormValidations";
import { Form, Input, PrimaryButton, Textarea } from "../../../components";
import { FormContainer, FormRow } from "../../../components/common/Form/styles";

export const ContactForm: React.FC<ContactFormProps> = ({ onFormSubmit }) => {
  const { validate } = useFormValidation(ContactFormSchema);

  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    resetForm,
  } = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate,
    onSubmit: async (values) => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", values);
      resetForm();
      if (onFormSubmit) {
        onFormSubmit(values);
      }
    },
  });

  return (
    <FormContainer>
      <Form buttonAlign="stretch" onSubmit={handleSubmit}>
        <FormRow>
          <Input
            id="name"
            name="name"
            label="Your Name"
            placeholder="Enter your name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.name}
            fullWidth
          />

          <Input
            id="email"
            name="email"
            label="Your Email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email}
            fullWidth
          />
        </FormRow>

        <Input
          id="subject"
          name="subject"
          label="Subject"
          placeholder="Enter subject"
          value={values.subject}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.subject}
          fullWidth
        />

        <Textarea
          id="message"
          name="message"
          label="Message"
          placeholder="Enter your message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.message}
          fullWidth
        />

        <PrimaryButton type="submit" fullWidth disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </PrimaryButton>
      </Form>
    </FormContainer>
  );
};
