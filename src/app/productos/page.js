"use client";
import Link from 'next/link';

const ProductosPage = () => {
    const productos = [
    { id: '1', nombre: 'Laptop', descripcion: 'La mejor opción para trabajo y productividad.' },
    { id: '2', nombre: 'Smartphone', descripcion: 'Tecnología de punta al alcance de tu mano.' },
    { id: '3', nombre: 'Tablet', descripcion: 'El balance perfecto entre portabilidad y rendimiento.' },
    ];

    return (
    <div className="p-8 bg-gray-50 min-h-screen">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
        Nuestros Productos
        </h1>
        <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Explora nuestra selección de los mejores dispositivos tecnológicos del mercado.
        </p>

        <div className="flex flex-col items-center space-y-4">
        {productos.map(producto => (
            <Link 
            key={producto.id} 
            href={`/productos/${producto.id}`} 
            className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center block"
            >
            <h2 className="text-2xl font-semibold text-gray-800">{producto.nombre}</h2>
            <p className="text-gray-500 mt-2">{producto.descripcion}</p>
            </Link>
        ))}
        </div>
    </div>
    );
};

export default ProductosPage;
