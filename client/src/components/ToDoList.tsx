import { AppDispatch, RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineRadioButtonUnchecked, MdOutlineCheckCircleOutline, MdDelete } from 'react-icons/md';

export default function ToDoList() {
  const todos = useSelector((state: RootState) => state.todo.todos);
  const dispatch = useDispatch<AppDispatch>();

  const handleCompleteToDo = (id: number) => {
    dispatch({
      type: 'COMPLETE_TODO',
      payload: {
        todo_id: id,
      },
    });
  };

  const handleDeleteToDo = (id: number) => {
    dispatch({
      type: 'DELETE_TODO',
      payload: {
        todo_id: id,
      },
    });
  };

  console.log(todos);
  

  return (
    <div className="text-white w-full mt-6 flex flex-col gap-4">
      {todos.map((ele) => (
        <div
          key={ele.todo_id} 
          className={`bg-slate-700 text-gray-300 grid grid-flow-col place-content-between place-items-center py-4 px-2 border-2 border-purple-700 rounded-md ${ele?.isCompleted && 'line-through text-gray-500'}`}
        >
          {ele?.isCompleted ? (
            <button onClick={() => handleCompleteToDo(ele?.todo_id)}>
              <MdOutlineCheckCircleOutline className="cursor-pointer checkCircleHoverEffect" />
            </button>
          ) : (
            <button onClick={() => handleCompleteToDo(ele?.todo_id)}>
              <MdOutlineRadioButtonUnchecked className="cursor-pointer checkCircleHoverEffect" />
            </button>
          )}
          <p className="overflow-auto mb:max-w-52 sm:max-w-96 ">{ele?.task}</p>
          <button onClick={() => handleDeleteToDo(ele?.todo_id)}>
            <MdDelete className={`text-xl ${!ele?.isCompleted ? 'cursor-pointer trashHoverEffect hover:text-red-500' : 'cursor-default'}`} />
          </button>
        </div>
      ))}
    </div>
  );
}
