/* eslint-disable */

"use client";
import React from "react";
import { AnimatedTooltip } from "@/app/components/CoinUI";
const people = [
    {
        id: 1,
        name: "Daddy Tate",
        designation: "DADDY",
        image: "https://dd.dexscreener.com/ds-data/tokens/solana/4Cnk9EPnW5ixfLZatCPJjDB1PUtcRpVVgTQukm9epump.png?size=lg&key=b0d56d",
        address: "4Cnk9EPnW5ixfLZatCPJjDB1PUtcRpVVgTQukm9epump",
        link: "https://dexscreener.com/solana/4Cnk9EPnW5ixfLZatCPJjDB1PUtcRpVVgTQukm9epump",
      },
  {
    id: 2,
    name: "dogwifhat",
    designation: "WIF",
    image: "https://dd.dexscreener.com/ds-data/tokens/solana/21AErpiB8uSb94oQKRcwuHqyHF93njAxBSbdUrpupump.png?size=lg&key=dbe1af",
    address: "3B5wuUrMEi5yATD7on46hKfej3pfmd7t1RKgrsN3pump",
    link: "",
  },
  {
    id: 3,
    name: "MAGA",
    designation: "TRUMP",
    image: "https://dd.dexscreener.com/ds-data/tokens/solana/2LzZBZzehULhzdzNHKEh6bEGcEPDzy7wBbML6s2Nepht.png?size=lg&key=a67aa9",
    address: "2LzZBZzehULhzdzNHKEh6bEGcEPDzy7wBbML6s2Nepht",
    link: "",
  },
  {
    id: 4,
    name: "Popcat (SOL)",
    designation: "POPCAT",
    image: "https://dd.dexscreener.com/ds-data/tokens/solana/7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr.png?size=lg&key=af7c36",
    address: "7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr",
    link: "",
  },
  {
    id: 5,
    name: "Gigachad",
    designation: "GIGA",
    image: "https://dd.dexscreener.com/ds-data/tokens/solana/63LfDmNb3MQ8mw9MtZ2To9bEA2M71kZUUGq5tiJxcqj9.png?size=lg&key=deccd9",
    address: "63LfDmNb3MQ8mw9MtZ2To9bEA2M71kZUUGq5tiJxcqj9",
    link: "",
  },
  {
    id: 6,
    name: "Billy",
    designation: "BILLY",
    image: "https://dd.dexscreener.com/ds-data/tokens/solana/3B5wuUrMEi5yATD7on46hKfej3pfmd7t1RKgrsN3pump.png?size=lg&key=b6bc54",
    address: "3B5wuUrMEi5yATD7on46hKfej3pfmd7t1RKgrsN3pump",
    link: "",
  },
];

export function CoinToolTip() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
