var ResponseCode;
(function (ResponseCode) {
    ResponseCode[ResponseCode["sucess"] = 200] = "sucess";
    ResponseCode[ResponseCode["notFound"] = 404] = "notFound";
    ResponseCode[ResponseCode["serverError"] = 500] = "serverError";
})(ResponseCode || (ResponseCode = {}));
console.log(ResponseCode.sucess);
console.log(ResponseCode.notFound);
console.log(ResponseCode.serverError);
//# sourceMappingURL=enums1.js.map