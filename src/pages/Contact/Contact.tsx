"use client";
import FormInputLabel from "@/components/FormInputLabel/FormInputLabel";
import Image from "next/image";

import ContactUsImg from "@/assets/Images/Contact-us.jpg";
import { useForm } from "@formspree/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
const Contact = () => {
  const [state, handleSubmit] = useForm("xpzgrojl");

  useEffect(() => {
    if (state.errors) {
      console.log(state.errors);
    }
    if (state.succeeded) {
      toast.success("Submitted successfully, we will get back to you soon!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [state]);
  return (
    <div className="space-y-6">
      <ToastContainer />
      <div className="relative h-[80px] sm:h-[250px] w-full ">
        <Image
          src={ContactUsImg}
          alt="contact"
          fill
          className="object-contain sm:object-fill"
        />
      </div>
      <div className=" space-y-8 p-6 container m-auto">
        <div className="space-y-2">
          <h1>How to Contact Dream Big Corporation </h1>
          <p>
            Welcome to Dream Big Corporation Contact Us page! Dream Big
            Corporation is conveniently located in Kongaon, Kalyan West, Thane
            Mumbai and we provide products and services to companies nationwide.
            Please feel free to contact us by phone, mail or email. You&apos;ll
            find our contact information below. We&apos;re happy to answer your
            questions and provide you with more information about Dream Big
            Corporation huge selection of products and services.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-20">
          <div className="space-y-4">
            <div className="w-full sm:w-[300px]">
              <h2 className="text-lg">Corporate & Office Address</h2>
              <p>
                Asmeeta Textile Park, E6B, Building, Unit No. 15, Kalyan-Bhiwandi Road, Kongaon, Kalyan West, Thane - 421311 Mumbai
              </p>
            </div>
          <div className="">
            <p>
              <span className="font-bold">Email:</span>{" "}
              dreambigcorporation22@gmail.com
            </p>
            <p className="  text-base">
              <span className="font-bold">Phone Number: </span>
              <a href="tel:+91 9967489992" className="hover:underline">
                +91 9967489992
              </a>{" "}
              /{" "}
              <a href="tel:+91 9527376669" className="hover:underline">
                +91 9527376669
              </a>{" "}
              /{" "}
              <a href="tel:+91 9657777948" className="hover:underline">
                +91 9657777948
              </a>
            </p>
            <p>
              <span className="font-bold">Office Hours:</span> Monday - Saturday
              9:30 a.m. - 6:30 p.m. IST
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row-reverse gap-10">
          <form
            action=""
            className="space-y-4 sm:flex-1"
            onSubmit={handleSubmit}
          >
            <FormInputLabel
              label="Name"
              name="name"
              placeholder="john doe"
              type="text"
              required
            />
            <FormInputLabel
              label="Email"
              placeholder="johndoe@gmail.com"
              type="email"
              name="email"
              required
            />
            <FormInputLabel
              label="Mobile No."
              name="contact"
              placeholder="+91 9158321091"
              type="tel"
            />
            <FormInputLabel
              label="Message"
              type="text"
              required
              name="message"
            />
            <button
              disabled={state.submitting == true}
              className="bg-primary text-white px-4 py-2 rounded-md font-medium disabled:opacity-50 disabled  :cursor-progress"
              type="submit"
            >
              Send
            </button>
            <p className="text-primary font-bold text-base">
              Or call{" "}
              <a href="tel:+91 9967489992" className="hover:underline">
                +91 9967489992
              </a>{" "}
              /{" "}
              <a href="tel:+91 9527376669" className="hover:underline">
                +91 9527376669
              </a>{" "}
              /{" "}
              <a href="tel:+91 9657777948" className="hover:underline">
                +91 9657777948
              </a>
            </p>
          </form>
          <div className="space-y-4 flex-1 sm:relative ">
            <div className="h-[300px] sm:h-full w-full  rounded-lg overflow-hidden border-2 border-secondary/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.647272022761!2d73.10002307547883!3d19.25419839635347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7973273c05d5d%3A0xdd706af502f3b591!2sDBC%20GLOBAL%20SOLUTION%20PVT.%20LTD.%20%26%20DREAM%20BIG%20CORPORATION!5e0!3m2!1sen!2sin!4v1766125236904!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
