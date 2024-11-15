import type { HttpClient } from "../../models";

export const httpClient: HttpClient = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  get: (url: string, headers?: any) => {
    return Promise.resolve({});
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  post: (url: string, data?: any, headers?: any) => {
    return Promise.resolve({});
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  put: (url: string, data: any, headers?: any) => {
    return Promise.resolve({});
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  del: (url: string, headers?: any) => {
    return Promise.resolve({});
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  wget: (url: string) => {
    return Promise.resolve({});
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  stream: (url: string, data: any, target: any) => {
    return Promise.resolve({});
  },
};
