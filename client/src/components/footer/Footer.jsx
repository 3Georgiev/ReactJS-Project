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
          © <span>{currentYear}</span> All Rights Reserved By GameShop
        </p>
      </div>
    </footer>
  );
}
