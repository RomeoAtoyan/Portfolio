// import React, { useEffect, useState, useRef } from "react";
// import "./Form.css";
// import CardWork from "../Work/CardWork";
// import emailjs from "@emailjs/browser";

// const Form = () => {
//   //   const [email, setEmail] = useState("");
//   //   const [name, setName] = useState("");
//   //   const [subject, setSubject] = useState("");
//   //   const [message, setMessage] = useState("");

//   return (
//     <div className="email_form_container">
//       <h1>Contact Me</h1>
//       <form className="form">
//         <input id="email-name" type="text" placeholder="Name" />
//         <input id="email-id" type="text" placeholder="Email" />
//         <input id="subject" type="text" placeholder="Subject" />
//         <input id="message" type="text" placeholder="Message" />
//         <button>Send</button>
//       </form>
//     </div>
//   );
// };

// export default Form;

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Form.css";

const Form = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vrzfdwl",
        "template_our0dy9",
        form.current,
        "BlOfVcg0Co6fsyZtr"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="email_form_container">
      <h1>Contact Me</h1>
      <form className="form" ref={form} onSubmit={sendEmail}>
        <input
          id="email-name"
          name="from_name"
          type="text"
          placeholder="Name"
        />
        <input id="message" name="message" type="text" placeholder="Message" />
        <input id="email-id" name="email_id" type="text" placeholder="Email" />
        <button>Send</button>
      </form>
    </div>
  );
};

export default Form;
