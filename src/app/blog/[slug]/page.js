import Link from 'next/link';

const ArticuloIndividualPage = ({ params }) => {
    const { slug } = params;
    const contenidoArticulo = `
    Este es el contenido completo del artículo con el slug: "${slug}". 
    Aquí puedes incluir párrafos, imágenes, listas y más,
    cargando la información desde una base de datos o una API.
    El slug en la URL nos permite identificar qué artículo específico mostrar.
    `;

    return (
    <div className="p-8 bg-gray-50 min-h-screen">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
        Artículo: {slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ')}
        </h1>
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
        <p className="text-lg text-gray-600 mb-6 whitespace-pre-wrap">
            {contenidoArticulo}
        </p>
        <Link href="/blog" className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            &larr; Volver al Blog
        </Link>
        </div>
    </div>
    );
};

export default ArticuloIndividualPage;
