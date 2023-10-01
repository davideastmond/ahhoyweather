import axios from "axios";

interface BaseClientOptions {
  headers?: { [keyof: string]: string };
  urlQueryParams?: { [keyof: string]: string };
}

export abstract class BaseClient {
  private axiosClient;

  constructor(baseUrl: string, options?: BaseClientOptions) {
    this.axiosClient = axios.create({
      baseURL: baseUrl,
      params: options?.urlQueryParams,
    });
  }

  protected async getData<T>(url: string): Promise<T> {
    return (await this.axiosClient.get(url)).data;
  }
}
