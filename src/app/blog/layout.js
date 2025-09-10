import Link from 'next/link';

export const metadata = {
    title: 'Sección de Blog',
    description: 'Explora nuestros artículos de blog por categoría.',
};

export default function BlogLayout({ children }) {
    return (
    <div className="flex">
        <aside className="w-64 p-8 bg-gray-800">
        <h2 className="text-xl font-bold mb-4">Categorías</h2>
        <nav className="flex flex-col space-y-2">
            <Link href="/blog" className="hover:text-blue-600 transition-colors">
            Todos los Artículos
            </Link>
            <Link href="/blog/tecnologia" className="hover:text-blue-600 transition-colors">
            Tecnología
            </Link>
            <Link href="/blog/diseno" className="hover:text-blue-600 transition-colors">
            Diseño
            </Link>
            <Link href="/blog/productividad" className="hover:text-blue-600 transition-colors">
            Productividad
            </Link>
        </nav>
        </aside>

        <main className="flex-1 p-8">{children}</main>
    </div>
    );
}