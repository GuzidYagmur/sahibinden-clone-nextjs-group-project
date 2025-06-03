import { redirect } from "next/dist/server/api-utils";

export default async function Page() {
  const user = await strapi.fetchUser();
  if (!user) {
    return redirect("/giris");
  }
  console.log(user);

  return <div>ilan ekleme sayfası</div>;
}
