// enum - store constants; duplicate value is not allowed
//  enum types: numeric, string, hetergenous
//  numeric enum
var RequestType;
(function (RequestType) {
    RequestType[RequestType["readData"] = 1] = "readData";
    RequestType[RequestType["saveData"] = 3] = "saveData";
    RequestType[RequestType["deleteData"] = 4] = "deleteData";
})(RequestType || (RequestType = {}));
// console.log(RequestType);
// console.log(RequestType.readData);
// console.log(RequestType['readData']);
//  string enum
var RequestType2;
(function (RequestType2) {
    RequestType2["readData"] = "Read-Data";
    RequestType2["deleteData"] = "delete-data";
})(RequestType2 || (RequestType2 = {}));
console.log(RequestType2['deleteData']);
