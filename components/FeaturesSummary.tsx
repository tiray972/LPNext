import { BedDouble, Bath, Sofa, Car, Ruler, Layers } from "lucide-react";

const features = [
  { icon: <Sofa size={32} />, label: "Salon", value: 1 },
  { icon: <BedDouble size={32} />, label: "Chambres", value: 7 },
  { icon: <Bath size={32} />, label: "Salles de bain", value: 7 },
  { icon: <Car size={32} />, label: "Places parking", value: 5 },
  { icon: <Ruler size={32} />, label: "Surface", value: "381 m²" },
  { icon: <Layers size={32} />, label: "Terrain", value: "7318 m²" },
];

export default function FeaturesSummary() {
  return (
    <section className="bg-white py-12 px-6">
      <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">
        Informations clés
      </h2>
      <div className="flex flex-wrap justify-center gap-10 max-w-5xl mx-auto">
        {features.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center text-blue-800">
            <div className="mb-2">{item.icon}</div>
            <p className="font-semibold text-lg">
              {item.value} {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}