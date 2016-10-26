import 'whatwg-fetch';
import { HttpMethod, CustomErrorI } from '../interfaces.ts';
export const weatherbaseUrl: string = 'https://query.yahooapis.com/v1/public/yql';

/**
 * Checks HTTP status
 * Throws an error if the given response was not a 2xx status.
 */
const checkStatus = (response: Response): Response => {
  const { status, statusText } = response;
  if (status >= 200 && status < 300) {
    return response;
  }

  const error: CustomErrorI = new Error(statusText);
  error.response = response;
  throw error;
};

const parseJSON = (response: Response): Promise<any> => response.json();

export default {
  request: (url: string, method: HttpMethod = 'GET'): Promise<Response> => (
    fetch(url, { method })
      .then(checkStatus)
      .then(parseJSON)
      .catch(err => console.warn(err)) // eslint-disable-line no-console
  ),
};
