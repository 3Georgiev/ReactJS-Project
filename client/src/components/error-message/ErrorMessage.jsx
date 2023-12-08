export default function ErrorMessage({ authValidationErrors, typeError }) {
  return (
    <>
      {authValidationErrors[typeError] && (
        <p style={{ margin: "0px", color: "red" }}>
          {authValidationErrors[typeError]}
        </p>
      )}
    </>
  );
}
