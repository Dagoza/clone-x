import apiClient, { ApiConfig } from "./lib/HttpClient";

export class HTTPRequest {
  static get<T>(url: string, params?: object): Promise<T> {
    return apiClient
      .get<T>(url, { params })
      .then((response) => response.data)
      .catch((error) => {
        console.error("HTTP GET Request Error:", error);
        throw error;
      });
  }

  static post<T, R>(url: string, data?: R, config?: ApiConfig): Promise<T> {
    return apiClient
      .post<T>(url, data, config)
      .then((response) => response.data)
      .catch((error) => {
        console.error("HTTP POST Request Error:", error);
        throw error;
      });
  }

  // Make a PUT request
  static put<T, R>(url: string, data?: R, config?: ApiConfig): Promise<T> {
    return apiClient
      .put<T>(url, data, config)
      .then((response) => response.data)
      .catch((error) => {
        console.error("HTTP PUT Request Error:", error);
        throw error;
      });
  }

  // Make a DELETE request
  static delete<T>(url: string, config?: ApiConfig): Promise<T> {
    return apiClient
      .delete<T>(url, config)
      .then((response) => response.data)
      .catch((error) => {
        console.error("HTTP DELETE Request Error:", error);
        throw error;
      });
  }
}
