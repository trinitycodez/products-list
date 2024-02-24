'use client'

import Header from "@/components/header";
import Footer from "@/components/footer";
import DataProduct, { productData } from "./data-api";

import { NextPage } from "next";
import Link from "next/link";

const Home:NextPage = async () => {

  const products = new DataProduct([''])
  await products.receiveApi();
  const data:productData = products.data;

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 my-20">
        <ul className="text-app-primary flex flex-col gap-4 list-disc">
        {
          data && data.products.map((items)=>
            <Link key={items.id} href={`/products/${items.id}`}>
              <div key={items.id}>

              <li key={items.id} className="bg-app-grey p-4 cursor-pointer">{items.title}</li>
              </div>
            </Link>
          )
        }
        </ul>
      </main>
      <Footer />
    </>
  );
}

export default Home;