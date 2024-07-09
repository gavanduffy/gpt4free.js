"use strict";
module.exports = async function () {
  const { default: GPT4js } = await import("./index.js");
  require("./src/Utils/redCross.js");
  if (typeof window !== "undefined") {
    window.GPT4js = GPT4js;
  }
  return GPT4js;
};
