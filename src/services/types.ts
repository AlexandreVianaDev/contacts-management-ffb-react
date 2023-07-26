export interface iRequestError {
  error: string;
  response: iRequestErrorResponse | undefined;
}

export interface iRequestErrorResponse {
  data: string | undefined;
}
