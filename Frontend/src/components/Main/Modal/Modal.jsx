import React from 'react';
import Boton from '../Search/Boton/Boton';
import Input from '../Search/Input/Input';

const Modal = ({title}) => {
    return (<>
        <div className="p-3">
            <button onclick="openModal(true)" className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white focus:outline-none">
                Open Modal
            </button>
        </div>
        <div id="modal_overlay" className="fixed inset-0 bg-black bg-opacity-30 h-full w-full flex justify-center items-start md:items-center pt-10 md:pt-0">
            <div id="modal" className="transform relative md:h-5/6 bg-white rounded shadow-lg transition-opacity duration-300">
                <button className="absolute -top-3 -right-3 bg-red-500 hover:bg-red-600 text-2xl w-10 h-10 rounded-full focus:outline-none text-white">X</button>

                <div className="px-4 py-3 border-b border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-600">{title}</h2>
                </div>
                <div className="h-full">
                    <div className="m-3">
                        <Input placeholder="No. Acto" />
                        <Input placeholder="Tipo" />
                        <Input placeholder="Fecha de Resuelto" />
                    </div>
                    <div className="m-3">
                        <Input placeholder="Fecha de Recibo" />
                        <Input placeholder="Barrio / Urbanización" />
                        <Input placeholder="Estrato" />
                    </div>
                    <div className="m-3">
                        <Input placeholder="Uso" />
                        <Input placeholder="Área Predio" />
                        <Input placeholder="Área Construcción" />
                    </div>
                    <div className="m-3">
                        <Input placeholder="No. Pisos" />
                        <Input placeholder="Unidad de Vivienda" />
                        <Input placeholder="InOcupación" />
                    </div>
                    <div className="m-3">
                        <Input placeholder="Estacionamientos" />
                        <Input placeholder="Cédula Catrastal" />
                        <Input placeholder="Matricula Inmobiliaria" />
                    </div>
                    <div className="m-3">
                        <Input placeholder="Destino Licencia Construcción" />
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 px-4 py-3 border-t border-gray-200 w-full flex justify-center gap-3">
                    <Boton text="Editar" />
                </div>
            </div>
        </div>

    </>);
}

export default Modal
