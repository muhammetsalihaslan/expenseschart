import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className=" bg-[#EC775F] w-1/2 h-[6rem] rounded-2xl flex justify-between items-center">
        <div className="text-white ml-5">
          <h1 className="text-sm font-bold">My balance</h1>
          <h1 className="text-2xl font-bold">$921.48</h1>
        </div>
        <div className="mr-5">
          <Image src="./images/logo.svg" width={65} height={65} />
        </div>
      </div>
      <div className=" bg-[#FFFBF6] w-1/2 h-[25rem] rounded-2xl mt-[1rem]">
        <div className="mt-7">
          <h1 className="text-2xl flex justify-center font-bold">
            Spending - Last 7 days
          </h1>
        </div>
        <div className="flex gap-x-3 items-end justify-center  h-2/5 mt-5   ">
          <div>
            <div className="h-[40px] w-[36px] bg-[#EC775F] rounded-md cursor-pointer hover:bg-[#FF9B86] "></div>
            <h1 className="text-sm mt-3 text-[#98837F] flex items-center justify-center ">
              mon
            </h1>
          </div>
          <div>
            <div className="h-[81px] w-[36px] bg-[#EC775F] rounded-md cursor-pointer hover:bg-[#FF9B86] "></div>
            <h1 className="text-sm mt-3 text-[#98837F] flex items-center justify-center ">
              tue
            </h1>
          </div>
          <div>
            <div className="h-[116px] w-[36px] bg-[#76B5BC] rounded-md cursor-pointer hover:bg-[#B4E0E5]"></div>
            <h1 className="text-sm mt-3 text-[#98837F] flex items-center justify-center ">
              wed
            </h1>
          </div>
          <div>
            <div className="h-[72px] w-[36px] bg-[#EC775F] rounded-md cursor-pointer hover:bg-[#FF9B86]"></div>
            <h1 className="text-sm mt-3 text-[#98837F] flex items-center justify-center ">
              thu
            </h1>
          </div>
          <div>
            <div className="h-[54px] w-[36px] bg-[#EC775F] rounded-md cursor-pointer hover:bg-[#FF9B86]"></div>
            <h1 className="text-sm mt-3 text-[#98837F] flex items-center justify-center ">
              fri
            </h1>
          </div>
          <div>
            <div className="h-[100px] w-[36px] bg-[#EC775F] rounded-md cursor-pointer hover:bg-[#FF9B86]"></div>
            <h1 className="text-sm mt-3 text-[#98837F] flex items-center justify-center ">
              sat
            </h1>
          </div>
          <div>
            <div className="h-[59px] w-[36px] bg-[#EC775F] rounded-md cursor-pointer hover:bg-[#FF9B86]"></div>
            <h1 className="text-sm mt-3 text-[#98837F] flex items-center justify-center ">
              sun
            </h1>
          </div>
        </div>
        <hr className="border border-red-200 mx-5 rounded-full" />
        <div className="bg-red-300 "> part3</div>
      </div>
    </div>
  );
}
