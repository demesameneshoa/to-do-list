/**
 * @jest-environment jsdom
 */
import { addTask } from '../modules/handletodo.js';
import { clearCompleted, updateStatus } from '../modules/liststatus.js';

jest.mock('../modules/list.js');
describe('Testing Clear Completed function', () => {
  test('ClearCompleted function should clear true arguments of array elements', () => {
  // mocks windows.location.reload funciton
    const mockReload = jest.fn();
    Object.defineProperty(window, 'location', {
      value: { reload: mockReload },
    });
    // Create a mock Task object
    const mockTask = 'Test task 1';
    const mockTask2 = 'Test task 2';
    const mockTask3 = 'Test task 3';
    // Call the addTask, updateStatus, and clearCompleted function with the mock task description
    addTask(mockTask);
    addTask(mockTask2);
    addTask(mockTask3);
    updateStatus(1, true);
    updateStatus(3, true);
    clearCompleted();
    const taskList = JSON.parse(localStorage.getItem('toDoLists')) || [];
    // Check if the new array contains only false elements
    expect(taskList.length).toBe(1);
  });
});