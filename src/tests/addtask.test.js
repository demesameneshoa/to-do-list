/**
 * @jest-environment jsdom
 */
import { addTask } from '../modules/handletodo.js';

jest.mock('../modules/list.js');
describe('Testing Add Task function', () => {
  test('addTask function should add a new task to the toDoLists array', () => {
  // mocks windows.location.reload funciton
    const mockReload = jest.fn();
    Object.defineProperty(window, 'location', {
      value: { reload: mockReload },
    });
    // Create a mock Task object
    const mockTask = 'Test task';
    // Call the addTask function with the mock task description
    addTask(mockTask);
    const taskList = JSON.parse(localStorage.getItem('toDoLists')) || [];
    const lastindex = taskList.length - 1;
    // Check if the new task was added to the toDoLists array
    expect(taskList[lastindex].description).toBe(mockTask);
  });
});