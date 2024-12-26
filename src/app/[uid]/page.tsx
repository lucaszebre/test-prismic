import { createClient } from "@/prismicio";

export default async function Page({
  params,
}: {
  params: {
    uid: string;
  };
}) {
  const client = createClient();

  const page = await client.getByUID("blog", params.uid);

  return <h1>{page.uid}</h1>;
}
