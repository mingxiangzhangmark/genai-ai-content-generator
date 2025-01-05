import React from "react";
import { UserProfile } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="p-5">
      <UserProfile />
    </div>
  );
}
