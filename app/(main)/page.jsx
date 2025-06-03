import Header from "@/components/header";
import LogoutBtn from "@/components/logout-btn";
import { strapi } from "@/lib/strapi";

export default async function Home() {
  const { data } = await strapi.find("ads", {
    populate: {
      category: {
        fields: ["name", "slug"],
      },
      detail: true,
    },
  });
  console.log(data);
  console.log(data[0].detail);
  const user = await strapi.fetchUser();

  return (
    <div>
      <Header/>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.title} -{" "}
            {item.price.toLocaleString("tr-TR", {
              style: "currency",
              currency: "TRY",
            })}
            {item.detail.find(
              (detail) =>
                detail.__component.includes(item.category.slug).housingType
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
