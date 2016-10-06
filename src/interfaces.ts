export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface CustomErrorI extends Error {
  response?: Response;
}
