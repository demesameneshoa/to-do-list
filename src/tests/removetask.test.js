/**
 * @jest-environment jsdom
 */
import { removeTask, addTask } from '../modules/handletodo.js';

jest.mock('../modules/list.js');
describe('Testing ClearCompleted function', () => {
  test('removeTask function should remove the task from the array', () => {
  // mocks windows.location.reload funciton
    const mockReload = jest.fn();
    Object.defineProperty(window, 'location', {
      value: { reload: mockReload },
    });
    // Create a mock Task object
    const mockTask = 'Test task 1';
    const mockTask2 = 'Test task 2';
    const mockTask3 = 'Test task 3';
    // Call the addTask function with the mock task description
    addTask(mockTask);
    addTask(mockTask2);
    addTask(mockTask3);
    removeTask(1);
    const taskList = JSON.parse(localStorage.getItem('toDoLists')) || [];
    // Check if the new task was added to the toDoLists array
    expect(taskList[1].description).not.toBe('Test task 2');
  });
});