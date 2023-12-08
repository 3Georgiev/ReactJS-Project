import { useState } from "react";

export default function useFormValidator(values, validationRules) {
  const [errors, setErrors] = useState({});
  console.log(values);
  console.log(validationRules);
  const validate = () => {
    const newErrors = {};
  };

  return {
    errors,
  };
}
