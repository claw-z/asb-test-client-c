import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";
import { config } from "../../config";

export interface AxiosConfig {
  readonly asbBaseUrl: string;
  readonly asbKeyUrl: string;
}
export interface MappedAxiosErrorResponse {
  status: number;
  statusText: string;
  message: string;
}

interface AxiosErrorResponse {
  status: number;
  statusText: string;
  data: AxiosErrorData;
}

interface AxiosErrorData {
  error: string;
}

export class AxiosClient {
  protected readonly instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: config.axios.asbBaseUrl,
      headers: {
        Authorization: config.axios.asbKeyUrl,
        Accept: "application/json",
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },

      responseType: "json",
      timeout: 1000,
    });
    this._initializeResponseInterceptor();
  }

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this._handleResponse
      //   this._handleError
    );
  };

  private _handleResponse = (response: AxiosResponse) => response;

  //   protected _handleError = (error: AxiosError) => {
  //     let res = error.response;
  //     if (res?.status == 401) {
  //       window.location.href = "http://localhost:300/error_page";
  //     }
  //     return Promise.reject(
  //       this._mapErrorMessage(error.response as AxiosErrorResponse)
  //     );
  //   };

  //   protected _mapErrorMessage = (
  //     error: AxiosErrorResponse
  //   ): MappedAxiosErrorResponse => {
  //     return {
  //       status: error.status,
  //       statusText: error.statusText,
  //       message: error.data.error,
  //     };
  //   };
}
