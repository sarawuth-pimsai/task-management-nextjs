import { Task } from '@domain/entity/task'

export default interface GetTaskRequest {
  getTask(taskId: string): Promise<Task | undefined>
}
