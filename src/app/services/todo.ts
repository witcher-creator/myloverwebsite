export interface IToDo {
  name: string;
  time: string;
  status: boolean;
  content?: string;
}

export class ToDo implements IToDo{
  constructor(
    public name: string,
    public time: string,
    public status: boolean,
    public content?: string,
  ){}
}
