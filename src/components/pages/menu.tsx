import { useState } from "react";
import { HiOutlineTrash, HiOutlinePencil, HiOutlinePlus } from "react-icons/hi";

interface Plato {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  descripcion: string;
  vendidos?: number;
}

export const Menu = () => {
  const [platos, setPlatos] = useState<Plato[]>([
    {
      id: 1,
      nombre: "Lasaña Bolognesa",
      categoria: "Plato Principal",
      precio: 45.5,
      descripcion: "Lasaña tradicional con carne molida y salsa bechamel",
      vendidos: 45,
    },
    {
      id: 2,
      nombre: "Ensalada César",
      categoria: "Entrada",
      precio: 28.0,
      descripcion: "Lechuga romana, crutones, parmesano y aderezo césar",
      vendidos: 32,
    },
    {
      id: 3,
      nombre: "Tiramisú",
      categoria: "Postre",
      precio: 32.0,
      descripcion: "Postre italiano con café, mascarpone y cacao",
      vendidos: 28,
    },
    {
      id: 4,
      nombre: "Sopa del día",
      categoria: "Entrada",
      precio: 18.0,
      descripcion: "Sopa casera preparada diariamente",
      vendidos: 18,
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState({
    nombre: "",
    categoria: "",
    precio: "",
    descripcion: "",
  });

  const handleAdd = () => {
    setEditingId(null);
    setForm({ nombre: "", categoria: "", precio: "", descripcion: "" });
    setShowModal(true);
  };

  const handleEdit = (plato: Plato) => {
    setEditingId(plato.id);
    setForm({
      nombre: plato.nombre,
      categoria: plato.categoria,
      precio: plato.precio.toString(),
      descripcion: plato.descripcion,
    });
    setShowModal(true);
  };

  const handleDelete = (id: number) => {
    setPlatos(platos.filter((p) => p.id !== id));
  };

  const handleSave = () => {
    if (!form.nombre || !form.categoria || !form.precio || !form.descripcion)
      return;

    const platoData = {
      nombre: form.nombre,
      categoria: form.categoria,
      precio: parseFloat(form.precio),
      descripcion: form.descripcion,
      vendidos: 0,
    };

    if (editingId) {
      setPlatos(
        platos.map((p) => (p.id === editingId ? { ...p, ...platoData } : p))
      );
    } else {
      setPlatos([...platos, { id: Date.now(), ...platoData }]);
    }
    setShowModal(false);
  };

  return (
    <div className="p-6">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-800">
          Menú del Restaurante
        </h2>
        <button
          onClick={handleAdd}
          className="flex items-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition"
        >
          <HiOutlinePlus size={18} />
          Agregar Plato
        </button>
      </div>

      <div className="overflow-x-auto shadow-md rounded-lg bg-white">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-200 font-semibold">
            <tr>
              <th className="px-6 py-3">Nombre</th>
              <th className="px-6 py-3">Categoría</th>
              <th className="px-6 py-3">Precio</th>
              <th className="px-6 py-3">Descripción</th>
              <th className="px-6 py-3 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {platos.map((plato, index) => (
              <tr
                key={plato.id}
                className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
              >
                <td className="px-6 py-3 font-medium">{plato.nombre}</td>
                <td className="px-6 py-3">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    {plato.categoria}
                  </span>
                </td>
                <td className="px-6 py-3 font-semibold">
                  Bs. {plato.precio.toFixed(2)}
                </td>
                <td className="px-6 py-3 text-slate-600 max-w-xs truncate">
                  {plato.descripcion}
                </td>
                <td className="px-6 py-3 text-center">
                  <button
                    onClick={() => handleEdit(plato)}
                    className="text-blue-600 hover:text-blue-800 mr-3"
                    title="Editar"
                  >
                    <HiOutlinePencil size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(plato.id)}
                    className="text-red-600 hover:text-red-800"
                    title="Eliminar"
                  >
                    <HiOutlineTrash size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-bold mb-4 text-slate-800">
              {editingId ? "Editar Plato" : "Nuevo Plato"}
            </h3>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Nombre del plato
                </label>
                <input
                  type="text"
                  placeholder="Ej: Lasaña Bolognesa"
                  value={form.nombre}
                  onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Categoría
                </label>
                <select
                  value={form.categoria}
                  onChange={(e) =>
                    setForm({ ...form, categoria: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="">Seleccionar categoría</option>
                  <option value="Entrada">Entrada</option>
                  <option value="Plato Principal">Plato Principal</option>
                  <option value="Postre">Postre</option>
                  <option value="Bebida">Bebida</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Precio (Bs.)
                </label>
                <input
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  value={form.precio}
                  onChange={(e) => setForm({ ...form, precio: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Descripción
                </label>
                <textarea
                  placeholder="Descripción del plato..."
                  value={form.descripcion}
                  onChange={(e) =>
                    setForm({ ...form, descripcion: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg h-24 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition font-medium"
              >
                Cancelar
              </button>
              <button
                onClick={handleSave}
                className="flex-1 px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition font-medium"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
