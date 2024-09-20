import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <Separator />
      <div className=" mx-auto wrapper bottom-0 flex flex-col items-center gap-2 w-full mb-16">
        <div className="flex flex-col md:flex-row w-full justify-between mx-auto p-4 gap-12">
          <div className="flex flex-col gap-12 text-primary">
            <Link href={"/"} className="flex items-center gap-2 cursor-pointer">
              <Image
                src={""}
                alt="Logo"
                width={300}
                height={200}
                className="rounded-full size-16"
              />
              <div className="flex flex-col">
                <span className="font-bold bg-gradient-to-b from-purple-400 to-purple-700 bg-clip-text text-transparent text-5xl tracking-tighter">
                  Samsu
                </span>
                <p className="text-primary font-medium tracking-tight text-lg leading-none mt-2">
                  Samsu Software Private Limited
                </p>
              </div>
            </Link>
            <div className="flex flex-col gap-6">
              <div className="flex justify-center gap-6 items-center">
                <Link target="_blank" href={"https://x.com/samsu_io"}>
                  <BsTwitterX className="hover:text-gray-500 h-8 w-8" />
                </Link>
                <Link
                  target="_blank"
                  href={"https://www.instagram.com/samsu.io/"}
                >
                  <BsInstagram className="hover:text-gray-500 h-8 w-8" />
                </Link>
                <Link
                  target="_blank"
                  href={
                    "https://www.linkedin.com/company/samsu-software/posts/?feedView=all"
                  }
                >
                  <BsLinkedin className="hover:text-gray-500 h-8 w-8" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-5 pr-10">
            <div className="text-lg tracking-tighter flex flex-col gap-1">
              <Link
                href={"/tnc"}
                className="text-foreground/75 transition-all duration-300 hover:text-purple-600"
              >
                Terms & Conditions
              </Link>
              <Link
                href={"/privacy-policy"}
                className="text-foreground/75 transition-all duration-300 hover:text-purple-600"
              >
                Privacy Policy
              </Link>
              <Link
                href={"/spd"}
                className="text-foreground/75 transition-all duration-300 hover:text-purple-600"
              >
                Shipping & Delivery Policy
              </Link>
              <Link
                href={"/contact-us"}
                className="text-foreground/75 transition-all duration-300 hover:text-purple-600"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
        < FaRegCopyright className="h-5 w-5" /> <span className="font-medium text-lg text-foreground/75 ">Copyright 2024. All Right Reserved.</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
