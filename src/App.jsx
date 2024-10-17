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
                  Ofrecemos soluciones tecnológicas eficientes y personalizadas, 
                  adaptándonos a tus necesidades específicas, 
                  asegurando un servicio confiable y de calidad.
                </p>
                <button className='mt-8 px-5 py-2 border bg-gray-900 text-white w-fit rounded-md text-lg font-semibold hover:bg-white hover:text-gray-900 hover:border-gray-900'>Contáctanos</button>
            </div>
            <div>
                <img src={ilustracion1} alt="Ilustracion AC" width={350} height={350} className='rounded-sm'/>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default App
