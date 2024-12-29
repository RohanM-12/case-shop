import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import { Check, Star } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0  lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <img className="w-20 rounded-full  h-20" alt="logo" src={"/img/logo-2.png"} />
              </div><h1 className="Relativew-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900   text-5xl md:text-6xl lg:text-7xl ">Your Image on a <span className="bg-orange-600 rounded-md  px-1.5 font-semibold text-white">Custom</span> Phone Case </h1>
              <p className="mt-8 text-lg lg:pr-10  max-w-prose text-center lg:text-left text-pretty md:text-wrap">Capture your favourive memories with your own, <span className="font-semibold"> one-of-one</span> Phone Case. case-shop allows you to protect your memories,not just your phone case.  </p>
              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div>
                  <li className="flex gap-1.5 items-center text-left"><Check className="h-5 w-5 shrink-0 text-orange-600" /> Hight quality durable material</li>
                  <li className="flex gap-1.5 items-center text-left"><Check className="h-5 w-5 shrink-0 text-orange-600" /> 5 year print guarantee</li>
                  <li className="flex gap-1.5 items-center text-left"><Check className="h-5 w-5 shrink-0 text-orange-600" /> Latest IPhone models available</li>
                </div>
              </ul>
              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-3">
                  <img className="inline-block h-10 w-10 rounded-full ring-2  ring-slate-100" src="/img/users/user-1.png" alt="user image" />
                  <img className="inline-block h-10 w-10 rounded-full ring-2  ring-slate-100" src="/img/users/user-2.png" alt="user image" />
                  <img className="inline-block h-10 w-10 rounded-full ring-2  ring-slate-100" src="/img/users/user-3.png" alt="user image" />
                  <img className="inline-block h-10 w-10 rounded-full ring-2  ring-slate-100" src="/img/users/user-5.png" alt="user image" />
                  <img className="inline-block h-10 w-10 rounded-full ring-2  ring-slate-100" src="/img/users/user-4.png" alt="user image" />
                </div>
                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-400" />
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-400" />
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-400" />
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-400" />
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-400" />
                  </div>
                  <p><span className="font-semibold">1,230</span> <span className="text-gray-700"> Happy Customers</span></p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md::max-w-xl">
              <img src="/img/your-image.png" alt="your-image" className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block " />
              <img className="absolute w-20 -left-6 -bottom-6 select-none" src="/img/line.png" alt="line" />
              <Phone className="w-64" imgSrc="/img/demo-cover.png" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
