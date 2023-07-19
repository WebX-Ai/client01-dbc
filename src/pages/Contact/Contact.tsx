import FormInputLabel from "@/components/FormInputLabel/FormInputLabel";

const Contact = () => {
  return (
    <div className=" space-y-6 p-6 container m-auto">
      <h1 className="text-center">Contact Us</h1>
      <div className="flex flex-col sm:flex-row-reverse gap-10">
        <form action="" className="space-y-4 sm:flex-1">
          <FormInputLabel label="Name" placeholder="john doe" type="text" />
          <FormInputLabel label="Email" placeholder="johndoe@gmail.com" type="email" />
          <FormInputLabel
            label="Mobile No."
            placeholder="+91 9158321091"
            type="tel"
          />
          <FormInputLabel label="Message"  type="text" />
          <button className="bg-primary text-white px-4 py-2 rounded-md font-medium">
            Send
          </button>
          <p className="text-primary font-bold text-base">
            Or call <a href="tel:+91 9967489992">+91 9967489992</a> /{" "}
            <a href="tel:+91 91 9527376669">+91 9527376669</a>
          </p>
        </form>
        <div className="space-y-4 flex-1 sm:relative ">
          <div className="h-[300px] sm:h-full w-full  rounded-lg overflow-hidden border-2 border-secondary/30">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15066.965495104121!2d73.1051151!3d19.2501!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7974dafe88f01%3A0x4f483da59b4878d!2sDREAM%20BIG%20CORPORATION!5e0!3m2!1sen!2sin!4v1688932351608!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
          <div className="space-y-2 sm:hidden">
            <h2 className="sm:text-white">Address</h2>
            <p>
              GROUND FLOOR, HARIOM BUILDING, NR. AMBIKA MEDICAL, WATER SUPPLY
              ROAD, OPP KALYAN BHIWANDI ROAD, KONGAON, KALYAN (W) THANE
              MUMBAI-421311
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
