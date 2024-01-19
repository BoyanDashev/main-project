import { useState, useRef } from "react";

import emailjs from "@emailjs/browser";
//template_vr9k9kl
//service_9b3tuyh
//Yu-F5md-2hXMnTfd3

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: " ",
    email: " ",
    message: " ",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    //template_vr9k9kl
    //service_9b3tuyh
    //Yu-F5md-2hXMnTfd3
    emailjs
      .send(
        "service_9b3tuyh",
        "template_vr9k9kl",
        {
          from_name: form.name,
          to_name: "Boyan",
          from_email: form.email,
          to_email: "b.dashevv@gmail.com",
          message: form.message,
        },
        "Yu-F5md-2hXMnTfd3"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you, I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong.");
        }
      );
  };
  return (
    
      <div className=" container xl:mt-12 xl:flex-row flex-col-reverse justify-center items-centerflex gap-10 overflow-hidden">
        <div>
          <h3 style={{ fontFamily: 'Roboto Mono, monospace' }} className="text-2xl  flex justify-center items-center text-white">Get in touch</h3>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col  items-center justify-center  gap-8"
          >
            <label className="flex flex-col items-center justify-center   ">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                          value={form.name}
                          autoComplete="off"
                className="bg-tertiary w-[90vw] max-w-[500px] py-4 
               rounded-lg outline-none
                border-none font-medium
                 placeholder:text-secondary"
                placeholder="What's your name?"
                onChange={handleChange}
              />
            </label>
            <label className="flex flex-col items-center justify-center ">
              <span className="text-white  font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                          value={form.email}
                          autoComplete="email"
                className="bg-tertiary w-[90vw] max-w-[500px] py-4  
               rounded-lg outline-none
                border-none font-medium
                 placeholder:text-secondary"
                placeholder="What's your email?"
                onChange={handleChange}
              />
                  </label>
                  

            <label className="flex flex-col justify-center items-center ">
              <span className="text-white  font-medium mb-4">Your Message</span>
              <textarea
                rows="7"
                name="message"
                          value={form.message}
                          autoComplete="off"
                className="bg-tertiary w-[90vw] max-w-[500px] py-4
               rounded-lg outline-none
                border-none font-medium
                 placeholder:text-secondary"
                placeholder="What do you want to say?"
                onChange={handleChange}
              />
            </label>
            <button
              type="submit"
              className="bg-tertiary bg-red-700 mb-10 flex justify-center w-[15vw] items-center rounded-xl py-3  outline-none  text-white font-bold shadow-primary shadow-md "
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    
  );
};

export default Contact;
