"use client";
import { useState } from "react";
import template from "@/utils/template";
import Image from "next/image";
import { Search } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const [search, setSearch] = useState("");

  const filteredTemplates = template.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <div className="p-10 my-5 mx-5 mb-5 rounded-lg bg-slate-200 dark:bg-slate-800 flex flex-col justify-center items-center">
        <h1 className="text-xl">What would you like to crate today?</h1>

        <div className="w-full flex justify-center">
          <div className="flex gap-2 items-center p-2 border border-gray-300 dark:border-gray-700 shadow-lg rounded-md bg-transparent my-5 w-[50%]">
            <Search className="text-primary" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent w-full outline-none text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5">
        {filteredTemplates.map((item) => (
          <Link key={item.slug} href={`/dashboard/template/${item.slug}`}>
            <div className="p-5 shadow-md rounded-md border flex flex-col gap-3 cursor-pointer hover:scale-105 transition-all">
              <Image src={item.icon} alt={item.name} width={50} height={50} />
              <h2 className="font-medium text-lg">{item.name}</h2>
              <p className="text-gray-500  line-clamp-3">{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
