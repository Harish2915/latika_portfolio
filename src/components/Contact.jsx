// src/components/Contact.jsx

function Contact() {
  return (
    <section id="contact">
      <div className="container">

        <h1 className="title">
          Contact
        </h1>

        <div className="glass p-5" data-aos="fade-up">

          <form>

            <div className="mb-4">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
              />
            </div>

            <div className="mb-4">
              <textarea
                rows="5"
                className="form-control"
                placeholder="Message"
              ></textarea>
            </div>

            <button className="contact-btn">
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;