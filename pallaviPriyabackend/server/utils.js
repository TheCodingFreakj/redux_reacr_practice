("use strict");

module.exports = class Util {
  constructor() {
    this.statusCode = null;
    this.type = null;
    this.data = null;
    this.message = null;
    this.extra = null;
  }

  setMessage(statusCode, message) {
    (this.statusCode = statusCode),
      (this.message = message),
      (this.type = "message");
  }

  setSuccess(statusCode, message, data, extra) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.extra = extra;
    this.type = "success";
  }

  setError(statusCode, message) {
    this.statusCode = statusCode;
    this.message = message;
    this.type = "error";
  }

  send(res) {
    const result = {
      status: this.type,
      message: this.message,
      data: this.data,
      extra: this.extra,
    };

    const backendmessage = {
      status: this.type,
      message: this.message,
    };

    if (this.type === "success") {
      return res.status(this.statusCode).json(result);
    }
    if (this.type === "message") {
      return res.status(this.statusCode).json(backendmessage);
    }
    return res.status(this.statusCode).json({
      status: this.type,
      message: this.message,
    });
  }
};
