import Link from 'next/link';

export const metadata = {
    title: 'Sección de Productos',
    description: 'Explora nuestros productos por categoría.',
};

export default function ProductosLayout({ children }) {
    return (
    <div className="flex">
        <aside className="w-64 p-8 bg-gray-800">
        <h2 className="text-xl font-bold mb-4">Categorías</h2>
        <nav className="flex flex-col space-y-2">
            <Link href="/productos" className="hover:text-blue-600 transition-colors">
            Todos los Productos
            </Link>
            <Link href="/productos/electronicos" className="hover:text-blue-600 transition-colors">
            Electrónicos
            </Link>
            <Link href="/productos/ropa" className="hover:text-blue-600 transition-colors">
            Ropa
            </Link>
        </nav>
        </aside>

        <main className="flex-1 p-8">{children}</main>
    </div>
    );
}