import React from "react";

const Contact = () => {
  return (
    <div className="contact-wraper container mx-auto">
      <h2 className="mt-20 text-center text-5xl">Contacts</h2>
      <div
        className="contact  mt-20 grid grid-col 
      grid-cols-1 mx-auto"
      >
        <form className="col-span-2">
          <div className="input-wraper input-detals flex flex-col ">
            <h3 className="mb-5 text-3xl">Send Message</h3>
            <div className="grid grid-col grid-cols-2 w-full gap-5">
              <div className="col-span-1 flex flex-col gap-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full py-8  px-12 rounded-full border border-cyan-500 outline-none focus:border-rose-500 duration-500 "
                />
                <input
                  type="email"
                  placeholder="Email"
                  className=" py-8  px-16 rounded-full border border-cyan-500 outline-none focus:border-rose-500 duration-500 w-full"
                />
              </div>
              <div className="col-span-1 flex flex-col gap-5">
                <input
                  type="message"
                  placeholder="Message"
                  className=" py-8  px-16 rounded-full border border-cyan-500 outline-none focus:border-rose-500 duration-500 w-full"
                />
                <input
                  type="submit"
                  placeholder="Submit"
                  className=" py-8  px-16 rounded-full border border-cyan-500 outline-none focus:border-rose-500 duration-500 w-full text-white cursor-pointer bg-cyan-500 hover:bg-transparent hover:text-gray-500"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
