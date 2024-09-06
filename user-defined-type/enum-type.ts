// enum - store constants; duplicate value is not allowed
//  enum types: numeric, string, hetergenous
//  numeric enum

enum RequestType {
    readData = 1,
    saveData = 3,
    deleteData
}

// console.log(RequestType);
// console.log(RequestType.readData);
// console.log(RequestType['readData']);

//  string enum
enum RequestType2 {
    readData = 'Read-Data',
    deleteData = 'delete-data',
    id = 101,
}

console.log(RequestType2['deleteData']);