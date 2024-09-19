import HTTPError from "@core/models/errors/http-error";

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

  async request<T>({
    url,
    options,
  }: {
    url: string;
    options?: RequestInit;
  }): Promise<T> {
    const res = await fetch(`${this.#baseUrl}${url}`, options);

    if (!res.ok) {
      const response = await res.json();
      const error = new HTTPError(response.message, res.status);
      throw error;
    }

    return await res.json();
  }

  get<T>({ url }: { url: string }) {
    return this.request<T>({
      url,
      options: {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      },
    });
  }

  post<T>({ url, data }: { url: string; data: T }) {
    return this.request<T>({
      url: url,
      options: {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      },
    });
  }

  // Add more methods if necessary
}

export default APIClient;
