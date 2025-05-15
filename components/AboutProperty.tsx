import Image from "next/image";

export default function AboutProperty() {
  return (
    <section className="bg-white py-16 px-4 sm:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <Image
            src="/images/image2.jpeg"
            alt="Maison vue extérieure"
            width={600}
            height={400}
            className="rounded-lg shadow-md object-cover w-full"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            Un lieu de vie d'exception
          </h2>
          <p className="text-gray-700 text-lg">
            Nichée sur un terrain de plus de 7300 m², cette maison de 381 m² offre 10 pièces, dont 7 chambres et 7 salles de bain. Idéale pour une grande famille ou une maison d’hôtes. Elle allie confort moderne, grands espaces et calme absolu.
          </p>
        </div>
      </div>
    </section>
  );
}