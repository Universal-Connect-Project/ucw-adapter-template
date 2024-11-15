import type { AdapterConfig, HttpClient, LogClient } from "models";
import { buildSophtronAuthCode } from "./utils";

export default class SophtronBaseClient {
  apiConfig: any;
  logClient: LogClient;
  httpClient: HttpClient;
  envConfig: Record<string, string>;

  constructor(args: AdapterConfig) {
    const { dependencies } = args;

    this.apiConfig = dependencies.aggregatorCredentials;
    this.logClient = dependencies.logClient;
    this.httpClient = dependencies.httpClient;
    this.envConfig = dependencies.envConfig;
  }

  getAuthHeaders(method: string, path: string) {
    return {
      Authorization: buildSophtronAuthCode(
        method,
        path,
        this.apiConfig.clientId,
        this.apiConfig.secret,
      ),
    };
  }

  async post(path: string, data?) {
    const authHeader = this.getAuthHeaders("post", path);
    return await this.httpClient.post(
      this.apiConfig.endpoint + path,
      data,
      authHeader,
    );
  }

  async get(path: string) {
    const authHeader = this.getAuthHeaders("get", path);
    return await this.httpClient.get(
      this.apiConfig.endpoint + path,
      authHeader,
    );
  }

  async put(path: string, data) {
    const authHeader = this.getAuthHeaders("put", path);
    return await this.httpClient.put(
      this.apiConfig.endpoint + path,
      data,
      authHeader,
    );
  }

  async del(path: string) {
    const authHeader = this.getAuthHeaders("delete", path);
    return await this.httpClient.del(
      this.apiConfig.endpoint + path,
      authHeader,
    );
  }
}
