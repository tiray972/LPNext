import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="w-full h-[90vh] bg-blue-100 flex flex-col items-center justify-center text-center bg-cover bg-center px-4"
      style={{
        backgroundImage: "url('/images/image1.jpeg')",
      }}
    >
      <h1 className="text-4xl sm:text-6xl font-bold text-white drop-shadow-lg mb-6">
        Votre havre de paix avec spa et piscine chauffée
      </h1>
      <p className="text-xl text-white max-w-2xl mb-8 drop-shadow-md">
        Piscine intérieure chauffée accessible toute l’année, jacuzzi intégré,
        7 suites raffinées et un cadre verdoyant à 30 min de Lyon. Une propriété
        de prestige au cœur de la Dombes.
      </p>
      <Link href="#contact">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full">
          Demander une visite privée
        </Button>
      </Link>
    </section>
  );
}
