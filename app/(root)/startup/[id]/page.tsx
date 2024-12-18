import { STARTUP_BY_ID_QUERY } from "@lib/queries";
import { client } from "@sanity/lib/client";
import { notFound } from "next/navigation";
import React from "react";

export const experimental_ppr = true;

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const post = await client.fetch(STARTUP_BY_ID_QUERY, { id });

  console.log(post.image);

  if (!post) return notFound();

  return <h1 className="text-3xl">{post.title}</h1>;
};

export default Page;
