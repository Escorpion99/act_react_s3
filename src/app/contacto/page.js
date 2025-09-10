"use client";

import React from 'react'

export default function page() {
    return (
    <div className="p-8 bg-gray-50 min-h-screen">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
        Contacto
        </h1>
        <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Si tienes alguna pregunta, no dudes en contactarnos. Nuestro equipo estará encantado de ayudarte.
        </p>

        <div className="flex justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full text-center">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Información de Contacto</h2>
            <p className="text-gray-600 mb-2">
            Email: <a href="mailto:info@ejemplo.com" className="text-blue-500 hover:underline">info@ejemplo.com</a>
            </p>
            <p className="text-gray-600 mb-2">
            Teléfono: <a href="tel:+1234567890" className="text-blue-500 hover:underline">+1 (234) 567-890</a>
            </p>
            <p className="text-gray-600">
            Dirección: Calle Falsa 123, Ciudad Ejemplo, 12345
            </p>
        </div>
        </div>
    </div>
    );
}
