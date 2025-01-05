// "use client";
// import React, { useState, useEffect } from "react";
// import { runAi } from "./actions/ai";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import ReactMarkdown from "react-markdown";

// export default function page() {
//  // state
//  const [response, setResponse] = useState("");
//  const [loading, setLoading] = useState(false);
//   const [query, setQuery] = useState("");
//  const handleClick = async (e: React.FormEvent<HTMLFormElement>) => {
//    e.preventDefault();
//       setLoading(true);
//     try {
//   const data = await runAi(query);
//   setResponse(data);
//   } catch (err) {
//   console.error(err);
//   } finally {
//   setLoading(false);
//   }
//  };
//  return (
//   <div className="m-5">
//   <form onSubmit={handleClick}>
//   <Input
//   className="mb-5"
//   placeholder="Write something"
//   value={query}
//   onChange={(e) => setQuery(e.target.value)}
//   />
//   <Button>Generate with AI</Button>
//   </form>
//   <Card className="mt-5">
//         <CardHeader>AI Response will appear here...</CardHeader>
//         <CardContent>
//           {loading ? (
//             <div>Loading...</div>
//           ) : (
//             <ReactMarkdown>{response}</ReactMarkdown>
//           )}
//         </CardContent>
//       </Card>

//   </div>
//  );
// }


import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SignInModal from "@/components/modal/sign-in-modal";
import PromoCard from "@/components/cards/promo-card";

export default function Home() {
  return (
    <>
      <div
        className="relative bg-cover bg-center"
        style={{ backgroundImage: 'url("/background.png")', height: "50vh" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#010818] z-0"></div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center">
            <SignInModal />
            <h1 className="text-white text-7xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
              AI Content Generator
            </h1>
            <p className="text-white mb-5">
              Generate AI content for your blog, website, or social media with a
              single click and more
            </p>
            <Link href="/dashboard">
              <Button variant="outline">Get started</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <PromoCard
              title="Extensive Template Library"
              description="Choose from a wide range of templates for your content needs"
              link="/dashboard"
            />

            <PromoCard
              title="SEO Optimized Content"
              description="Get SEO optimized content for your blog or website"
              link="/dashboard"
            />

            <PromoCard
              title="Social Media Posts"
              description="Generate content for your social media posts"
              link="/dashboard"
            />

            <PromoCard
              title="AI Content Generator"
              description="Generate AI content for your blog, website, or social media with a single click"
              link="/dashboard"
            />
          </div>
        </div>
      </div>

      <footer className="py-4 text-center border-t-2">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} AI Content Generator. All rights
          reserved.
        </p>
      </footer>
    </>
  );
}
