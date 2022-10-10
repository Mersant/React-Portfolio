import React, { useState } from "react";
import './styles/ContactForm.css'

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    setStatus(result.status);
  };
  return (
    <form onSubmit={handleSubmit}>
        <div className="centerBlock">
            <label htmlFor="name">Name:</label>
            <input  type="text" id="name" required />
        </div>
        <div className="centerBlock">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />
        </div>
        <div>
            <label htmlFor="message">Message:</label>
            <textarea className="centerBlock" id="message" required />
        </div>
        <button id="submitButton" type="submit">{status}</button>
    </form>
  );
};

export default ContactForm;