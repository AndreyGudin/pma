import { Task } from '../shared/interfaces';
import { http } from './interceptor.service';

function getAllTasks(boardId: string, columnId: string) {
  const response = http.get<Task[]>(`/boards/${boardId}/columns/${columnId}/tasks`);
  return response;
}

function getTaskById(boardId: string, columnId: string, task: Task) {
  const response = http.get<Task>(`/boards/${boardId}/${columnId}/${task.id}`);
  return response;
}

function createTask(boardId: string, columnId: string, userId: string, task: Task) {
  const response = http.post(`/boards/${boardId}/columns/${columnId}/tasks/`, {
    title: task.title,
    description: task.description,
    userId: userId,
  });
  return response;
}

function deleteTask(boardId: string, columnId: string, task: Task) {
  const response = http.delete(`/boards/${boardId}/columns/${columnId}/tasks/${task.id}`);
  return response;
}

function editTask(boardId: string, columnId: string, task: Task, userId: string) {
  const response = http.put<Task>(`/boards/${boardId}/columns/${columnId}/tasks/${task.id}`, {
    title: task.title,
    order: task.order,
    description: task.description,
    userId,
    boardId,
    columnId,
  });
  return response;
}

export { getAllTasks, getTaskById, createTask, deleteTask, editTask };
