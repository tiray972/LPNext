import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full h-[90vh] bg-blue-100 flex flex-col items-center justify-center text-center bg-cover bg-center px-4"
      style={{
          backgroundImage:
            "url('/images/image1.jpeg')",
        }}
    >
      <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
        Ferme de caractère à vendre
      </h1>
      <p className="text-xl text-white max-w-xl mb-8">
        381 m² habitables, 7 chambres, jardin, garage et 5 places de parking — un bien rare sur un terrain de 7318 m²
      </p>
      <Link href={"#contact"}>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full">
          Demander une visite
        </Button>
      </Link>
    </section>
  );
}