import { FaBath } from "react-icons/fa";
import { IoIosBed } from "react-icons/io";
import { FaVectorSquare } from "react-icons/fa";
import Image from "next/image";

export default function Card() {
  return (
    <div className="w-90">
      <Image
        className=" flex items-center w-full"
        src="/house.png"
        alt="Açıklayıcı alternatif metin"
        height={100}
        width={300}
      />
      <div className="px-4 w-90 flex flex-col ">
        <h1 className="font-bold mt-3">Wilshire Victoria</h1>
        <p className="font-thin text-gray-500 mb-2">
          10700 Wilshire Blvd, Los Angeles, CA 90024
        </p>
        <p className="font-semibold">$10 000.00</p>
      </div>
      <div className="flex flex-wrap gap-10 px-4">
        <div className="flex flex-row gap-1 items-center">
          <span>
            <IoIosBed className="text-green-400" />
          </span>
          <p className="text-gray-500 ">6 Rooms</p>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <span>
            <FaBath className="text-green-400" />
          </span>
          <p className="text-gray-500">3 Baths</p>
        </div>
      </div>
      <div className="px-4 w-90">
        <div className="flex flex-row gap-1 items-center">
          <span>
            <FaVectorSquare className="text-green-400" />
          </span>
          <p className="text-gray-500">90 sq</p>
        </div>
      </div>
    </div>
  );
}
