"use client";

import { ImageContainer, ImageSrc } from "@/components/ui/Image/Image";
import NextImage from "next/image";

const TestPage = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="flex w-full flex-col items-center gap-4">
        <div>
          Next (with fill)
          <ImageContainer className="h-[300px] w-[300px]">
            <ImageSrc asChild>
              <NextImage src={"https://fake-img.com/fake.jpg"} fill alt={"Cat"} />
            </ImageSrc>
          </ImageContainer>
          Next (with fill)
          <ImageContainer className="h-[300px] w-[300px]">
            <ImageSrc asChild>
              <NextImage src={"/cat.jpg"} fill alt={"Cat"} />
            </ImageSrc>
          </ImageContainer>
        </div>
      </div>
      <div className="flex w-full flex-col items-center gap-4">
        <div>
          Normal
          <ImageContainer className="h-[300px] w-[300px]">
            <ImageSrc className={"absolute inset-0 h-full w-full"} src={"/cat.jpg"} alt={"Cat"} />
          </ImageContainer>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
