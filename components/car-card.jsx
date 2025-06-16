"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import {
  FaGasPump,
  FaRoad,
  FaPalette,
  FaCalendarAlt,
  FaStore,
} from "react-icons/fa";

export default function CarCard() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setCars(data.cars || []);
      })
      .catch((err) => console.error("Veri çekme hatası:", err));
  }, []);

  return (
    <div className="w-90 space-y-3 mt-4">
      {cars.length === 0 && <p>Yükleniyor...</p>}
      {cars.map((car) => (
        <Card key={car.id}>
          <div className="w-full h-[200px] object-cover rounded-t-lg">
            <h3>{car.ad}</h3>
          </div>
          <div className="px-4 py-2 flex flex-col">
            <h1 className="font-bold mt-3">{car.ad}</h1>
            <p className="font-thin text-gray-500 mb-2">
              {car.sehir} - {car.marka}
            </p>
            <p className="font-semibold">
              {car.fiyat.toLocaleString("tr-TR", {
                style: "currency",
                currency: "TRY",
              })}
            </p>
            <hr className="text-gray-300 my-2" />
          </div>

          <div className="flex flex-wrap gap-10 px-4 pb-2">
            <div className="flex flex-row gap-1 items-center">
              <FaRoad className="text-blue-500" />
              <p className="text-gray-500">
                {car.kilometre.toLocaleString("tr-TR")} km
              </p>
            </div>
            <div className="flex flex-row gap-1 items-center">
              <FaGasPump className="text-blue-500" />
              <p className="text-gray-500">{car.yakit}</p>
            </div>
          </div>

          <div className="px-4 pb-4 flex flex-wrap gap-9 items-center">
            <div className="flex flex-row gap-1 items-center">
              <FaPalette className="text-blue-500" />
              <p className="text-gray-500">{car.renk}</p>
            </div>
            <div className="flex flex-row gap-1 items-center">
              <FaCalendarAlt className="text-blue-500" />
              <p className="text-gray-500">{car.model_yili}</p>
            </div>
            <div className="flex flex-row gap-1 items-center">
              <FaStore className="text-blue-500" />
              <p className="text-gray-500">{car.satici}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
