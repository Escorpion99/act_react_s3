import Link from 'next/link';

const ProductoIndividualPage = ({ params }) => {
    const { id } = params;
    const descripcion = "Esta es una descripción detallada del producto. Aquí se pueden incluir especificaciones, características, imágenes y reseñas de los usuarios.";

    return (
    <div className="p-8 bg-gray-50 min-h-screen">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
        Producto: {id.charAt(0).toUpperCase() + id.slice(1)}
        </h1>
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
        <p className="text-lg text-gray-600 mb-6">
            {descripcion}
        </p>
        <Link href="/productos" className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            &larr; Volver a Productos
        </Link>
        </div>
    </div>
    );
};

export default ProductoIndividualPage;