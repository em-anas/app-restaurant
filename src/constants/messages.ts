export const VALIDATION_MESSAGES = {
  REQUIRED: "This field is required",
  EMAIL: "Please enter a valid email address",
  PHONE: "Please enter a valid phone number",
  MIN_LENGTH: (length: number) => `Must be at least ${length} characters`,
  MAX_LENGTH: (length: number) => `Must be at most ${length} characters`,
  PASSWORD_MISMATCH: "Passwords do not match",
  INVALID_DATE: "Please enter a valid date",
  FUTURE_DATE: "Date must be in the future",
};

export const NOTIFICATIONS = {
  SUCCESS: {
    RESERVATION: "Your reservation has been successfully created!",
    CONTACT:
      "Your message has been sent successfully. We will get back to you shortly.",
    PAYMENT: "Payment successful!",
  },
  ERROR: {
    GENERAL: "Something went wrong. Please try again later.",
    RESERVATION: "Failed to create reservation. Please try again.",
    CONTACT: "Failed to send message. Please try again later.",
    PAYMENT: "Payment failed. Please check your payment details and try again.",
  },
};
