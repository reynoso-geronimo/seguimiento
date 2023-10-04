"use client";
import React from "react";
import { useState, useEffect } from "react";

const FormEditTicket = (props) => {
  const [form, setForm] = useState({
  
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        console.log("consultando");
      const cambios = await fetch(
        `http://localhost:3001/editar/ticket/${props.params.id}`,{
            method:"PUT",
            headers:{
                'Content-Type': 'application/json',

            },
            body:JSON.stringify(form)

        }
      );
      const resultado = await cambios.json();
      console.log(resultado);
    } catch (error) {}

   
  };

  return (
    <section className="bg-black">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 font-semibold text-black">
        <div className="p-6 space-y-4 bg-gray-200 ">
          <h4 className="font-bold text-black tex-xl">editar servicio </h4>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium text-black ">
                Numero del servicios
              </label>
              <input
                onChange={handleChange}
                type="num"
                name="numeroServicio"
                id="num-servicio"
                className="border rounded-lg focus:ring-blue-400 
            focus:border-gray-600 w-full p-2.5 bg-gray-200 border-gray-400 place-holder-gray-400 
            text-black"
              ></input>
              <label className="block mb-2 text-sm font-medium text-black ">
                Fecha del servicio
              </label>
              <input
                onChange={handleChange}
                type="date"
                name="fechaServicio"
                id="fecha-servicio"
                className="border rounded-lg focus:ring-blue-400 
            focus:border-gray-600 w-full p-2.5 bg-gray-200 border-gray-400 place-holder-gray-400 
            text-black"
              ></input>
              <label className="block mb-2 text-sm font-medium text-black ">
                Proveedor servicio
              </label>
              <input
                onChange={handleChange}
                type="text"
                name="proveedorServicio"
                id="servicio"
                className="border rounded-lg focus:ring-blue-400 
            focus:border-gray-600 w-full p-2.5 bg-gray-200 border-gray-400 place-holder-gray-400 
            text-black"
              ></input>
              <label className="block mb-2 text-sm font-medium text-black ">
                Presupuesto
              </label>
              <input
                onChange={handleChange}
                type="number"
                name="presupuesto"
                id="presupuesto-servicio"
                className="border rounded-lg focus:ring-blue-400 
            focus:border-gray-600 w-full p-2.5 bg-gray-200 border-gray-400 place-holder-gray-400 
            text-black"
              ></input>
              <label className="block mb-2 text-sm font-medium text-black ">
                Estado del servicio
              </label>
              <input
                onChange={handleChange}
                type="text"
                name="estadoServicio"
                id="estado-servicio"
                className="border rounded-lg focus:ring-blue-400 
            focus:border-gray-600 w-full p-2.5 bg-gray-200 border-gray-400 place-holder-gray-400 
            text-black"
              ></input>
              <label className="block mb-2 text-sm font-medium text-black ">
                cargar factura del servicio
              </label>
              <input
                onChange={handleChange}
                type="file"
                name="facturaServicio"
                id="factura-servicio"
                className="border rounded-lg focus:ring-blue-400 
            focus:border-gray-600 w-full p-2.5 bg-gray-200 border-gray-400 place-holder-gray-400 
            text-black"
              ></input>
              <label className="block mb-2 text-sm font-medium text-black ">
                Observaciones sobre la unidad , reporte de estado.
              </label>
              <textarea
                onChange={handleChange}
                type="date"
                name="observaciones"
                id="servicio"
                className="border rounded-lg focus:ring-blue-400 
            focus:border-gray-600 w-full p-2.5 bg-gray-200 border-gray-400 place-holder-gray-400 
            text-black"
              ></textarea>
            </div>
            <button
              type="submit"
              className=" text-cyan-700  w-24 rounded-3xl bg-zinc-900  ml-[400px]"
            >
              Editar servicio
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormEditTicket;
