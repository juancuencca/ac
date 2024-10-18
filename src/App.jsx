import Header from './components/Header'
import ilustracion1 from './assets/ilustracion1.jpg'

function App() {
  return (
    <>
      <div>
        <Header />
        <main>
          <section id="hero" className="px-40 py-20 flex justify-between gap-8">            
            <div className='max-w-lg'>
                <h1 className='text-5xl font-bold text-gray-900 leading-tight tracking-normal'>A&C Soluciones Informáticas</h1>
                <p className='text-lg text-gray-600 text-balance mt-6 tracking-wide'>
                Bienvenidos a AC Soluciones Informáticas, tu aliado para todas tus necesidades tecnológicas. Ofrecemos una amplia gama de servicios que van desde la creación de trabajos universitarios hasta el soporte técnico especializado para tu equipo. Contáctanos para una solución rápida y profesional.
                </p>
                <button className='mt-8 px-5 py-2 border bg-gray-900 text-white w-fit rounded-md text-lg font-semibold hover:bg-white hover:text-gray-900 hover:border-gray-900'>Contáctanos</button>
            </div>
            <div>
                <img src={ilustracion1} alt="Ilustracion AC" width={350} height={350} className='rounded-sm'/>
            </div>
          </section>
          <section id="servicios" className="px-40 py-20 bg-slate-100" >
              <h1 className='text-5xl font-bold text-gray-900 leading-tight tracking-normal'>Servicios</h1>
              <div className='grid grid-cols-3 gap-x-4 mt-10'>
                <div>
                  {/* <h2 className='text-2xl text-gray-900 font-bold'>Trabajos universitarios</h2> */}
                  <div className='flex gap-x-4'>
                    <div className='w-1 h-8 bg-red-600'></div>
                    <h2 className='text-2xl text-gray-900 font-bold'>Trabajos Universitarios</h2>
                  </div>
                  <p className='text-base text-gray-600 mt-3'>
                    Realizamos trabajos académicos como ensayos, monografías, y proyectos de investigación. Además, te ayudamos a crear presentaciones en PowerPoint que capturen la atención de tu audiencia.
                  </p>
                </div>
                <div>
                  {/* <h2 className='text-2xl text-gray-900 font-bold'>Diseño Gráfico</h2> */}
                  <div className='flex gap-x-4'>
                    <div className='w-1 h-8 bg-red-600'></div>
                    <h2 className='text-2xl text-gray-900 font-bold'>Diseño Gráfico</h2>
                  </div>
                  <p className='text-base text-gray-600 mt-3'>
                    Creamos flyers, currículums profesionales, tarjetas de presentación y más. Nos aseguramos de que cada diseño sea moderno y esté alineado con tus expectativas.
                  </p>
                </div>
                <div>
                  <div className='flex gap-x-4'>
                    <div className='w-1 h-8 bg-red-600'></div>
                    <h2 className='text-2xl text-gray-900 font-bold'>Soporte Técnico</h2>
                  </div>
                  <p className='text-base text-gray-600 mt-3'>
                    Ofrecemos mantenimiento preventivo, limpieza, formateo, instalación de software y paquetes como Office, además de recuperación de archivos perdidos. Tu equipo estará en buenas manos con nosotros.
                  </p>
                </div>
              </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default App
