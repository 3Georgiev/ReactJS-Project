export default function formValidator(values, validationRules) {
  const validateValues = () => {
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

      if (key === "imageUrl" && !isValidImageUrl(values[key])) {
        newErrors[key] = `${toUpperCaseValue(
          key
        )} must end with jpg, jpeg, png.`;
      }
    });
    return newErrors;
  };

  const toUpperCaseValue = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const isValidImageUrl = (url) => {
    if (!/^https?:\/\//.test(url)) {
      return false;
    }

    const imageExtensions = ["jpg", "jpeg", "png"];
    const extension = url.split(".").pop().toLowerCase();
    return imageExtensions.includes(extension);
  };

  return {
    validateValues,
  };
}
