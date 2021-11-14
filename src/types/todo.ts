export enum TodoStatus {
  TODO = 'TODO',
  DOING = 'DOING',
  DONE = 'DONE',
}

export type Todo = {
  id: number,
  title: string,
  status: TodoStatus,
}