import { RiSofaLine } from "react-icons/ri";
import { IoIosBed } from "react-icons/io";
import { FaVectorSquare } from "react-icons/fa";
import Image from "next/image";
import { strapi } from "@/lib/strapi";
import { Card } from "@/components/ui/card";
import { FaHome, FaHouseUser } from "react-icons/fa";
import { PiBuildingApartmentLight } from "react-icons/pi";

export default async function AdsCard() {
  const { data } = await strapi.find("ads", {
    populate: {
      category: {
        fields: ["name", "slug"],
      },
      details: true,
    },
  });
  console.log(data);
  console.log(data[0].details);
  const user = await strapi.fetchUser();

  const getHousingIcon = (type) => {
    switch (type) {
      case "VILLA":
        return <FaHome className="text-green-400" />;
      case "APARTMENT":
        return <PiBuildingApartmentLight className="text-green-400" />;
      case "DETACHED":
        return <FaHouseUser className="text-green-400" />;
      default:
        return null;
    }
  };

  return (
    <div className="w-90 space-y-3 ">
      {data.map((item) => {
        const propertyDetail = item.details.find(
          (detail) => detail.__component === "property.property-details"
        );

        return (
          <Card>
            <div key={item.id}>
              <Image
                className="w-full rounded-t-lg"
                src="/house.png"
                alt="Açıklayıcı alternatif metin"
                height={100}
                width={300}
              />
              <div className="px-4 py-2 flex flex-col">
                <h1 className="font-bold mt-3">{item.title}</h1>
                <p className="font-thin text-gray-500 mb-2">
                  {item.city}, {item.district}
                </p>
                <p className="font-semibold">
                  {item.price.toLocaleString("tr-TR", {
                    style: "currency",
                    currency: "TRY",
                  })}
                </p>
                <hr className="text-gray-300 my-2" />
              </div>

              <div className="flex flex-wrap gap-10 px-4 pb-2">
                <div className="flex flex-row gap-1 items-center">
                  <IoIosBed className="text-green-400" />
                  <p className="text-gray-500">
                    {propertyDetail?.roomCount ?? "N/A"} Oda
                  </p>
                </div>
                <div className="flex flex-row gap-1 items-center">
                  <RiSofaLine className="text-green-400" />
                  <p className="text-gray-500">
                    {propertyDetail?.saloonCount ?? "N/A"} Salon
                  </p>
                </div>
              </div>

              <div className="px-4 pb-4 flex flex-row gap-9 items-center">
                <div className="flex flex-row gap-1 items-center">
                  <FaVectorSquare className="text-green-400" />
                  <p className="text-gray-500">
                    {propertyDetail?.meter ?? "N/A"} m²
                  </p>
                </div>

                <div className="flex flex-row gap-1 items-center">
                  {getHousingIcon(propertyDetail?.housingType)}
                  <p className="text-gray-500">{propertyDetail?.housingType}</p>
                </div>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
