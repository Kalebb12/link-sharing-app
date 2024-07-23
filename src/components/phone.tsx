import phone from "../../public/preview-section.svg";
import Image from "next/image";
const Mobile = () => {
  return (
    <div
      id="mobile "
      className="w-[560px] hidden lg:flex flex-shrink rounded-xl bg-[--white] items-center justify-center"
    >
      <Image src={phone} alt="phone screen" className="w-[300px] h-[631px]" />
    </div>
  );
};

export default Mobile;
