import logo from '../assets/ac_logo.png';

function Header() {
  return (
    <header className="px-40 py-2 flex justify-between items-center">
        <div className="w-20 h-20">
            <a href="#hero">
                <img src={logo} alt="logo" />
            </a>
        </div>
        <nav>
            <ul className='flex gap-x-8 text-lg font-semibold text-gray-900'>
                <li><a href="#servicios">Servicios</a></li>
                <li><a href="#proyectos">Proyectos</a></li>
                <li><a href="#clientes">Clientes</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header