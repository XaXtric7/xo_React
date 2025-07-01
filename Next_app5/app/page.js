"use client";
import { submitAction } from "@/actions/form";
import { useRef } from "react";

export default function Home() {
  let ref = useRef();

  return (
    <div className="w-2/3 mx-auto my-12">
      <form
        ref={ref}
        action={async (formData) => {
          await submitAction(formData);
          ref.current.reset();
        }}
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            id="name"
            className="text-black mx-4 bg-white"
            type="text"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="add">Address</label>
          <input
            name="add"
            id="add"
            className="text-black mx-4 bg-white"
            type="text"
            placeholder="Enter your address"
          />
        </div>
        <div>
          <button className="border border-white px-3 text-white hover:bg-white hover:text-black transition-colors duration-200">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
