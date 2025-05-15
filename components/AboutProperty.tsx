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
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            Nichée dans un écrin de verdure de plus de <strong>7300 m²</strong>, cette propriété unique de <strong>381 m² habitables</strong> se compose de <strong>10 pièces spacieuses</strong> dont <strong>7 suites élégantes avec salles de bain privatives</strong>.
          </p>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            Offrant à la fois <strong>calme, intimité</strong> et <strong>prestations haut de gamme</strong>, elle conviendra parfaitement à une grande famille, un projet de <strong>maison d’hôtes de charme</strong>, ou l’organisation de <strong>séminaires privés</strong>.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Chaque détail a été pensé pour offrir un cadre de vie harmonieux : <strong>matériaux nobles</strong>, <strong>volumes lumineux</strong>, et <strong>ouverture sur la nature</strong>. Un bien rare, prêt à vous accueillir.
          </p>
        </div>
      </div>
    </section>
  );
}
