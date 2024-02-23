import { RiBeerLine, RiHome7Fill, RiUserFill } from "react-icons/ri";
const Sidebar = () => {
  return (
    <div className="min-h-screen grid grid-cols-6">
      <div className="col-span-1 p-8 font-bold">
        <h1 className="mb-4">logo</h1>
        <a
          href="#"
          className="text-gray-500 flex items-center gap-4 p-4 hover:bg-purple-500 hover:text-white rounded-xl transition-colors"
        >
          <RiBeerLine />
          Ventas
        </a>

        <a
          href="#"
          className="text-gray-500 flex items-center gap-4 p-4 hover:bg-purple-500 hover:text-white rounded-xl transition-colors"
        >
          <RiHome7Fill />
          Proveedores
        </a>
        <a
          href="#"
          className="text-gray-500 flex items-center gap-4 p-4 hover:bg-purple-500 hover:text-white rounded-xl transition-colors"
        >
          <RiUserFill />
          Usuarios
        </a>
      </div>
      <div className="col-span-5 bg-gray-50">mendu</div>
    </div>
  );
};

export default Sidebar;
