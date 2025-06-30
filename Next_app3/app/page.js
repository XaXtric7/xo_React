import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-200 h-80 mx-auto my-5 bg-red-600">
      <Image
        className="object-contain mx-auto"
        fill
        src="https://www.bmw-kunexclusive-hyderabad.in/sites/default/files/2022-09/1366x450%20%282%29.jpg"
        alt="Slider image"
      />
    </div>
  );
}
