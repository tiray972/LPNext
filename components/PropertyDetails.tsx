"use client";

import {
  Sofa,
  BedDouble,
  Bath,
  Warehouse,
} from "lucide-react"; // Icônes shadcn/lucide
import Link from "next/link";

const features = [
  { icon: <Sofa className="w-8 h-8" />, label: "Salon", value: 1 },
  { icon: <BedDouble className="w-8 h-8" />, label: "Chambres", value: 2 },
  { icon: <Bath className="w-8 h-8" />, label: "Salles de bain", value: 2 },
  { icon: <Warehouse className="w-8 h-8" />, label: "Garage", value: 1 },
];

export default function PropertyDetails() {
  return (
    <section className="py-16 px-4 md:px-10 text-center bg-white text-black">
      <h2 className="text-4xl font-bold mb-10">Informations et équipements</h2>

      <div className="flex flex-wrap justify-center gap-10 mb-10">
        {features.map((item, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            {item.icon}
            <p className="text-lg font-semibold">
              {item.value} {item.label}
            </p>
          </div>
        ))}
      </div>

      <p className="max-w-3xl mx-auto text-gray-700 mb-6">
        Cette propriété offre un cadre de vie idéal. Personnalisez ce paragraphe
        pour raconter une histoire ou apporter plus de détails à vos visiteurs.
      </p>

      <Link href="#contact">
        <span className="text-lg font-bold underline hover:text-yellow-600 transition">
          Plus d'infos
        </span>
      </Link>
    </section>
  );
}
