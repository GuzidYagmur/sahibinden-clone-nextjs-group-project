import AdsCard from "@/components/ads-card";

import LogoutBtn from "@/components/logout-btn";
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
  console.log(data);
  console.log(data[0].details);
  const user = await strapi.fetchUser();

  return <div></div>;
}
