import GetTaskRequest from '@application/port/request/task/get-task.request'
import { Task } from '@domain/entity/task'
import GetTasksUseCase from '@domain/use-case/get-tasks.use-case'

export type GetTasksServiceContext = {
  getTasksRequest: GetTaskRequest
}

export default class GetTasksService implements GetTasksUseCase {
  private readonly getTasksRequest: GetTaskRequest
  constructor(context: GetTasksServiceContext) {
    this.getTasksRequest = context.getTasksRequest
  }
  async getTasks(
    filter: Partial<Omit<Task, 'title' | 'description'>>
  ): Promise<Task[]> {
    throw new Error('Method not implemented.')
  }
}
