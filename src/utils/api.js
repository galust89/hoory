import axios from "axios";
import { getToken } from "./getToken";
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

function deleteCall(url, data) {
  return axios.post(buildURL(url), data, buildAuthHeader()).then(parseJSON);
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
    login: (data) => {
      return post(`/signin`, data);
    },
  },

  assistant: {
    create: (assistant) => {
      return post(`/assistants`, assistant);
    },
    delete: (assistantId) => {
      return deleteCall(`/deleteAssistant`, assistantId);
    },
    update: (assistant) => {
      return put(`/assistants`, assistant);
    },
    get: () => {
      return get(`/assistants`);
    },
  },
};

export default api;
