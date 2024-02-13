import { ChangeEvent, useState } from "react";
import logo from "./assets/logo-nlw-export.svg";
import { NewNoteCard } from "./components/new-note-card";
import { NoteCard } from "./components/note-card";

interface Note {
  id: string;
  date: Date;
  content: string;
}

export function App() {
  const [search, setSearch] = useState("");

  const [notes, setNotes] = useState<Note[]>(() => {
    const notesOnStorate = localStorage.getItem("notes");
    if (notesOnStorate) {
      return JSON.parse(notesOnStorate);
    }
    return [];
  });

  function onNoteCreated(content: string) {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content,
    };

    const newNotes = [newNote, ...notes];
    setNotes(newNotes);

    localStorage.setItem("notes", JSON.stringify(newNotes));
  }

  function onNoteDeleted(id: string) {
    const newNotes = notes.filter(note=> {
      return note.id !== id
    })

    setNotes(newNotes)
    localStorage.setItem("notes", JSON.stringify(newNotes));

  }

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  const notesFilter =
    search !== ""
      ? notes.filter((note) =>
          note.content.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
      : notes;

  return (
    <div className="max-w-6xl mx-auto my-10 space-y-6 px-5 xl:px-0">
      <img src={logo} alt="NLW Expert" />
      <form className="w-full">
        <input
          type="text"
          placeholder="Busque em suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tighter outline-none placeholder:text-slate-500"
          onChange={handleSearch}
          value={search}
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard onNoteCreated={onNoteCreated} />

        {notesFilter.map((note) => (
          <NoteCard key={note.id} note={note} handleDeleteNote={onNoteDeleted} />
        ))}
      </div>
    </div>
  );
}
