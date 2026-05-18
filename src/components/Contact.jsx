// src/components/Contact.jsx

import { useState } from "react";

import emailjs from "@emailjs/browser";

import "../styles/Contact.css";

/* ========================= */
/* EMAILJS CONFIG */
/* ========================= */

const SERVICE_ID = "service_3v7kt9d";

const OWNER_TEMPLATE_ID = "template_68lvsqh";

const AUTO_REPLY_TEMPLATE_ID = "template_6rf1hac";

const PUBLIC_KEY = "J7l4B18bH30dqe9RY";

/* ========================= */
/* COMPONENT */
/* ========================= */

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState("");

  const [sent, setSent] = useState(false);

  /* ========================= */
  /* HANDLE INPUT */
  /* ========================= */

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  /* ========================= */
  /* HANDLE SUBMIT */
  /* ========================= */

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    setStatus("");

    try {

      /* TEMPLATE DATA */

      const templateParams = {

        from_name: formData.name,

        from_email: formData.email,

        message: formData.message,

      };

      /* SEND TO OWNER */

      await emailjs.send(
        SERVICE_ID,
        OWNER_TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      /* AUTO REPLY */

      await emailjs.send(
        SERVICE_ID,
        AUTO_REPLY_TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      /* SUCCESS */

      setSent(true);

      setStatus("Message Sent Successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      /* RESET */

      setTimeout(() => {

        setSent(false);

        setStatus("");

      }, 7000);

    } catch (error) {

      console.log(error);

      setStatus("Failed to send message");

    }

    setLoading(false);

  };

  return (

    <section id="contact">

      <div className="container">

        {/* TITLE */}

        <h1 className="title">
          Contact
        </h1>

        {/* CONTACT BOX */}

        <div
          className="glass p-5"
          data-aos="fade-up"
        >

          {

            !sent ? (

              <form onSubmit={handleSubmit}>

                {/* NAME */}

                <div className="mb-4">

                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                </div>

                {/* EMAIL */}

                <div className="mb-4">

                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                </div>

                {/* MESSAGE */}

                <div className="mb-4">

                  <textarea
                    rows="5"
                    name="message"
                    className="form-control"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>

                </div>

                {/* BUTTON */}

                <button
                  type="submit"
                  disabled={loading}
                  className={`contact-btn ${loading ? "sending" : ""}`}
                >

                  <span>
                    {
                      loading
                        ? "Sending..."
                        : "Send Message"
                    }
                  </span>

                  {
                    loading && (
                      <div className="send-loader"></div>
                    )
                  }

                </button>

                {/* STATUS */}

                {
                  status && !sent && (
                    <p className="contact-status">
                      {status}
                    </p>
                  )
                }

              </form>

            ) : (

              /* SUCCESS DELIVERY ANIMATION */

              <div className="delivery-animation">

                <div className="delivery-scene">

                  {/* BOY */}

                  <div className="boy">
                    🚶🏻
                  </div>

                  {/* BOX */}

                  <div className="box">
                    📦
                  </div>

                  {/* TRUCK */}

                  <div className="truck">
                    🚚
                  </div>
                  {/* SMOKE */}

                  <div className="smoke">
                    💨
                  </div>
                </div>

                <h3>
                  Message Delivered Successfully
                </h3>

                <p>
                  Thank you! I’ll get back to you soon.
                </p>

              </div>

            )

          }

        </div>

      </div>

    </section>

  );

}

export default Contact;