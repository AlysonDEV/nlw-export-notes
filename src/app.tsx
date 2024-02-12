import logo from './assets/logo-nlw-export.svg'
import { NewNoteCard } from './components/new-note-card'
import { NoteCard } from './components/note-card'

export function App() {
  return (
    <div className='max-w-6xl mx-auto my-10 space-y-6'>
      <img src={logo} alt='NLW Expert' />
      <form className='w-full'>
        <input 
          type="text" 
          placeholder='Busque em suas notas...' 
          className='w-full bg-transparent text-3xl font-semibold tracking-tighter outline-none placeholder:text-slate-500'
        />
      </form>

      <div className='h-px bg-slate-700' />

      <div className='grid grid-cols-3 gap-6 auto-rows-[250px]'>
        <NewNoteCard />

        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />

       
        <div className='rounded-md bg-slate-800 p-5 space-y-3 relative'>
          <span className='text-sm font-medium text-slate-300'>
            há 4 dias
          </span>
          <p className='text-sm leading-6 text-slate-400'>
            No app do NLW vamos criar um layout incrível, assim podemos entregar a melhor experiência para a comunidade.

            Na aplicação React vamos criar um projeto que permite o usuário salvar notas em texto ou áudio.
          </p>

          <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none' />

        </div>
      </div>
    </div>
  )
}

