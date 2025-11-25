"use client";

import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <Image
      src="/Capstone 1.png"
      alt="Description 1"
      width={1200}
      height={800}
      style={{ width: "100%", height: "auto" }}
    />
    <Image
      src="/Capstone 2.png"
      alt="Description 2"
      width={1200}
      height={800}
      style={{ width: "100%", height: "auto" }}
    />
    </div>
  );
}
