import axiosClient from './axiosClient';

const END_POINT = {
    TODOS: 'todos',
    CREAT: 'todos/createTodos',
    UPDATE: 'todos/updateTodos',
    DELETE: 'todos/delete'
}

export const getTodosAPI = () => {
    return axiosClient.get(`${END_POINT.TODOS}`);
}

export const postTodosAPI = (todo) => {
    return axiosClient.post(`${END_POINT.CREAT}`, todo);
}

export const updateTodoAPI = (id, todo) => {
    return axiosClient.put(`${END_POINT.UPDATE}/${id}`, todo);
}

export const deleteTodoAPI = (id) => {
    return axiosClient.delete(`${END_POINT.DELETE}/${id}`);
}
