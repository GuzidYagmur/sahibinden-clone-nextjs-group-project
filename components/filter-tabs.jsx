"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import AdsCard from "./ads-card";
import CarCard from "./car-card";

export default function FilterTabs() {
  const [priceRange, setPriceRange] = useState([100, 1000000]);
  const [selectedTab, setSelectedTab] = useState("emlak");

  return (
    <div className="bg-[#001F54] text-white p-6 rounded-md max-w-4xl mx-auto">
      <Tabs
        value={selectedTab}
        onValueChange={setSelectedTab}
        className="space-y-4"
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="emlak">Emlak</TabsTrigger>
          <TabsTrigger value="arac">Araç</TabsTrigger>
        </TabsList>

        <TabsContent
          value="emlak"
          className="bg-white text-black rounded-md p-6 "
        >
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm mb-1">Tür</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Seçiniz" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="satılık">Satılık</SelectItem>
                  <SelectItem value="kiralık">Kiralık</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm mb-1">Şehir</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="istanbul">İstanbul</SelectItem>
                  <SelectItem value="ankara">Ankara</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm mb-1">Konut Tipi</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apartment">Apartman Dairesi</SelectItem>
                  <SelectItem value="villa">Villa</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm mb-1">Oda Sayısı</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="col-span-2">
              <label className="block text-sm mb-1">Fiyat Aralığı</label>
              <Slider
                min={100}
                max={1000000}
                step={1000}
                value={priceRange}
                onValueChange={setPriceRange}
              />
              <div className="text-sm mt-1">
                ${priceRange[0].toLocaleString()} — $
                {priceRange[1].toLocaleString()}
              </div>
            </div>

            <div className="flex items-end">
              <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-300">
                Filter Results
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent
          value="arac"
          className="bg-white text-black rounded-md p-6"
        >
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm mb-1">Marka</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bmw">BMW</SelectItem>
                  <SelectItem value="audi">Audi</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm mb-1">Model Yılı</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2020">2020</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="col-span-3">
              <label className="block text-sm mb-1">Fiyat Aralığı</label>
              <Slider
                min={5000}
                max={1000000}
                step={500}
                value={priceRange}
                onValueChange={setPriceRange}
              />
              <div className="text-sm mt-1">
                ₺{priceRange[0].toLocaleString()} — ₺
                {priceRange[1].toLocaleString()}
              </div>
            </div>

            <div className="flex items-end col-span-3">
              <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-300">
                Sonuçları Filtrele
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      {selectedTab === "emlak" && <AdsCard />}
      {selectedTab === "arac" && <CarCard />}
    </div>
  );
}
