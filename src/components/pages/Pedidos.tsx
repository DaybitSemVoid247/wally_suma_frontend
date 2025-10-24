// pedidos.tsx
import { useState } from "react";

interface Plato {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  descripcion: string;
}

export const Pedidos = () => {
  const platos: Plato[] = [
    {
      id: 1,
      nombre: "Lasaña Bolognesa",
      categoria: "Plato Principal",
      precio: 45.5,
      descripcion: "Lasaña tradicional con carne y bechamel",
    },
    {
      id: 2,
      nombre: "Ensalada César",
      categoria: "Entrada",
      precio: 28.0,
      descripcion: "Lechuga, crutones, parmesano y aderezo césar",
    },
    {
      id: 3,
      nombre: "Tiramisú",
      categoria: "Postre",
      precio: 32.0,
      descripcion: "Postre italiano con café y mascarpone",
    },
    {
      id: 4,
      nombre: "Sopa del día",
      categoria: "Entrada",
      precio: 18.0,
      descripcion: "Sopa casera preparada diariamente",
    },
    {
      id: 5,
      nombre: "Lomo Saltado",
      categoria: "Plato Principal",
      precio: 52.0,
      descripcion: "Carne salteada con vegetales y papas",
    },
  ];

  const [categoriaSeleccionada, setCategoriaSeleccionada] =
    useState<string>("Todas");
  const categorias = [
    "Todas",
    ...Array.from(new Set(platos.map((p) => p.categoria))),
  ];
  const platosFiltrados =
    categoriaSeleccionada === "Todas"
      ? platos
      : platos.filter((p) => p.categoria === categoriaSeleccionada);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Menú del Restaurante</h2>

      <div className="flex gap-2 mb-6">
        {categorias.map((categoria) => (
          <button
            key={categoria}
            onClick={() => setCategoriaSeleccionada(categoria)}
            className={`px-4 py-2 rounded-lg font-medium ${
              categoriaSeleccionada === categoria
                ? "bg-cyan-600 text-white"
                : "bg-slate-200 text-slate-700 hover:bg-slate-300"
            }`}
          >
            {categoria}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {platosFiltrados.map((plato) => (
          <div key={plato.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-slate-800">
                {plato.nombre}
              </h3>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                {plato.categoria}
              </span>
            </div>

            <p className="text-slate-600 text-sm mb-4">{plato.descripcion}</p>

            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-cyan-600">
                Bs. {plato.precio.toFixed(2)}
              </span>
              <button className="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700">
                Ordenar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pedidos;
