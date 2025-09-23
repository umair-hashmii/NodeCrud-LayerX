// ResponseTrait: professional, production-level API response builder
class ResponseTrait {
  /**
   * Build a standardized API response
   * @param {Object} options
   * @param {boolean} options.status
   * @param {number} options.code
   * @param {string} options.message
   * @param {any} [options.data]
   * @param {Object} [options.error]
   * @param {Object} [options.meta]
   * @returns {Object}
   */
  static build({ status, code = 200, message, data = null, error = null, meta = null }) {
    const response = {
      status,
      code,
      message,
      timestamp: new Date().toISOString(),
    };
    if (data !== null) response.data = data;
    if (error) response.error = error;
    if (meta) response.meta = meta;
    return response;
  }
}

module.exports = ResponseTrait;
