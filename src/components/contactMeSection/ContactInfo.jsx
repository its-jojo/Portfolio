import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="JM9350077@GMAIL.COM" Image={HiOutlineMail} />
     
      <SingleInfo text="Kainchi Dham, Uttarakhand, India" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
