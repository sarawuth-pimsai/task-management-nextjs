import { Task, TaskFilter } from '@domain/entity/task'

export default interface GetTasksRequest {
  getTasks(filter: TaskFilter): Promise<Task[]>
}
