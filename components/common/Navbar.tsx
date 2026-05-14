import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const navItems = ["Home", "Lottery", "Insurance", "Journey Plan", "About"];

export default function Navbar() {
  return (
    <header className="absolute left-0 top-0 z-50 w-full px-4 pt-5">
      <nav className="mx-auto flex container h-22 items-center justify-between rounded-lg bg-[#E8EDFF] px-5 shadow-lg backdrop-blur-md md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-[182px] h-[56px]">
            <Image
              src="/logo.png"
              alt="logo"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
         
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <Link
              key={item}
              href="#"
              className={`text-xl  font-bold transition hover:text-[#004EB0] ${
                item === "Home"
                  ? " text-[#004EB0]"
                  : "text-[#697A8E] font-normal"
              }`}
            >
                <p>
              {item}
                </p>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="secondary"
            className="h-12 montserrat rounded-3 bg-[#FFFFFF] px-6 text-base font-medium  text-[#005ce6] shadow-md hover:bg-white"
          >
            Login
          </Button>

          <Button className="h-12 montserrat rounded-md bg-[#004EB0] px-6 text-base font-medium text-white shadow-md hover:bg-[#004EB0]/90">
            Signup
          </Button>
        </div>
      </nav>
    </header>
  );
}