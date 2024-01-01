import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className=" bg-[#EC775F] w-[376px] h-[6rem] rounded-2xl flex justify-between items-center">
        <div className="text-white ml-5">
          <h1 className="text-sm font-bold">My balance</h1>
          <h1 className="text-2xl font-bold">$921.48</h1>
        </div>
        <div className="mr-5">
          <Image src="./images/logo.svg" width={65} height={65} />
        </div>
      </div>
      <div className=" bg-[#FFFBF6] w-[376px] h-[25rem] rounded-2xl mt-[1rem]">
        <div className="mt-7">
          <h1 className="text-2xl flex justify-center font-bold">
            Spending - Last 7 days
          </h1>
        </div>
        <div className="flex  items-end justify-center  h-2/5 mt-6 p-2  ">
          <div className="flex flex-col justify-center items-center ">
            <div className="group/item flex flex-col justify-center items-center">
              <div className="group/edit invisible group-hover/item:visible bg-black text-white text-xs flex justify-center items-center mb-2 p-1 rounded-md">
                $17,39
              </div>
              <div className=" h-[40px] w-[36px] bg-[#EC775F] rounded-md cursor-pointer hover:bg-[#FF9B86] "></div>
            </div>
            <h1 className="text-sm mt-2 text-[#98837F] flex items-center justify-center ">
              mon
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="group/item flex flex-col justify-center items-center">
              <div className="group/edit invisible group-hover/item:visible   bg-black text-white text-xs flex justify-center items-center mb-2 p-1 rounded-md">
                $34.56
              </div>
              <div className="h-[81px] w-[36px] bg-[#EC775F] rounded-md cursor-pointer hover:bg-[#FF9B86] "></div>
            </div>
            <h1 className="text-sm mt-2 text-[#98837F] flex items-center justify-center ">
              tue
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="group/item flex flex-col justify-center items-center">
              <div className="group/edit invisible group-hover/item:visible   bg-black text-white text-xs flex justify-center items-center mb-2 p-1 rounded-md">
                $52,30
              </div>
              <div className="h-[116px] w-[36px] bg-[#76B5BC] rounded-md cursor-pointer hover:bg-[#B4E0E5] "></div>
            </div>
            <h1 className="text-sm mt-2 text-[#98837F] flex items-center justify-center ">
              wed
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="group/item flex flex-col justify-center items-center">
              <div className="group/edit invisible group-hover/item:visible     bg-black text-white text-xs flex justify-center items-center mb-2 p-1 rounded-md">
                $31,25
              </div>
              <div className="h-[72px] w-[36px] bg-[#EC775F] rounded-md cursor-pointer hover:bg-[#FF9B86] "></div>
            </div>
            <h1 className="text-sm mt-2 text-[#98837F] flex items-center justify-center ">
              thu
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="group/item flex flex-col justify-center items-center">
              <div className="group/edit invisible group-hover/item:visible     bg-black text-white text-xs flex justify-center items-center mb-2 p-1 rounded-md">
                $23,39
              </div>
              <div className="h-[54px] w-[36px] bg-[#EC775F] rounded-md cursor-pointer hover:bg-[#FF9B86]"></div>
            </div>
            <h1 className="text-sm mt-2 text-[#98837F] flex items-center justify-center ">
              fri
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="group/item flex flex-col justify-center items-center">
              <div className="group/edit invisible group-hover/item:visible     bg-black text-white text-xs flex justify-center items-center mb-2 p-1 rounded-md">
                $43,26
              </div>
              <div className="h-[100px] w-[36px] bg-[#EC775F] rounded-md cursor-pointer hover:bg-[#FF9B86] "></div>
            </div>
            <h1 className="text-sm mt-2 text-[#98837F] flex items-center justify-center  ">
              sat
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="group/item flex flex-col justify-center items-center">
              <div className="group/edit invisible group-hover/item:visible    bg-black text-white text-xs flex justify-center items-center mb-2 p-1 rounded-md">
                $25,56
              </div>
              <div className="h-[59px] w-[36px] bg-[#EC775F] rounded-md cursor-pointer hover:bg-[#FF9B86] "></div>
            </div>
            <h1 className="text-sm mt-2 text-[#98837F] flex items-center justify-center ">
              sun
            </h1>
          </div>
        </div>
        <hr className="border border-red-100 mx-5 rounded-full mt-7" />
        <div className="flex justify-between mt-[2rem] ">
          <div className="ml-5">
            <h1 className="text-sm text-[#98837F] cursor-pointer ">
              Total this month
            </h1>
            <h1 className="text-4xl font-bold cursor-pointer ">$478.33</h1>
          </div>
          <div className="mr-5 flex flex-col justify-end items-end">
            <h1 className="text-sm text-[#98837F] cursor-pointer ">+2.4%</h1>
            <h1 className="text-sm text-[#98837F] cursor-pointer ">
              from last month
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
