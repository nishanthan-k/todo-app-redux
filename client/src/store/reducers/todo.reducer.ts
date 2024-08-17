
interface ToDoProps {
  todo_id: number,
  task?: string,
  isCompleted?: boolean,
}

interface ActionProps {
  type: string,
  payload?: ToDoProps
}

interface State {
  todos: ToDoProps[];
}

const initialState: State = {
  todos: [
    {
      todo_id: 1,
      task: 'Todo 1',
      isCompleted: false,
    },
    {
      todo_id: 2,
      task: 'Todo 2',
      isCompleted: false,
    },
    {
      todo_id: 3,
      task: 'Todo 3',
      isCompleted: false,
    },
  ],
};

const todoReducer = (state = initialState, action: ActionProps) => {
  switch(action.type) {
    case 'ADD_TODO': 
      const newToDo = {
        todo_id: state.todos.length > 0 ? state.todos.length + 1 : 1,
        task: action?.payload?.task || "",
        isCompleted: false,
      }

      return {
        ...state,
        todos: [...state.todos, newToDo],
      };
    case 'COMPLETE_TODO':
      const updatedToDos = [...state.todos].map((e) => (
        e.todo_id === action?.payload?.todo_id ? { ...e, isCompleted: !e?.isCompleted}: e
      ))
      return {
        ...state,
        todos: updatedToDos,
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((e) => e.todo_id !== action?.payload?.todo_id),
      };
    default:
      return state;
  }
}

export default todoReducer;