// components/ContentSection.tsx
import Image from "next/image";
import Link from "next/link";

interface ContentSectionProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  text: string;
  buttonText: string;
  buttonLink: string;
}

export default function ContentSection({
  imageSrc,
  imageAlt,
  title,
  text,
  buttonText,
  buttonLink,
}: ContentSectionProps) {
  return (
    <section className="py-8 px-4 sm:px-6 md:px-20 2xl:px-96 flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
      <div className="md:w-1/2">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={800}
          height={350}
          className="rounded-lg aspect-video object-cover shadow-md"
        />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-4">
          {title}
        </h2>
        <p className="text-blue-800 mb-4">{text}</p>
        <Link href={buttonLink}>
          <button className="px-6 py-3 rounded-full text-white bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
            {buttonText}
          </button>
        </Link>
      </div>
    </section>
  );
}
