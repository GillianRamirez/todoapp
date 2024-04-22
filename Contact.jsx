import React from "react";
import emailjs from "emailjs-com";

const SERVICE_ID = "service_lt1dnnm";
const TEMPLATE_ID = "template_aqa2fnf";
const PUBLIC_KEY = "7u1UMm1nA8BtmyaKF";
import "../styles.css";

function Contact() {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        alert("Message Sent Successfully");
      },
      (error) => {
        console.log(error.text);
        alert("Something went wrong!");
      },
    );
    e.target.reset();
  };
  return (
    <header className="Contact-header">
      <div style={{ width: "100vw", height: "100vh", display: "flex" }}>
        <form class="formContainer" onSubmit={handleOnSubmit}>
          <h2>Have any questions or comments?</h2>
          <h3>We would like to here from you!</h3>
          <div class="formElement">
            <label for="from_name">First Name</label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              placeholder="Your first name.."
              required
            />
          </div>

          <div class="formElement">
            <label for="from_name">Last Name</label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              placeholder="Your last name.."
              required
            />
          </div>

          <div class="formElement">
            <label>E-mail</label>
            <input
              type="email"
              id="from_email"
              name="from_email"
              placeholder="Your email.."
              required
            />
          </div>

          <div class="formElement">
            <label for="message">Message</label>
            <textarea
              name="message"
              rows="8"
              cols="30"
              placeholder="Your message.."
              required
            />
          </div>
          <button type="submit" className="formButton">
            Submit
          </button>
        </form>
      </div>
    </header>
  );
}

export default Contact;
