import c1 from "../assets/categorias/celular.png";
import c2 from "../assets/categorias/audio.png";
import c3 from "../assets/categorias/escritorioPc.png";
import c4 from "../assets/categorias/monitor.png";
import c5 from "../assets/categorias/notebook.png";
import c6 from "../assets/categorias/teclado.png";
import c7 from "../assets/categorias/tv.png";
import c8 from "../assets/categorias/mouse.png";
import { CardCategoria } from "./CardCategoria";

export default function Categorias() {
  const categorias = [
    { id: 1, name: "Celular", url: c1 },
    { id: 2, name: "Audio", url: c2 },
    { id: 3, name: "Escritorio", url: c3 },
    { id: 4, name: "Monitor", url: c4 },
    { id: 5, name: "Notebook", url: c5 },
    { id: 6, name: "Teclado", url: c6 },
    { id: 7, name: "TV", url: c7 },
    { id: 8, name: "Mouse", url: c8 },
  ];

  return (
    <div class="px-5 sm:px-20 mt-10">
      <div class="w-full">
        <div class="mx-auto container border-b-1 border-gray-400 pb-10">
          <div class="grid xl:grid-cols-8 sm:grid-cols-4 grid-cols-2 gap-10">
            {categorias.map((categoria) => (
              <CardCategoria key={categoria.id} categoria={categoria} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
