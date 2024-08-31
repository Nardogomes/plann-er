import { CircleDashed, UserCog } from "lucide-react";

export function Guests() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Convidados</h2>

      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <span className="block font-medium text-zinc-100">Ricardo Sousa</span>
            <span className="block text-sm text-zinc-400 truncate">ricardosousa@mail.com.br</span>
          </div>
          <CircleDashed className="text-zinc-400 size-5" />
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <span className="block font-medium text-zinc-100">Marcos Santos</span>
            <span className="block text-sm text-zinc-400 truncate">marcossantos@mail.com.br</span>
          </div>
          <CircleDashed className="text-zinc-400 size-5" />
        </div>
      </div>

      <button className='bg-zinc-800 w-full text-zinc-200 rounded-lg px-5 h-11 font-medium flex justify-center items-center gap-2 hover:bg-zinc-700 duration-200'>
        <UserCog className='size-5' />
        Gerenciar convidados
      </button>
    </div>
  )
}