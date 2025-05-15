export default function LocationMap() {
  return (
    <section className="bg-white py-16 px-4 sm:px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Localisation</h2>
        <div className="w-full h-[400px] rounded-md overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11157.36515450631!2d4.827264523302708!3d45.75781306460939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea4b011e27d7%3A0x40f5b81c5938e50!2sLyon!5e0!3m2!1sfr!2sfr!4v1715766965348!5m2!1sfr!2sfr"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
          />

        </div>
      </div>
    </section>
  );
}
