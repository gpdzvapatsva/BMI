function myBMI() {
  /*
  let Weight = document.getElementById("w").value;
  let Height = document.getElementById("h").value;
  let bmi = (parseFloat(Weight) / parseFloat(Height / 100)) ^ 2;
  alert(bmi);
  document.getElementById("Body").value = bmi;*/
  let bmi = 0;

  let Weight = parseFloat(document.getElementById("w").value);
  let Height = parseFloat(document.getElementById("h").value);
  if (Weight == "") Weight = 0;
  if (Height == "") Height = 0;

  bmi = Weight / ((Height / 100) ^ 2);

  if (!isNaN(bmi)) {
    document.getElementById("Body").value = bmi;
  }

  //document.getElementById("Body").value = bmi;

  // if (gender="Male"){

  //     let IdealBMI=0.5 * Weight/(Height/100) ^ 2 + 11.5
  // }
  // else{IdealBMI=0.5 * Weight/(Height/100) ^ 2 + 0.03 * Age + 11};

  //document.getElementByName("Ideal").innerHTML=bmi;
}
