import { useState } from "react";
import useFetchv2 from "@/hooks/useFetchv2";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";

export default function Slider() {
  const [curIndex, setCurIndex] = useState(0);

  const { data: slider } = useFetchv2(
    `http://localhost:1337/api/slider?populate=*`
  );

  const prevSlide = () => {
  const newIndex = (curIndex - 1 + slider.length) % slider.length;

    setCurIndex(newIndex);
  };
  const nextSlide = () => {
    const newIndex = (curIndex + 1) % slider.length;

    setCurIndex(newIndex);
  };

  return (
    <div className="h-96 w-full rounded-md relative group">
      <div
        style={{
          backgroundImage: `url("http://127.0.0.1:1337${slider?.attributes?.images?.data[curIndex].attributes.url}")`,
        }}
        className="w-full h-full bg-center bg-cover duration-500 opacity-95"
      ></div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-y-[50%] left-5 text-2xl rounded-full bg-black/20 text-white cursor-pointer">
        <ArrowLeftCircle className="w-6 h-6" onClick={prevSlide} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-y-[50%] right-5 text-2xl rounded-full bg-black/20 text-white cursor-pointer">
        <ArrowRightCircle className="w-6 h-6" onClick={nextSlide} />
      </div>
    </div>
  );
}
