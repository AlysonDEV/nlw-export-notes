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

        <NoteCard 
          note={{
            date: new Date(),
            content: `O Drizzle possui um plugin do ESLint para evitar que realizemos updates ou deletes sem where... \nPara configurar o plugin, é preciso instalar como abaixo:`
          }}
        />
        <NoteCard 
          note={{
            date: new Date(),
            content:  `No app do NLW vamos criar um layout incrível, assim podemos entregar a melhor experiência para a comunidade. \nNa aplicação React vamos criar um projeto que permite o usuário salvar notas em texto ou áudio.`
          }}
        />
        

      </div>
    </div>
  )
}

