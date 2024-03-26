export interface Task{
    _id: string
    title: String;
    description?: String;
    done?: boolean;
    createdAt?: Date;
    updatedAt?: Date;

}

export type CreateTask = Omit<Task, '_id'|'createdAt'|'updatedAt'>
export type UpdateTask = Partial<CreateTask>;