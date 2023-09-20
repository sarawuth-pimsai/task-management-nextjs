import GetTaskRequest from '@application/port/request/task/get-task.request'
import { Task } from '@domain/entity/task'
import GetTaskUseCase from '@domain/use-case/get-task.use-case'

export type GetTaskServiceContext = {
  getTaskRequest: GetTaskRequest
}
export default class GetTaskService implements GetTaskUseCase {
  private readonly getTaskRequest: GetTaskRequest
  constructor(context: GetTaskServiceContext) {
    this.getTaskRequest = context.getTaskRequest
  }
  async getTask(taskId: string): Promise<Task | undefined> {
    throw new Error('Method not implemented.')
  }
}
