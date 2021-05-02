"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.watchmen = void 0;

var _jsonwebtoken = require("jsonwebtoken");

require("dotenv").config();

const verificarToken = token => {
  try {
    const payload = (0, _jsonwebtoken.verify)(token, process.env.JWT_SECRET);
    return payload;
  } catch (error) {
    return error.message;
  }
};

const watchmen = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({
      success: false,
      content: null,
      message: "se necesita una token para esta ruta"
    });
  }

  const token = req.headers.authorization.split(" ")[1];
  const resultado = verificarToken(token);

  if (typeof resultado === "object") {
    next();
  } else {
    return res.status(401).json({
      success: false,
      content: resultado,
      message: "No estás autorizado para realizar esta solicitud"
    });
  }
};

exports.watchmen = watchmen;