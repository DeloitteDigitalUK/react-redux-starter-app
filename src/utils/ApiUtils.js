export const weatherbaseUrl = 'https://query.yahooapis.com/v1/public/yql';

/**
 * Throw an error if the given response was not a 2xx status.
 *
 * @param  {Object} response    Fetch response object.
 * @return {Object|Error}       The unmodified response if 2xx. Error otherwise.
 */
const checkStatus = response => {
  const { status, statusText } = response;
  if (status >= 200 && status < 300) {
    return response;
  }

  let error = new Error(statusText);
  error.response = response;
  throw error;
}

/**
 * Parse the given response body as JSON.
 *
 * @param  {Object} response    Fetch response object.
 * @return {Object}             Payload as JSON.
 */
const parseJSON = response => {
  return response.json();
}

export default {
  /**
   * HTTP GET to the given URL.
   *
   * @param  {String} url     URL to fetch.
   * @return {Promise}        Resolves successfully on 2xx statuses.
   */
  get: (url) => {
    console.log(fetch);
    return fetch(url)
      .then(checkStatus)
      .then(parseJSON)
      .catch(err => console.warn(err));
  }
};
