function myFunctions() {
    var diem1 = document.getElementById("diem1").value;

    var diem2 = document.getElementById("diem2").value;

    var years = document.getElementById("year1");

    var values = years.options[years.selectedIndex].value;
    var number = parseInt(values)
    var dtb = 0
    
    switch (number) {
      case 1:
        dtb = (diem1*1 + diem2 * 2) / 3;
        alert()
        alert(dtb)
        break;
      case 2:
        dtb = (diem1 * 2 + diem2 * 3) / 5;
        alert(dtb)
        break;
      case 3:
        dtb = (diem1 * 3 + diem2 * 4) / 7;
        alert(dtb)
        break;
    }
    alert(dtb)
    document.getElementById("dtb").value = dtb;
    var getting;
    if (dtb >= 8) {
      getting = "HOC SINH GIOI";
    } else if (dtb >= 6.5) {
      getting = "HOC SINH KHA";
    } else {
      getting = "HOC SINH TRUNG BINH";
    }
    document.getElementById("demo").innerHTML = getting;
  }