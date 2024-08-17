import { useRef } from "react"
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";

export default function ToDoInput() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch<AppDispatch>()

  const addToDo = () => {
    const value = inputRef.current?.value?.trim();

    if (value) {
      dispatch({
        type: 'ADD_TODO',
        payload: {
          task: value,
        }
      })
    }
  }

  return (
    <div className="flex gap-4 justify-between">
      <input type="text" ref={inputRef} className="h-9 w-11/12" />
      <button className="bg-sky-500 px-4 h-9 rounded-md" onClick={addToDo}>ADD</button>
    </div>
  )
}
