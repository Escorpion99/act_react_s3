"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
        Página de Inicio
      </h1>
      <p className="text-lg text-center text-gray-600 mb-12">
        Bienvenido a nuestra página. Aquí encontrarás información sobre nuestros productos, blog y cómo contactarnos.
      </p>

      <div className="flex justify-center space-x-4">
        <Link href="/productos" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
          Productos
        </Link>
        <Link href="/blog" className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
          Blog
        </Link>
        <Link href="/contacto" className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors">
          Contacto
        </Link>
      </div>
    </div>
  );
}
