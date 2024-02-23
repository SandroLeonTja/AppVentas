const Header = () => {
  return (
    <div className=" py-3 flex justify-around items-center bg-red-500 text-white">
      <div>
        <h1>MiEmpresa</h1>
      </div>

      <div className=" flex gap-5">
        <a className="" href="#">
          inicio
        </a>
        <a className="" href="#">
          Productos
        </a>
        <a className=" hover:text-black" href="#">
          Ventas
        </a>
      </div>

      <div className="flex justify-around items-center">
        <h1>Persona1</h1>
      </div>
    </div>
  );
};

export default Header;
