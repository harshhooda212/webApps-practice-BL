enum ResponseCode{
    sucess = 200,
    notFound = 404,
    serverError = 500,
}
console.log(ResponseCode.sucess); // 200
console.log(ResponseCode.notFound); // 404      
console.log(ResponseCode.serverError); // 500