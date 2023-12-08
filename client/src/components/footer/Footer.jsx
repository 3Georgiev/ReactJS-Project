import "./footer.css";

export default function Footer() {
  function getYear() {
    const currentDate = new Date();
    return currentDate.getFullYear();
  }

  const currentYear = getYear();

  return (
    <footer className="footer_section">
      <div className="container">
        <p>
          © <span>{currentYear}</span> A game shop site developed by Georgi
          Georgiev using React for SoftUni's ReactJS course
        </p>
      </div>
    </footer>
  );
}
