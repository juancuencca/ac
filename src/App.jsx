import Header from './components/Header'
import Footer from './components/Footer'
import ilustracion1 from './assets/ilustracion1.jpg'
import imagen2 from './assets/imagen2.jpg'
import imagen3 from './assets/imagen3.jpg'
import imagen4 from './assets/imagen4.jpg'
import imagen5 from './assets/imagen5.jpg'
import imagen6 from './assets/imagen6.jpg'
import imagen8 from './assets/imagen8.jpg'
import { FaWhatsapp } from "react-icons/fa";

function App() {
  return (
    <>
      <div>
        <Header />
        <main>
          <section id="home" className="px-10 sm:px-20 md:px-40 py-10 md:py-20 flex flex-col lg:flex-row justify-between gap-8">            
            <div className='max-w-lg text-center lg:text-left'>
                <h1 className='text-4xl md:text-5xl font-bold text-gray-950 leading-10 tracking-normal'>AC <span className='text-red-600'>Soluciones</span> Informáticas</h1>
                <p className='text-lg text-gray-600 text-balance mt-6 tracking-wide'>
                  Bienvenidos a AC Soluciones Informáticas, tu aliado para todas tus necesidades tecnológicas. Ofrecemos una amplia gama de servicios que van desde la creación de trabajos universitarios hasta el soporte técnico especializado para tu equipo. Contáctanos para una solución rápida y profesional.
                </p>
                <a href="https://wa.me/+595995680264" target="_blank">  
                  <button className='flex gap-x-2 items-center mx-auto lg:mx-0 mt-8 px-5 py-2 border bg-gray-950 text-white w-fit rounded-md text-lg font-semibold hover:bg-white hover:text-gray-950 hover:border-gray-900'>
                    Contactar Ahora <FaWhatsapp className='w-6 h-6'/>
                  </button>
                </a>
            </div>
            <div className='flex justify-center lg:block'>
                <img src={ilustracion1} alt="Ilustracion AC" width={350} height={350} className='rounded-sm'/>
            </div>
          </section>
          <section id="servicios" className="px-10 sm:px-20 md:px-40 py-10 md:py-20 bg-slate-100" >
              <h1 className='text-4xl md:text-5xl font-bold text-gray-950 leading-tight tracking-normal text-center lg:text-left'>Servicios</h1>
              <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-14 lg:mt-16'>
                <div>
                  {/* <h2 className='text-2xl text-gray-950 font-bold'>Trabajos universitarios</h2> */}
                  <div className='flex gap-x-4'>
                    <div className='w-1 h-8 bg-red-600'></div>
                    <h2 className='text-2xl text-gray-950 font-bold'>Trabajos Académicos</h2>
                  </div>
                  <p className='text-base text-gray-600 mt-3'>
                    Realizamos trabajos académicos como ensayos, monografías, proyectos de investigación, presentaciones y más. Además, te ayudamos a crear presentaciones en PowerPoint que capturen la atención de tu audiencia.
                  </p>
                </div>
                <div>
                  {/* <h2 className='text-2xl text-gray-950 font-bold'>Diseño Gráfico</h2> */}
                  <div className='flex gap-x-4'>
                    <div className='w-1 h-8 bg-red-600'></div>
                    <h2 className='text-2xl text-gray-950 font-bold'>Diseño Gráfico</h2>
                  </div>
                  <p className='text-base text-gray-600 mt-3'>
                    Creamos flyers, logos, catálogos de productos, videos informativos, currículums profesionales, tarjetas de presentación y más. Nos aseguramos de que cada diseño sea moderno y esté alineado con tus expectativas.
                  </p>
                </div>
                <div>
                  <div className='flex gap-x-4'>
                    <div className='w-1 h-8 bg-red-600'></div>
                    <h2 className='text-2xl text-gray-950 font-bold'>Soporte Técnico</h2>
                  </div>
                  <p className='text-base text-gray-600 mt-3'>
                    Ofrecemos dianostico completo, mantenimiento preventivo, limpieza de sistema y optimización, formateo, instalación de software y paquetes como Office, además de recuperación de archivos perdidos. Tu equipo estará en buenas manos con nosotros.
                  </p>
                </div>
              </div>
          </section>
          <section id='proyectos' className="px-10 sm:px-20 md:px-40 py-10 md:py-20">
            <h1 className='text-4xl md:text-5xl font-bold text-gray-950 leading-tight tracking-normal text-center lg:text-left'>Nuestros Trabajos</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-14 lg:mt-16'>
                <div>
                  <img src={imagen8} alt="imagen" className='rounded-sm' />
                </div>
                <div>
                  <img src={imagen2} alt="imagen" className='rounded-sm' />
                </div>
                <div>
                  <img src={imagen3} alt="imagen" className='rounded-sm' />
                </div>
                <div>
                  <img src={imagen4} alt="imagen" className='rounded-sm' />
                </div>
                <div>
                  <img src={imagen5} alt="imagen" className='rounded-sm' />
                </div>
                <div>
                  <img src={imagen6} alt="imagen" className='rounded-sm' />
                </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
