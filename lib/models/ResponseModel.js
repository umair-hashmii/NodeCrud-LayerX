class ResponseModel {
    /**
     * @param {boolean} success
     * @param {string} message
     * @param {any} data
     * @param {number} [errorCode]
     */
    constructor(success, message, data = null, errorCode = null) {
        this.success = success;
        this.message = message;
        this.data = data;
        if (errorCode) this.errorCode = errorCode;
    }
}

module.exports = ResponseModel;