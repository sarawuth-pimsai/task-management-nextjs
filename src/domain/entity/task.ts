export type TaskStatus = 'TODO' | 'IN_PROGRESS' | 'BLOCK' | 'DONE'
export type Task = {
  id: string
  title: string
  description: string
  status: TaskStatus
  isDeleted: boolean
}

export type TaskFilter = Partial<Omit<Task, 'title' | 'description'>>
