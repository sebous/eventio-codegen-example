// this could be env variable
const BASE_URL = "https://some-api-url.com/api/v1";

export const customInstance = async <T>({
  url,
  method,
  params,
  data,
  headers,
}: {
  url: string;
  method: "get" | "post" | "put" | "delete" | "patch";
  params?: any;
  headers?: any;
  data?: any;
  responseType?: string;
}): Promise<T> => {
  const response = await fetch(
    `${BASE_URL}${url}` + new URLSearchParams(params),
    {
      method,
      ...(data ? { body: JSON.stringify(data) } : {}),
      headers,
    }
  );

  return response.json();
};

export default customInstance;
