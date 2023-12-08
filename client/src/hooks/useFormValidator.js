import { useState } from "react";

export default function useFormValidator(values, validationRules) {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    Object.entries(validationRules).forEach(([key, rule]) => {
      if (rule.required && !values[key]) {
        newErrors[key] = `${toUpperCaseValue(key)} is required.`;
      }

      if (rule.minLength !== undefined && values[key].length < rule.minLength) {
        newErrors[key] = `${toUpperCaseValue(key)} must be at least ${
          rule.minLength
        } characters long.`;
      }

      if (rule.minValue !== undefined && values[key] < rule.minValue) {
        newErrors[key] = `${toUpperCaseValue(key)} must be greater than ${
          rule.minValue
        }$.`;
      }
    });
    setErrors(newErrors);
  };

  const toUpperCaseValue = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const validateValues = () => {
    validate();
  };

  return {
    errors,
    validateValues,
  };
}
