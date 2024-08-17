import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

export default function App() {
  return (
    <div className="min-h-screen w-screen bg-slate-700 flex flex-col items-center gap-10 pt-6">
      <main className="w-1/3">
        <ToDoInput />
        <ToDoList />
      </main>
    </div>
  )
}
