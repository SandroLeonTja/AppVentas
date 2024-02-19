const Header = () => {
  return (
    <div className=" py-3 flex justify-around items-center bg-black text-white">
      <div>
        <h1>MiEmpresa</h1>
      </div>

      <div className=" flex gap-3">
        <a className="hover: text-orange-500" href="#">
          inicio
        </a>
        <a className="hover: text-orange-500" href="#">
          Productos
        </a>
        <a className="text-red-300 hover:white" href="#">
          Ventas
        </a>
      </div>

      <div className="flex justify-around items-center">
        <span>U</span>
        <h1>Persona1</h1>
      </div>
    </div>
  );
};

export default Header;
