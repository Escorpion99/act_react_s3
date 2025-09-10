
const DocsPage = ({ params }) => {
    const { slug } = params;

    const titulo = slug ? slug[slug.length - 1] : 'Documentación';
    
    const breadcrumbs = ['Docs', ...slug];

    return (
    <div className="p-8 bg-gray-50 min-h-screen">

        <nav className="text-gray-500 text-sm mb-4">
        {breadcrumbs.map((segmento, index) => (
            <span key={index}>
            <span className="capitalize">{segmento.replace(/-/g, ' ')}</span>
            {index < breadcrumbs.length - 1 && <span className="mx-1"> &gt; </span>}
            </span>
        ))}
        </nav>

        <h1 className="text-4xl font-bold mb-4 text-gray-800">
        {titulo.charAt(0).toUpperCase() + titulo.slice(1).replace(/-/g, ' ')}
        </h1>
        
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            Contenido de la ruta
        </h2>
        <p className="text-lg text-gray-600 mb-4">
            Esta página renderiza la documentación para la ruta:
        </p>
        <ul className="list-disc list-inside bg-gray-100 p-4 rounded-lg">
            {slug.map((segmento, index) => (
            <li key={index} className="text-blue-600 font-mono">
                {segmento}
            </li>
            ))}
        </ul>
        <p className="mt-6 text-gray-700">
            Este tipo de ruta es ideal para estructuras de documentación, blogs con categorías anidadas o cualquier jerarquía de páginas.
        </p>
        </div>
    </div>
    );
};

export default DocsPage;