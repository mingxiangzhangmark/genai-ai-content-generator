"use client";
import React from "react";
import { useUsage } from "@/context/usage";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Usage() {
  const { count, subscribed } = useUsage();

  // const credits = Number(process.env.NEXT_PUBLIC_FREE_TIER_USAGE);
  const credits = 10000;
  const percentage = (count / credits) * 100;
  // const percentage = subscribed ? 100 : Math.min((count / credits) * 100, 100);

  return (
    <div className="m-2">
      <div className="rounded-lg shadow border p-2">
        <h2 className="font-medium">Credits</h2>

        <div className="h-2 bg-slate-500 w-full rounded-full mt-3">
          <div
            className="h-2 bg-slate-200 rounded-full"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>

        <h2 className="text-sm my-2">
          {subscribed
            ? `Unlimited credits`
            : `${count} / ${credits} credit used`}
          {/* {count} / {credits} credit used */}
        </h2>
      </div>

      <Link href="/membership">
        <Button className="w-full my-3" variant="secondary">
          Upgrade
        </Button>
      </Link>
    </div>
  );
}
