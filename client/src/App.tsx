import { useDispatch } from "react-redux";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";
import { useEffect } from "react";

interface TodoProps {
  id?: number,
  todo?: string,
  completed?: boolean,
}

export default function App() {
  const dispatch = useDispatch();

  const fetchToDos = async () => {
    dispatch({ type: 'FETCH_TODO_REQUEST'})
    try {
      const req = await fetch("https://dummyjson.com/todos?limit=10");
      const resp = await req.json();
      const todos = resp?.todos?.map((e: TodoProps) => (
          { todo_id: e.id, isCompleted: e?.completed, task: e?.todo }
      ))
      
      dispatch({
        type: 'FETCH_TODO_SUCCESS',
        payload: todos,
      })
    } catch (error) {
      console.log('Error in fetching todos');
    }
  }

  useEffect(() => {
    fetchToDos();
  }, [])

  return (
    <div className="min-h-screen w-screen bg-slate-700 flex flex-col items-center gap-10 pt-6">
      <main className="w-1/3">
        <ToDoInput />
        <ToDoList />
      </main>
    </div>
  )
}
