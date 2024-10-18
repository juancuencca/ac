import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="px-40 py-5 bg-gray-950 text-white flex justify-between items-center">
        <p className="italic">&copy; <span className="text-sm">A&C Soluciones Informáticas. Todos los derechos reservados</span></p>
        <div className="flex gap-x-6">
            <a href="https://www.instagram.com/a_c_informatica/" target="_blank">
                <FaInstagram className="w-7 h-7" />
            </a>
            <a href="https://wa.me/+595995680264" target="_blank">
                <FaWhatsapp className="w-7 h-7" />
            </a>
        </div>
    </footer>
  )
}

export default Footer