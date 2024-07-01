import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Card from '../components/Card';

const Paginas = () => {
    const params = useParams(); // Obtener parámetros de la URL
    const [datos, setDatos] = useState([]); // Estado para almacenar los datos obtenidos de la API
    const [titulo, setTitulo] = useState(""); // Estado para almacenar el título dinámico de la página
    const location = useLocation(); // Obtener la ubicación actual de la página
    const valueSearch = location.state; // Obtener el valor de búsqueda de la ubicación actual
    const pathname = window.location.pathname; // Obtener la ruta actual de la página
    let API; // Variable para almacenar la URL de la API según la ruta actual

    useEffect(() => {
        // Función useEffect para cargar datos cuando cambia la ruta, params.id o valueSearch
        if (pathname === "/Paginas/tienda") {
            // Configurar título y URL de la API para la página "Tienda"
            setTitulo("Tienda");
            API = "https://dummyjson.com/products";
        } else if (pathname === "/Paginas/movil") {
            // Configurar título y URL de la API para la página "Móviles"
            setTitulo("Móviles");
            API = "https://dummyjson.com/products/category/smartphones";
        } else if (pathname === "/Paginas/laptop") {
            // Configurar título y URL de la API para la página "Laptops"
            setTitulo("Laptops");
            API = "https://dummyjson.com/products/category/laptops";
        } else if (pathname === `/Paginas/categorias/${params.id}`) {
            // Configurar título y URL de la API para la página de categoría dinámica
            setTitulo(`Categoría: ${params.id}`);
            API = `https://dummyjson.com/products/category/${params.id}`;
        } else if (pathname === "/Paginas/buscar" && valueSearch) {
            // Configurar título y URL de la API para la página de búsqueda con el valor específico
            setTitulo(`Búsqueda: ${valueSearch}`);
            API = `https://dummyjson.com/products/search?q=${valueSearch}`;
        }

        const getDatos = async () => {
            // Función asincrónica para obtener datos de la API
            try {
                const response = await fetch(API); // Hacer solicitud a la API
                const data = await response.json(); // Convertir respuesta a formato JSON
                setDatos(data.products); // Actualizar el estado con los datos obtenidos
            } catch (error) {
                console.error(error); // Manejar errores de solicitud
            }
        };

        getDatos(); // Llamar a la función para obtener datos al cargar la página o cambiar de ruta
    }, [pathname, params.id, valueSearch]); // Dependencias que desencadenan la actualización de useEffect

    return (
        <>
            <div className="container">
                <h1 className="text-center py-3 lead display-6">Todos los {titulo} <span className="badge rounded-pill text-bg-light">{datos.length}</span></h1>
                <div className="row">
                    {datos && datos.map((item) => (
                        <Card key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Paginas;
