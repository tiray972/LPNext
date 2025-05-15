"use client";
import { useState } from "react";

// Définir un type pour les clés de formData
type FormField = "name" | "surname" | "phone" | "email";

export default function ContactSection() {
  const [formData, setFormData] = useState<Record<FormField, string>>({
    name: "",
    surname: "",
    phone: "",
    email: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Envoi en cours...");

    const message = `
      Nom: ${formData.name}
      Prénom: ${formData.surname}
      Téléphone: ${formData.phone}
      Email: ${formData.email}
    `;

    const email = {
      name: formData.name,
      surname: formData.surname,
      message: message.trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(email),
      });

      if (response.ok) {
        setStatus("Message envoyé avec succès !");
        setFormData({ name: "", surname: "", phone: "", email: "" });
      } else {
        setStatus("Échec de l'envoi. Veuillez réessayer.");
      }
    } catch (error) {
      console.error("Erreur :", error);
      setStatus("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <section className="bg-blue-100 py-16 px-4 sm:px-10">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          Contactez-nous
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nom et Prénom côte à côte */}
          <div className="flex gap-4">
            {(["name", "surname"] as FormField[]).map((field) => (
              <div key={field} className="w-1/2">
                <label className="block mb-1 text-sm font-semibold capitalize">
                  {field === "name" ? "Nom" : "Prénom"}
                </label>
                <input
                  type="text"
                  name={field}
                  placeholder={`Votre ${field === "name" ? "nom" : "prénom"}`}
                  value={formData[field]}
                  onChange={(e) =>
                    setFormData({ ...formData, [field]: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            ))}
          </div>

          {/* Téléphone et Email */}
          {(["phone", "email"] as FormField[]).map((field) => (
            <div key={field}>
              <label className="block mb-1 text-sm font-semibold capitalize">
                {field === "phone" ? "Numéro" : "Email"}
              </label>
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                placeholder={`Votre ${field === "phone" ? "numéro" : "email"}`}
                value={formData[field]}
                onChange={(e) =>
                  setFormData({ ...formData, [field]: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          ))}

          <button
            type="submit"
            className="bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition"
          >
            Envoyer
          </button>
        </form>

        {status && (
          <p className="mt-4 text-sm text-center text-blue-700 font-medium">
            {status}
          </p>
        )}
      </div>
    </section>
  );
}
