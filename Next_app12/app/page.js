"use client";
import Image from "next/image";

export default function Home() {
  // console.log("The ID is:", process.env.THE_ID);
  // console.log("The secret is:", process.env.THE_SECRET);

  return (
    <div>
      This is the home page of the app The ID is {process.env.THE_ID} and the
      secret is {process.env.THE_SECRET}
    </div>
  );
}
