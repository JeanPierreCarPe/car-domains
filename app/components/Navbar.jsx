import { logo } from "@/public/assets/images";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full h-[60px] lg:h-[80px] fixed z-[1000] px-5 md:px-12 lg:px-20 flex items-center bg-bgColor shadow-lg">
      {/* <div className=" relative h-[50px] lg:h-[60px] w-[150px] lg:w-[200px] overflow-hidden">
        <Image
          src={logo}
          layout="fill"
          objectFit="contain"
          alt="product-image"
        />
      </div> */}
      <h1 className="font-poppins font-bold text-5xl">LOGO</h1>
    </div>
  );
};

export default Navbar;
