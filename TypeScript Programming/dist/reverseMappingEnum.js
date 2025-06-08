var Status;
(function (Status) {
    Status[Status["pending"] = 1] = "pending";
    Status[Status["inProgress"] = 2] = "inProgress";
    Status[Status["completed"] = 3] = "completed";
})(Status || (Status = {}));
console.log(Status[1]);
console.log(Status[2]);
console.log(Status[3]);
//# sourceMappingURL=reverseMappingEnum.js.map