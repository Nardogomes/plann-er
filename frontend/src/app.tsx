import { MapPin, Calendar, ArrowRight } from 'lucide-react'

export function App() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <p className="text-lg text-zinc-300">Convide seus amigos e planeje sua próxim viagem!</p>

        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape">
          <div className='flex items-center gap-2 flex-1'>
            <MapPin className='size-5 text-zinc-400' />

            <input
              type="text"
              placeholder="Para onde você vai?"
              className="bg-transparent text-lg placeholder-zinc-400"
            />
          </div>

          <div className='flex items-center gap-2'>
            <Calendar className='size-5 text-zinc-400' />

            <input
              type="text"
              placeholder="Quando?"
              className="bg-transparent text-lg placeholder-zinc-400"
            />
          </div>

          <button className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'>
            Continuar
            <ArrowRight className='size-5' />
          </button>
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pelo plann-er você automaticamente concorda <br />
          com nossos <a href="#" className="text-zinc-300 underline">Termos de uso</a> e <a href="#" className="text-zinc-300 underline">Políticas de privacidade</a>.
        </p>
      </div>
    </div>
  )
}
