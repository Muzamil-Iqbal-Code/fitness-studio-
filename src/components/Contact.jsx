
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="bg-[#10110f] px-[9%] py-[115px] max-[1000px]:px-[6%] max-[700px]:px-[7%] max-[700px]:py-[75px]"
    >
      <div className="flex justify-between gap-4 border-b border-[#30312c] pb-5 text-[9px] font-bold tracking-[2px] text-[#85877e]">
        <span>07 / GET IN TOUCH</span>
        <span>YOUR NEXT CHAPTER STARTS HERE</span>
      </div>

      <div className="mt-[65px] grid grid-cols-2 gap-[80px] max-[700px]:grid-cols-1 max-[700px]:gap-[40px]">
        <div>
          <h2 className="font-['Barlow_Condensed'] text-[clamp(65px,8vw,105px)] font-extrabold leading-[0.84]">
            LET'S GET
            <br />
            <span className="text-[#c5f45b]">TO WORK.</span>
          </h2>

          <p className="my-[30px] max-w-[400px] text-[16px] leading-[1.8]">
            Have questions about membership or training? Get in touch with us.
          </p>

          <a
            href="mailto:info@irondistrict.com"
            className="inline-block border-b border-[#c5f45b] pb-3 text-[10px] font-extrabold tracking-[1px] hover:text-[#c5f45b]"
          >
            INFO@IRONDISTRICT.COM ↗
          </a>
        </div>

        <div>
          {submitted ? (
            <div className="border border-[#c5f45b] bg-[#191a17] p-8">
              <h3 className="font-['Barlow_Condensed'] text-[35px] font-bold text-[#c5f45b]">
                MESSAGE RECEIVED.
              </h3>
              <p className="mt-3 text-[12px] text-[#85877e]">
                Thank you for contacting IRON DISTRICT.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <label className="mt-2 text-[10px] font-bold tracking-[1px]">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border border-[#30312c] bg-[#171815] px-4 py-4 text-[12px] text-white outline-none focus:border-[#c5f45b]"
              />

              <label className="mt-2 text-[10px] font-bold tracking-[1px]">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border border-[#30312c] bg-[#171815] px-4 py-4 text-[12px] text-white outline-none focus:border-[#c5f45b]"
              />

              <label className="mt-2 text-[10px] font-bold tracking-[1px]">
                Your Message
              </label>
              <textarea
                name="message"
                placeholder="Tell us how we can help"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="resize-y border border-[#30312c] bg-[#171815] px-4 py-4 text-[12px] text-white outline-none focus:border-[#c5f45b]"
              />

              <button
                type="submit"
                className="mt-3 bg-[#c5f45b] px-5 py-4 text-[10px] font-extrabold tracking-[1px] text-[#10110f] transition-colors hover:bg-white"
              >
                SEND MESSAGE ↗
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
