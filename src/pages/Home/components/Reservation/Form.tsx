import React from "react";
import Swal from "sweetalert2";
import {
  Container,
  Form,
  FormRow,
  Input,
  PrimaryButton,
  Section,
  Select,
  Textarea,
} from "../../../../components";
import { useForm, useFormValidation } from "../../../../hooks";
import { AppValidations } from "../../../../utils";

// Form validation schema
const ReservationSchema = {
  name: AppValidations.name,
  email: AppValidations.email,
  datetime: AppValidations.datetime,
  people: (value: string) =>
    value ? "" : "Please select the number of people",
  request: (value: string) => (value ? AppValidations.message(value) : ""),
};

interface ReservationFormValues {
  name: string;
  email: string;
  datetime: string;
  people: string;
  request: string;
}

export const ReservationForm: React.FC = () => {
  const initialValues: ReservationFormValues = {
    name: "",
    email: "",
    datetime: "",
    people: "",
    request: "",
  };

  // Get validation function from the validation schema
  const { validate } = useFormValidation(ReservationSchema);

  // Initialize form handling with validation
  const {
    values,
    errors,
    touched,
    isSuccess,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  } = useForm({
    initialValues,
    validate,
    onSubmit: async (values) => {
      try {
        // Mock API call with a delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Show confirmation popup
        Swal.fire({
          title: "Reservation Confirmed!",
          text: `Thank you, ${values.name}! Your table has been reserved for ${
            values.people
          } people on ${new Date(values.datetime).toLocaleString()}.`,
          icon: "success",
          timer: 3000,
          timerProgressBar: true,
          showConfirmButton: false,
        });

        // Reset form after successful submission
        resetForm();
      } catch (error) {
        console.error("Reservation submission error:", error);
        Swal.fire({
          title: "Error",
          text: "There was a problem with your reservation. Please try again.",
          icon: "error",
        });
      }
    },
  });

  return (
    <Section id="reservation-form">
      <Container>
        <Form
          onSubmit={handleSubmit}
          spacing="md"
          variant="plain"
          buttonAlign="stretch"
        >
          <FormRow>
            <Input
              id="name"
              name="name"
              label="Your Name"
              placeholder="Enter your name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name ? errors.name : ""}
              isSuccess={isSuccess}
              fullWidth
              fieldSize="md"
              variant="outlined"
            />

            <Input
              id="email"
              name="email"
              label="Your Email"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email ? errors.email : ""}
              isSuccess={isSuccess}
              fullWidth
              fieldSize="md"
              variant="outlined"
            />
          </FormRow>

          <FormRow>
            <Input
              id="datetime"
              name="datetime"
              type="datetime-local"
              label="Date & Time"
              value={values.datetime}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.datetime ? errors.datetime : ""}
              isSuccess={isSuccess}
              fullWidth
              fieldSize="md"
              variant="outlined"
            />

            <Select
              id="people"
              name="people"
              label="No Of People"
              value={values.people}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.people ? errors.people : ""}
              fullWidth
              fieldSize="md"
              variant="outlined"
            >
              <option value="">Select</option>
              <option value="1">People 1</option>
              <option value="2">People 2</option>
              <option value="3">People 3</option>
              <option value="4">People 4</option>
              <option value="5">People 5</option>
              <option value="6">People 6</option>
              <option value="large">More than 6</option>
            </Select>
          </FormRow>

          <Textarea
            id="request"
            name="request"
            label="Special Request"
            placeholder="Any special requests?"
            rows={4}
            value={values.request}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.request ? errors.request : ""}
            fullWidth
            fieldSize="md"
            variant="outlined"
          />

          <PrimaryButton type="submit" fullWidth>
            {"Book Order"}
          </PrimaryButton>
        </Form>
      </Container>
    </Section>
  );
};

export default ReservationForm;
