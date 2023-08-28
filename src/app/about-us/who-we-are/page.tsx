import Image from "next/image";
import Banner from "@/assets/Images/Management-Team-3.jpg";

import AccoutabilityImg from "@/assets/Images/about/ACCOUNTABILITY.png";
import CommunicationImg from "@/assets/Images/about/COMMUNICATION-matching.png";
import IntegrityImg from "@/assets/Images/about/INTEGRITY-150x150.png";
import EmpowermentImg from "@/assets/Images/about/EMPOWERMENT-150x150.png";
import FunImg from "@/assets/Images/about/FUN-150x150.png";
const page = () => {
  const VALUES = [
    { id: 1, name: "Accountability", icon: AccoutabilityImg },
    { id: 2, name: "Communication", icon: CommunicationImg },
    { id: 3, name: "Integrity", icon: IntegrityImg },
    { id: 4, name: "Empowerment", icon: EmpowermentImg },
    { id: 5, name: "FUN", icon: FunImg },
  ];
  return (
    <div className="space-y-6">
      <div className="relative h-[80px] sm:h-[250px] w-full ">
        <Image
          src={Banner}
          alt="contact"
          fill
          className="object-contain sm:object-fill"
        />
      </div>
      <div className="space-y-6 sm:space-y-16 p-5 container m-auto">
        <div className="space-y-2">
          <h1 className="text-2xl">OUR STORY</h1>
          <p className="sm:text-lg font-light">
            Welcome to Dream Big Corporation About Us page! Dream Big
            Corporation is conveniently located in Kongaon, Kalyan West, Thane
            Mumbai and we provide products and services to companies nationwide.
            Please feel free to contact us by phone, mail or email. You&apos;ll
            find our contact information below. Additionally, you may talk with
            one of our customer care consultants directly using our online chat
            feature. We&apos;re happy to answer your questions and provide you
            with more information about Dream Big Corporation huge selection of
            products and services.
          </p>
        </div>
        <div className="space-y-2">
          <h1 className="sm:text-2xl">OUR VALUES</h1>
          <div className="flex flex-wrap gap-10 sm:gap-20">
            {VALUES.map(({ name, icon }, index) => (
              <div
                className="flex flex-col items-center justify-center gap-4"
                key={index}
              >
                <div className="relative h-[60px] w-[60px] sm:h-[130px] sm:w-[130px] object-contain">
                  <Image src={icon} alt="img" fill />
                </div>
                <h2 className="font-normal">{name}</h2>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="sm:text-2xl">OUR MISSION</h1>
          <p className="sm:text-lg font-light">
            Our Mission is to work with companies to identify, track, and manage
            inventory and assets with the use of advancing Barcode and RFID
            Technology. Our solutions increase visibility throughout the supply
            chain improving health and safety of employees and consumers around
            the globe. We work to eliminate inefficiencies and improve
            productivity in businesses to benefit our community and the world.
          </p>
        </div>
        <div className="space-y-2">
          <h1 className="sm:text-2xl">OUR VISION</h1>
          <p className="sm:text-lg font-light">
            Our Vision is to be your trusted expert for all Barcode and RFID
            technology products, services, software, support, and solutions to
            help your business achieve a competitive advantage with the most
            efficient supply chain that provides you and your end-users with
            amazing customer experiences.
          </p>
        </div>
        <div className="space-y-2">
          <h1 className="sm:text-2xl">THE SERVICES & SOLUTIONS WE PROVIDE</h1>
          <div className="space-y-4">
            <div className="">
              <span className="font-semibold text-lg text-gray-800">
                Business
              </span>
              <br />{" "}
              <p className="text-gray-500">
                Solutions With the background and experience to see business
                issues from your perspective, Dream Big Corporation is committed
                to providing the right combination of technical innovation,
                performance, and cost-effectiveness. Your business solutions
                will integrate the best in advanced hardware components,
                supporting software and consumable supplies. In addition, our
                service options will carry you far beyond standard product
                warranties.
              </p>
            </div>
            <div className="">
              <span className="font-semibold text-lg text-gray-800">
                Technical Consultants
              </span>
              <br />{" "}
              <p className="text-gray-500">
                Dream Big Corporation Technical Consultants are chosen from
                experts in the industries they serve. They are trained by
                factory experts in proper application and support of technology.
                Regular factory training is mandatory for all Reps, to assure
                their clients of the right product to fit the client&apos;s
                application. Whether your requirement is for a solution to a
                time and attendance problem, or if you need to integrate a
                barcode scanner with a scale for shipping; whether you need to
                track goods in process for manufacturing or add barcode tracking
                for order picking in a warehouse, our Technical Consultants have
                the experience to provide a trusted solution.
              </p>
            </div>
            <div className="">
              <span className="font-semibold text-lg text-gray-800">
                Dedicated Support
              </span>
              <br />
              <p className="text-gray-500">
                The Dream Big Corporation advantage… a staff of highly trained,
                knowledgeable professionals to provide expert care and service
                over the life of your data collection system. Contact our
                factory-authorized service center directly to answer your
                questions, use our email address, or reach us via an online
                chat. Utilizing our modern service facility, factory-certified
                technicians can provide immediate response to all of your repair
                and maintenance needs.
              </p>
            </div>
            <div className="">
              <span className="font-semibold text-lg text-gray-800">
                Long-Term Value
              </span>
              <br />{" "}
              <p className="text-gray-500">
                Dream Big Corporation offers confidence in the long-term value
                of your data collection system. As a business partner, we are
                dedicated to providing the highest level of customer
                satisfaction in sales and customer support. Let our experience
                and commitment to excellence put barcode technology to work for
                you today. If you have any questions or comments, please don&apos;t
                hesitate to contact us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
