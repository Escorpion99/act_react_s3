import React from 'react';

const RopaPage = () => {
    const productosRopa = [
    { id: '1', nombre: 'Camiseta de Algodón', descripcion: 'Una camiseta básica y cómoda, perfecta para el uso diario.' },
    { id: '2', nombre: 'Jeans Clásicos', descripcion: 'Un diseño atemporal que combina con cualquier estilo.' },
    { id: '3', nombre: 'Chaqueta Deportiva', descripcion: 'Ideal para tus entrenamientos o para un look casual y moderno.' },
    ];

    return (
    <div className="p-8">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">
        Productos &gt; Ropa
        </h1>
        <p className="text-lg text-gray-600 mb-8">
        {productosRopa.length} productos encontrados.
        </p>

        <div className="flex flex-col space-y-4">
        {productosRopa.map(producto => (
            <div key={producto.id} className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800">{producto.nombre}</h2>
            <p className="text-gray-500 mt-2">{producto.descripcion}</p>
            </div>
        ))}
        </div>
    </div>
    );
};

export default RopaPage;