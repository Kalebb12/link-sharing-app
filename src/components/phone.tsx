import phone from "../../public/preview-section.svg";
import Image from "next/image";
const Mobile = () => {
  return (
    <div
      id="mobile "
      className="min-w-[560px] hidden lg:flex  rounded-xl bg-[--white] items-center justify-center"
    >
      <Image src={phone} alt="phone screen" draggable="false" className="w-[300px] h-[631px]" />
    </div>
  );
};

export default Mobile;
