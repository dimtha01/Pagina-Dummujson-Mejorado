
const Modal = ({ item }) => {
    return (
        <>
            <div className="modal fade" id={item.id} tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                        <div className="modal-header bg-dark text-light">
                            <h5 className="modal-title fs-5 text-center" id="exampleModalLabel">Detalle de {item.title}</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={item.images[2] || item.images[1] || item.images[0]} alt={item.title} width={720} className="img-fluid img-thumbnail rounded" />
                                </div>
                                <div className="col-md-6">
                                    <h2>{item.title}</h2>
                                    <p className="lead">
                                        <b>Marca:</b> {item.brand}<br />
                                        <b>Categoría:</b> {item.category}<br />
                                        <b>Stock:</b> {item.stock}<br />
                                        <b>Clasificación:</b> {item.rating}
                                    </p>
                                    <p className="lead small"><b>Descripción:</b> {item.description}</p>
                                    <h2 className="text-danger"><b className='text-success'>Precio:</b> {item.price}$</h2>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Modal