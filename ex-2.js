// เริ่มเขียนโค้ดตรงนี้
// ไม่ใช่ Nested loop เป็น normal loop O(n) = n
// function printStar(number) {
//   // output ของ f(x) ต้องออกมาเป็น string ที่มีทั้ง space และ ขึ้นบรรทัดใหม่
//   // กำหนดค่าตัวแปร result (string type), rowResult(string type)
//   let result = "",
//     rowResult = "";
//   // ใช้การวนลูปให้ค่า i เริ่มจาก 1 ถึงจำนวน numberInput เป็นการกำหนดจำนวน rows
//   for (let i = 1; i <= number; i++) {
//     //ในการวนแต่ละครั้ง ให้นำรอบการวนมาต่อ string กับ space เก็บค่าใน rowResult และขึ้นบรรทัดใหม่เก็บค่าใน result
//     rowResult += "*" + "\t";
//     // ใช้ built-in operator 'repeat'
//     // rowResult = "* \t".repeat(i);
//     result += rowResult + "\n";
//   }
//   return result;
// }

// Nested loop O(n) = n**2
function printStar(number) {
  // output ของ f(x) ต้องออกมาเป็น string ที่มีทั้ง space และ ขึ้นบรรทัดใหม่
  // กำหนดค่าตัวแปร result (string type), rowResult(string type)
  let result = "";
  // ใช้การวนลูปให้ค่า i เริ่มจาก 1 ถึงจำนวน numberInput เป็นการกำหนดจำนวน rows  และขึ้นบรรทัดใหม่เก็บค่าใน result
  for (let i = 1; i <= number; i++) {
    //ในการวนแต่ละครั้ง ให้ใช้ลูป ต่อ * กับ space เก็บค่าใน rowResult
    let rowResult = "";
    for (let j = 1; j <= i; j++) {
      rowResult += "*" + "\t";
    }
    result += rowResult + "\n";
  }
  return result;
}
console.log(printStar(5));
