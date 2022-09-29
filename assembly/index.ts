// The entry file of your WebAssembly module.
import { Todo } from "./model";

// export the create method. This acts like an endpoint
// that we'll be able to call from our web app.
export function create(task: string): Todo {
  // use the Todo class to persist the todo data
  return Todo.insert(task);
}
