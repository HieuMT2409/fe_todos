import axiosClient from './axiosClient';

const END_POINT = {
    PROJECTS: 'projects',
    CREAT: 'projects/createProjects',
    UPDATE: 'projects/updateProjects',
    DELETE: 'projects/delete'
}

export const getProjectsAPI = () => {
    return axiosClient.get(`${END_POINT.PROJECTS}`);
}

export const getProjectbyID = (id) => {
    return axiosClient.get(`${END_POINT.PROJECTS}/${id}`);
}

export const postProjectAPI = (todo) => {
    return axiosClient.post(`${END_POINT.CREAT}`, todo);
}

export const updateProjectAPI = (id, todo) => {
    return axiosClient.put(`${END_POINT.UPDATE}/${id}`, todo);
}

export const deleteProjectAPI = (id) => {
    return axiosClient.delete(`${END_POINT.DELETE}/${id}`);
}
