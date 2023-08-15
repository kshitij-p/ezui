"use client";
import NextImage from "next/image";
import { ImageRoot, ImageFallback, ImageSrc, ImageSkeleton, ImageFallbackValue } from "@/components/ui/Image/Image";

const TestPage = () => {
  return (
    <section>
      <div className="grid grid-cols-2 flex-wrap">
        <div className="flex w-full flex-col items-center gap-4 flex-wrap">
          <span>{"Next img - img doesn't exist"}</span>
          <ImageRoot className="h-[150px] w-[150px]">
            <ImageSrc asChild src={"/fake-img.com/fake.jpg"} alt={"Ocean and the horizon"}>
              <NextImage fill src={"/fake-img.com/fake.jpg"} alt={"Ocean and the horizon"} />
            </ImageSrc>
            <ImageFallback>
              <ImageFallbackValue />
            </ImageFallback>
            <ImageSkeleton />
          </ImageRoot>
          <span>{"Next img - img exists"}</span>
          <ImageRoot className="h-[150px] w-[150px]">
            <ImageSrc
              asChild
              src={
                "https://images.unsplash.com/photo-1505063885677-21ba33183857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80"
              }
              alt={"Ocean and the horizon"}
            >
              <NextImage
                fill
                src={
                  "https://images.unsplash.com/photo-1505063885677-21ba33183857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80"
                }
                alt={"Ocean and the horizon"}
              />
            </ImageSrc>
            <ImageFallback>
              <ImageFallbackValue />
            </ImageFallback>
            <ImageSkeleton />
          </ImageRoot>
          <span>{"Next img - skeleton delayed 100ms"}</span>
          <ImageRoot className="h-[150px] w-[150px]">
            <ImageSrc
              asChild
              src={
                "https://images.unsplash.com/photo-1505063885677-21ba33183857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80"
              }
              alt={"Ocean and the horizon"}
            >
              <NextImage
                fill
                src={
                  "https://images.unsplash.com/photo-1505063885677-21ba33183857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80"
                }
                alt={"Ocean and the horizon"}
              />
            </ImageSrc>
            <ImageFallback>
              <ImageFallbackValue />
            </ImageFallback>
            <ImageSkeleton delayMs={100} />
          </ImageRoot>
        </div>
        <div className="flex w-full flex-col items-center gap-4 flex-wrap">
          <span>{"Native img - img doesn't exist"}</span>
          <ImageRoot className="h-[150px] w-[150px]">
            <ImageSrc src={"/fake-img.com/fake.jpg"} alt={"Ocean and the horizon"} />
            <ImageFallback>
              <ImageFallbackValue />
            </ImageFallback>
            <ImageSkeleton />
          </ImageRoot>
          <span>{"Native img - img "}</span>
          <ImageRoot className="h-[150px] w-[150px]">
            <ImageSrc
              src={
                "https://images.unsplash.com/photo-1505063885677-21ba33183857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80"
              }
              alt={"Ocean and the horizon"}
            />
            <ImageFallback>
              <ImageFallbackValue />
            </ImageFallback>
            <ImageSkeleton />
          </ImageRoot>
          <span>{"Next img - skeleton delayed 100ms"}</span>
          <ImageRoot className="h-[150px] w-[150px]">
            <ImageSrc
              src={
                "https://images.unsplash.com/photo-1505063885677-21ba33183857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80"
              }
              alt={"Ocean and the horizon"}
            />
            <ImageFallback>
              <ImageFallbackValue />
            </ImageFallback>
            <ImageSkeleton delayMs={100} />
          </ImageRoot>
        </div>
      </div>
    </section>
  );
};

export default TestPage;
