import AdsCard from "@/components/ads-card";
import CarCard from "@/components/car-card";
import FilterCard from "@/components/filters-card";
import Header from "@/components/header";
import { strapi } from "@/lib/strapi";

export default async function Home() {
  const { data } = await strapi.find("ads", {
    populate: {
      category: {
        fields: ["name", "slug"],
      },
      details: true,
    },
  });
  try {
    console.log("Ad sayısı:", data.length);
  } catch (e) {
    console.error("Log hatası", e);
  }

  const user = await strapi.fetchUser();

  return (
    <div>
      <Header />
      <FilterCard />
    </div>
  );
}
