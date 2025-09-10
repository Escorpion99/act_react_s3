"use client";

const ElectronicosPage = () => {
    const productosElectronicos = [
    { id: '1', nombre: 'Smart TV 4K', descripcion: 'Disfruta de tus películas y series favoritas con una calidad de imagen impresionante.' },
    { id: '2', nombre: 'Auriculares Inalámbricos', descripcion: 'Audio de alta fidelidad y total libertad de movimiento.' },
    { id: '3', nombre: 'Consola de Videojuegos', descripcion: 'Lleva tu experiencia de juego al siguiente nivel con gráficos de última generación.' },
    ] ;

    return (
    <div className="p-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
        Productos &gt; Electrónicos
        </h1>
        <p className="text-lg text-gray-600 mb-8">
        {productosElectronicos.length} productos encontrados.
        </p>
        
        <div className="flex flex-col space-y-4">
        {productosElectronicos.map(producto => (
            <div key={producto.id} className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800">{producto.nombre}</h2>
            <p className="text-gray-500 mt-2">{producto.descripcion}</p>
            </div>
        ))}
        </div>
    </div>
    );
};

export default ElectronicosPage;