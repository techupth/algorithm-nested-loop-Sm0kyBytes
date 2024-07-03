// เริ่มเขียนโค้ดตรงนี้
// Nested loop O(n) = n**2
//f(x) รับ parameter 1 ตัวเป็น number
function multiplicationTable(number) {
  // นำตัวเลขที่รับค่ามาสร้างเป็นตาราง n*n
  // row-1 -> 1*1 , 1*2 ... 1*n
  // ...
  // row-n -> n*1 , ... n*n
  //กำหนดตัวแปรมาเก็บค่าผลลัพธ์ และ ค่าแต่ละแถว
  let result = "";
  // ใช้ loop จำนวนรอบเท่ากับ rows (n)
  for (let i = 1; i <= number; i++) {
    // ในการวนแต่ละครั้ง ให้ใช้ loop จำนวนรอบเท่ากับ columns (n)
    let rowResult = "";
    for (let j = 1; j <= number; j++) {
      // ในการวนแต่ละครั้ง ให้ต่อ string ของ row*column + space
      rowResult += `${i * j}` + "\t";
    }
    result += rowResult + "\n";
  }
  return result;
}

console.log(multiplicationTable(5));
