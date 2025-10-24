import { useState } from "react";

interface Plato {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  vendidos: number;
}

export const Estadisticas = () => {
  // Datos de ejemplo
  const [platos] = useState<Plato[]>([
    {
      id: 1,
      nombre: "Lasaña Bolognesa",
      categoria: "Plato Principal",
      precio: 45.5,
      vendidos: 45,
    },
    {
      id: 2,
      nombre: "Ensalada César",
      categoria: "Entrada",
      precio: 28.0,
      vendidos: 32,
    },
    {
      id: 3,
      nombre: "Tiramisú",
      categoria: "Postre",
      precio: 32.0,
      vendidos: 28,
    },
    {
      id: 4,
      nombre: "Sopa del día",
      categoria: "Entrada",
      precio: 18.0,
      vendidos: 18,
    },
    {
      id: 5,
      nombre: "Lomo Saltado",
      categoria: "Plato Principal",
      precio: 52.0,
      vendidos: 38,
    },
  ]);

  // Cálculos básicos
  const totalPlatos = platos.length;
  const totalVendidos = platos.reduce((sum, p) => sum + p.vendidos, 0);
  const ingresoTotal = platos.reduce(
    (sum, p) => sum + p.precio * p.vendidos,
    0
  );

  // Platos por categoría
  const platosPorCategoria = platos.reduce((acc, plato) => {
    acc[plato.categoria] = (acc[plato.categoria] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Top platos más vendidos
  const topPlatos = [...platos]
    .sort((a, b) => b.vendidos - a.vendidos)
    .slice(0, 5);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Estadísticas</h2>

      {/* Tarjetas principales */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-slate-600 text-sm mb-1">Total de Platos</p>
          <p className="text-3xl font-bold text-cyan-600">{totalPlatos}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-slate-600 text-sm mb-1">Platos Vendidos</p>
          <p className="text-3xl font-bold text-green-600">{totalVendidos}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-slate-600 text-sm mb-1">Ingreso Total</p>
          <p className="text-3xl font-bold text-blue-600">
            Bs. {ingresoTotal.toFixed(2)}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Platos por categoría */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-bold mb-4">Platos por Categoría</h3>
          <div className="space-y-3">
            {Object.entries(platosPorCategoria).map(([categoria, cantidad]) => (
              <div
                key={categoria}
                className="flex justify-between items-center"
              >
                <span className="text-slate-700">{categoria}</span>
                <span className="font-bold text-cyan-600">{cantidad}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top platos más vendidos */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-bold mb-4">Platos Más Vendidos</h3>
          <div className="space-y-3">
            {topPlatos.map((plato, index) => (
              <div key={plato.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  <span className="text-slate-700">{plato.nombre}</span>
                </div>
                <span className="font-bold text-green-600">
                  {plato.vendidos}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Estadisticas;
