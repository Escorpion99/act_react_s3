import React from 'react';
import Link from 'next/link';

const BlogPage = () => {
    const articulos = [
    { slug: 'introduccion-nextjs', titulo: 'Introducción a Next.js', descripcion: 'Un vistazo a las características principales del framework.' },
    { slug: 'react-server-components', titulo: 'Guía de React Server Components', descripcion: 'Cómo los componentes del servidor cambian la forma de renderizar.' },
    { slug: 'app-router-guia', titulo: 'Guía completa del App Router', descripcion: 'Todo lo que necesitas saber para empezar a usar el nuevo router.' },
    ];

    return (
    <div className="p-8 bg-gray-50 min-h-screen">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
        Nuestro Blog
        </h1>
        <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Lee nuestros últimos artículos sobre tecnología, desarrollo y diseño.
        </p>

        <div className="flex flex-col items-center space-y-4">
        {articulos.map(articulo => (
            <Link 
            key={articulo.slug} 
            href={`/blog/${articulo.slug}`} 
            className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow block"
            >
            <h2 className="text-2xl font-semibold text-gray-800">{articulo.titulo}</h2>
            <p className="text-gray-500 mt-2">{articulo.descripcion}</p>
            </Link>
        ))}
        </div>
    </div>
    );
};

export default BlogPage;
