import logo from '../assets/ac_logo.png';

function Header() {
  return (
    <header className="px-10 sm:px-20 md:px-40 py-2 flex justify-center sm:justify-between items-center sticky top-0 bg-white opacity-95">
        <div className="w-16 h-16 sm:w-20 sm:h-20">
            <a href="#home">
                <img src={logo} alt="logo" />
            </a>
        </div>
        <nav className='hidden sm:block'>
            <ul className='flex gap-x-8 text-lg font-semibold text-gray-900'>
                <li><a href="#home">Home</a></li>
                <li><a href="#servicios">Servicios</a></li>
                <li><a href="#proyectos">Proyectos</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header