"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { clients } from "@/lib/constants";

export function Cards() {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased   items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={clients}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
