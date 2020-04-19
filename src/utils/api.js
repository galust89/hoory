import axios from "axios";
import { getToken } from './getToken';
const API_BASE = "http://localhost:8000";

function buildURL(endpoint) {
  return API_BASE + endpoint;
}

function buildAuthHeader() {
  return {
    headers: {
      Authorization: getToken(),
      "Content-Type": "application/json",
    },
  };
}

function parseJSON(response) {
  return response.data;
}

function get(url) {
  return axios.get(buildURL(url), buildAuthHeader()).then(parseJSON);
}

function post(url, data) {
  return axios.post(buildURL(url), data, buildAuthHeader()).then(parseJSON);
}

function deleteCall(url) {
  return axios.delete(buildURL(url), buildAuthHeader()).then(parseJSON);
}

function put(url, data) {
  return axios.put(buildURL(url), data, buildAuthHeader()).then(parseJSON);
}

const api = {
  user: {
    create: (user) => {
      return post(`/signup`, user);
    },
    get: (user) => {
      return post(`/signin`, user);
    },
    getInfo: () => {
      return get(`/user`);
    },
  },

  assistant: {
    create: (assistant) => {
      return post(`/assistants`, assistant);
    },
    delete: (data) => {
      return deleteCall(`/assistants`, data);
    },
    update: (assistantId) => {
      return put(`/assistants`, { assistantId });
    },
    // get: (assistant) => {
    //   return get(`/assistant`, assistant);
    // },
  },
};

export default api;
