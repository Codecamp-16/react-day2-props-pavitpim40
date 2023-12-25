const arr = [1, 2, 3, 4, 5];

// #### default export (1ไฟล์ทำได้แค่ 1 ครั้ง)
// export default arr;
export default [1, 2, 3, 4];

// ##### named export (export ได้หลายค่า)
const magicNumber = 42;
const magicName = 'John';
const square = function (x) {
  return x ** 2;
};

export { magicNumber, magicName, square };
