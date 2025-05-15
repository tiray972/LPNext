"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const imageList = Array.from({ length: 10 }, (_, i) => `/images/image${i + 1}.jpeg`);

export default function GallerySection() {
  return (
    <section className="bg-blue-50 py-16 px-4 sm:px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
          Galerie Photo
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {imageList.map((src, i) => (
              <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3 p-2">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={src}
                    alt={`photo ${i + 1}`}
                    width={800}
                    height={500}
                    className="object-cover w-full h-60 md:h-48 lg:h-56"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-blue-700 hover:text-blue-900" />
          <CarouselNext className="text-blue-700 hover:text-blue-900" />
        </Carousel>
      </div>
    </section>
  );
}
