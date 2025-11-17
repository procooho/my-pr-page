import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <Image
      src="/resume1.png"
      alt="Resume"
      width={1200}
      height={800}
      style={{ width: "100%", height: "auto" }}
    />
    </div>
  );
}