import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import FiltroCategorias from './FiltroCategorias'

const Header = () => {
    const [inputValue, setInputValue] = useState('');
    const handleChange = (event) => {
        setInputValue(event.target.value);
        console.log(inputValue)
    };

    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/Paginas/buscar', {
            state: inputValue,
        });

    };
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-header" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page" href="#">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Paginas/tienda" className="nav-link" href="#">Tienda</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Paginas/movil" className="nav-link" href="#">Movil</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Paginas/laptop" className="nav-link" href="#">Laptops</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categorias
                                </a>
                                <ul className="dropdown-menu">
                                    <FiltroCategorias />
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search" onSubmit={handleSubmit}>
                            <input value={inputValue} onChange={handleChange} className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Buscar</button>
                        </form>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header