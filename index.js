const resultPro = document.getElementById("resultPro");
const resultA = document.getElementById("resultA");
const resultPR = document.getElementById("resultPR");
const productname = document.getElementById("product");
const Amount = document.getElementById("amount");
const Price = document.getElementById("price");
const Btn = document.getElementById("btn");
const ErrorP = document.getElementById("errorP");
const ErrorN = document.getElementById("errorN");
const ErrorPR = document.getElementById("errorPR");

Btn.addEventListener("click", () => {
  let result;
  let ProductName = productname.value;
  let AmontProduct = Amount.value;
  let PriceUnit = Price.value;
  //   ชื่อสินค้า
  if (ProductName != "") {
    if (ProductName.length < 10) {
      result = `ชื่อสินค้า ${ProductName} `;
      resultPro.innerHTML = result;
    } else {
      result = `กรุณากรอกชื่อสินค้าไม่เกิน 10 ตัวอักษร`;
      ErrorP.innerHTML = result;
    }
  } else {
    result = `กรอกชื่อสินค้าด้วย`;
    ErrorP.innerHTML = result;
  }
  //   จำนวน
  if (AmontProduct != "") {
    if (AmontProduct.length <= 5) {
      result = `จำนวนสินค้า ${AmontProduct} ชิ้น`;
      resultA.innerHTML = result;
    } else {
      result = `กรุณากรอกจำนวนสินค้าไม่เกิน 5 หลัก`;
      ErrorN.innerHTML = result;
    }
  } else {
    result = `กรอกจำนวนสินค้าด้วย`;
    ErrorN.innerHTML = result;
  }
  //   ราคา
  if (PriceUnit != "") {
    if (PriceUnit.length <= 5) {
      result = `ราคาสินค้าต่อหน่วย ${PriceUnit} | ราคารวมทั้งหมด ${
        PriceUnit * AmontProduct
      }`;
      resultPR.innerHTML = result;
    } else {
      result = `กรอกจำนวนราคาไม่เกิน 5 หลัก`;
      ErrorPR.innerHTML = result;
    }
  } else {
    result = `กรอกราคาสินค้าด้วย`;
    ErrorPR.innerHTML = result;
  }
});
