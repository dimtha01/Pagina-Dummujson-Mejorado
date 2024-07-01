import React from 'react'
import Modal from './Modal'

const Card = ({ item }) => {
    return (
        <>
            <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-4 position-relative">
                <div className="card h-100">
                    <div className="card-header p-0">
                        <img src={item.thumbnail || item.images[2]} className="card-img-top img-fluid" alt="Product Thumbnail" />
                    </div>
                    <div className="card-body d-flex flex-column justify-content-between">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text text-success mb-2">{item.brand}</p>
                        <h5 className="card-text text-danger">{item.price}$</h5>
                        <div className="mt-auto">
                            <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target={`#${item.id}`}>
                                Detalles
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal key={item.id} item={item} />

        </>
    )
}

export default Card