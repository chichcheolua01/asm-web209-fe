import axios, { AxiosInstance } from "axios";
class Http {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: "bao gio co node thi viet vao",
      timeout: 10000,
    });
  }
}

export const http = new Http().instance;
