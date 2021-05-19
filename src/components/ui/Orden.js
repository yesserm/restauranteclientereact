import React from 'react';

const Orden = ({orden}) => {
    return ( 
        <div className="sm:w-1/2 lg:w-1/3 px-2 mb-4">
            <div className="p-3 shadow-md bg-white">
                <h1 className="text-yellow-600 text-lg font-bold"> {orden.id}</h1> 
                {orden.orden.map(platillos => (
                    <p className="text-gray-600"> {platillos.cantidad} {platillos.nombre}</p>
                ))}

                <p className="text-gray-700 font-bold">Total a pagar: $ {orden.total}</p>
            </div>
        </div>
     );
}
 
export default Orden;