import { PersistentUnorderedMap, math } from "near-sdk-as";

// Think of this PersistentUnorderedMap like a database table.
// We'll use this to persist and retrieve data.
export const todos = new PersistentUnorderedMap<u32, Todo>("todos");

// Think of this like a model class in something like mongoose or
// sequelize. It defines the shape or schema for our data. It will
// also contain static methods to read and write data from and to
// the todos PersistentUnorderedMap.
@nearBindgen
export class Todo {
  id: u32;
  task: string;
  done: bool;

  constructor(task: string) {
    this.id = math.hash32<string>(task);
    this.task = task;
    this.done = false;
  }
}
