import HTTPError from "@models/errors/http-error";

/*
  Class Description:
    A TypeScript wrapper for the Fetch API to enforce typed requests and responses.
    Input validation and sanitation are not handled here and are expected to be managed externally via Zod.
*/

class APIClient {
  #baseUrl: string;

  constructor(baseUrl: string) {
    this.#baseUrl = baseUrl;
  }

  async request<Response>({
    url,
    options,
  }: {
    url: string;
    options?: RequestInit;
  }): Promise<Response> {
    const fullUrl = `${this.#baseUrl}${url}`;
    const res = await fetch(fullUrl, options);

    if (!res.ok) {
      const response = await res.json();
      const error = new HTTPError(response.errors, res.status);
      throw error;
    }

    return await res.json();
  }

  get<Response>({
    url,
    params,
    options,
  }: {
    url: string;
    params?: Record<string, string>;
    options?: RequestInit;
  }) {
    const queryString = params
      ? `?${new URLSearchParams(params).toString()}`
      : "";

    return this.request<Response>({
      url: `${url}${queryString}`,
      options: {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        ...options,
      },
    });
  }
  post<Response, Data>({
    url,
    data,
    options,
  }: {
    url: string;
    data?: Data;
    params?: Record<string, string>;
    options?: RequestInit;
  }) {
    return this.request<Response>({
      url: url,
      options: {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        ...options,
      },
    });
  }
}

const apiClient = new APIClient(import.meta.env.VITE_API_URL);

export default apiClient;
