/**
 * @jest-environment jsdom
 */
import { addTask } from '../modules/handletodo.js';
import { updateStatus } from '../modules/liststatus.js';

jest.mock('../modules/list.js');
describe('Testing ClearCompleted function', () => {
  test('UpdateStatus function should change the completed status of the task from the array', () => {
  // mocks windows.location.reload funciton
    const mockReload = jest.fn();
    Object.defineProperty(window, 'location', {
      value: { reload: mockReload },
    });
    // Create a mock Task object
    const mockTask = 'Test task 1';
    const mockTask2 = 'Test task 2';
    const mockTask3 = 'Test task 3';
    // Call the addTask and updateStatus function with the mock task description
    addTask(mockTask);
    addTask(mockTask2);
    addTask(mockTask3);
    updateStatus(2, true);
    const taskList = JSON.parse(localStorage.getItem('toDoLists')) || [];
    // Check if the task status was changed to the toDoLists array
    expect(taskList[1].completed).toEqual(true);
    updateStatus(2, false);
    const taskListnew = JSON.parse(localStorage.getItem('toDoLists')) || [];
    expect(taskListnew[1].completed).toEqual(false);
  });
});