import { Component } from "react";
import { Link } from "react-router-dom";

export default class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(err) {
    return {
      hasError: true,
    };
  }

  render() {
    if (this.state.hasError) {
      const containerStyle = {
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        maxWidth: "400px",
        margin: "auto",
        marginTop: "50px",
      };

      const headingStyle = {
        fontSize: "24px",
        color: "#ff0000",
        marginBottom: "20px",
      };

      const paragraphStyle = {
        fontSize: "16px",
        color: "#333",
      };

      return (
        <div style={containerStyle}>
          <h1 style={headingStyle}> Oops... Something went wrong.</h1>
          <p style={paragraphStyle}>Please try again later :()</p>
        </div>
      );
    }

    return this.props.children;
  }
}
