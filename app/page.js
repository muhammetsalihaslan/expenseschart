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
        <div>
          <h1>Spending - Last 7 days</h1>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
