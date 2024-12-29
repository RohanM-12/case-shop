import { Icons } from "@/components/Icons";
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
      {/* value  */}
      <section className="bg-slate-100 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32 ">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">What our
              <span className="relative px-2">
                customers
                <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-orange-400" />
              </span> say
            </h2>
            <img src="/img/logo-2.png" alt="logo" className="w-24 order-0 lg:order-2 rounded-full" />
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">

              <div className="text-lg leading-8">
                <p>"The case feels durable and i even got a compiment on the design. Had the case for two and a half month now and <span className="p-1.5 rounded-lg bg-slate-600 text-white">the image is super clear</span>, on the case i had before, the image was yellow-ish "</p>
              </div>
              <div className=" flex gap-4 mt-2">
                <img src="/img/users/user-1.png" className="rounded-full h-12 w-12 object-cover" alt="user" />
                <div className="flex flex-col">
                  <p>
                    Jonathan
                  </p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-5 w-5 stroke-[3px] text-green-500" /> Verified Purchase
                  </div>
                  <div className="flex gap-0.5 m-2">
                    <Star className="h-5 w-5 text-orange-600 fill-orange-500 " />
                    <Star className="h-5 w-5 text-orange-600 fill-orange-500 " />
                    <Star className="h-5 w-5 text-orange-600 fill-orange-500 " />
                    <Star className="h-5 w-5 text-orange-600 fill-orange-500 " />
                    <Star className="h-5 w-5 text-orange-600 fill-orange-500 " />
                  </div>
                </div>

              </div>

            </div>
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">

              <div className="text-lg leading-8">
                <p>"This case is exactly what I was looking for! It fits my phone perfectly and feels great in my hand. I've dropped my phone a couple of times since getting this case, and it's protected it perfectly.<span className=" bg-slate-600 text-white rounded-lg p-1.5">Highly recommend!</span>"</p>
              </div>
              <div className=" flex gap-4 mt-2">
                <img src="/img/users/user-3.png" className="rounded-full h-12 w-12 object-cover" alt="user" />
                <div className="flex flex-col">
                  <p>
                    Binod
                  </p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-5 w-5 stroke-[3px] text-green-500" /> Verified Purchase
                  </div>
                  <div className="flex gap-0.5 m-2">
                    <Star className="h-5 w-5 text-orange-600 fill-orange-500 " />
                    <Star className="h-5 w-5 text-orange-600 fill-orange-500 " />
                    <Star className="h-5 w-5 text-orange-600 fill-orange-500 " />
                    <Star className="h-5 w-5 text-orange-600 fill-orange-500 " />
                    <Star className="h-5 w-5 text-orange-600 fill-orange-500 " />
                  </div>
                </div>

              </div>

            </div>
          </div>

        </MaxWidthWrapper>
      </section>
    </div>
  );
}
