// เริ่มเขียนโค้ดตรงนี้
// ไม่ใช่ Nested loop เป็น normal loop O(n) = n
// function printPattern(number) {
//   // output ของ f(x) ต้องออกมาเป็น string ที่มีทั้ง space และ ขึ้นบรรทัดใหม่
//   // กำหนดค่าตัวแปร result (string type), rowResult(string type)
//   let result = "",
//     rowResult = "";
//   // ใช้การวนลูปให้ค่า i เริ่มจาก 1 ถึงจำนวน numberInput เป็นการกำหนดจำนวน rows
//   for (let i = 1; i <= number; i++) {
//     //ในการวนแต่ละครั้ง ให้นำรอบการวนมาต่อ string กับ space เก็บค่าใน rowResult และขึ้นบรรทัดใหม่เก็บค่าใน result
//     rowResult += i + "\t";
//     result += rowResult + "\n";
//   }
//   return result;
// }

// Nested loop O(n) = n**2
function printPattern(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "\t" + j;
    }
    result += row + "\n";
  }
  return result;
}

// console.log(printPattern(10));
console.log(printPattern(5));
/* 
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5 
*/
