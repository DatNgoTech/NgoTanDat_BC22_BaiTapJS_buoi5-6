// GrabX
const GRABX_1 = 8000;
const GRABX_2 = 7500;
const GRABX_3 = 7000;
const GRABX_WAIT = 2000;

// GrabSUV
const GRABSUV_1 = 9000;
const GRABSUV_2 = 8500;
const GRABSUV_3 = 8000;
const GRABSUV_WAIT = 3000;

// GrabBLACK
const GRAB_BLACK_1 = 10000;
const GRAB_BLACK_2 = 9500;
const GRAB_BLACK_3 = 9000;
const GRAB_BLACK_WAIT = 3500;

var tienKm_1 = 0;
var tienKm_2 = 0;
var tienKm_3 = 0;
var tongTien = 0;
var tienCho = 0;

document.getElementById("btnTinhTien").onclick = function () {
  // console.log("on clicked");

  var soKm = document.getElementById("soKM").value;
  var tgCho = document.getElementById("tgCho").value;

  var loaiXe = layLoaiXe();
//   console.log(loaiXe);

  // //   tính tiền
  // if(loaiXe === "grabX"){
  //     //tinh tien grabX
  // }else if(loaiXe === "grabSUV"){
  //     //tinh tien grabSUV
  // }else if(loaiXe === "grabBlack"){
  //     //tinh tien grabBlack
  // }

  switch (loaiXe) {
    case "grabX":
      //Tính tiền chờ để ngoài cho 3 thằng xài cho gọn
      tienCho = tinhTienCho(tgCho, GRABX_WAIT);
      if (0 <= soKm && soKm <= 1) {
        // Tạo hàm
        // tienKm_1 = soKm * GRABX_1;
        tienKm_1 = tinhKm_1(soKm, GRABX_1);

        // Tạo Hàm tính tiền chờ.
        // if(tgCho >= 3){
        //     tienCho = Math.floor(tgCho / 3) * GRABX_WAIT;
        // }
        // tienCho = tinhTienCho(tgCho, GRABSUV_WAIT);
        tongTien = tienKm_1 + tienCho;
      } else if (1 < soKm && soKm <= 19) {
        tienKm_1 = tinhKm_1(1, GRABX_1);
        tienKm_2 = tinhKm_2(soKm, GRABX_2);
        // tienCho = tinhTienCho(tgCho, GRABSUV_WAIT);
        tongTien = tienKm_1 + tienKm_2 + tienCho;
      } else if (soKm > 19) {
        tienKm_1 = tinhKm_1(1, GRABX_1);
        tienKm_2 = tinhKm_2(19, GRABX_2);
        tienKm_3 = tinhKm_3(soKm, GRABX_3);
        // tienCho = tinhTienCho(tgCho, GRABSUV_WAIT);
        tongTien = tienKm_1 + tienKm_2 + tienKm_3 + tienCho;
      }
      break;

    case "grabSUV":
      //Tính tiền chờ để ngoài cho 3 thằng xài cho gọn
      tienCho = tinhTienCho(tgCho, GRABSUV_WAIT);
      if (0 <= soKm && soKm <= 1) {
        tienKm_1 = tinhKm_1(soKm, GRABSUV_1);
        tongTien = tienKm_1 + tienCho;
      } else if (1 < soKm && soKm <= 19) {
        tienKm_1 = tinhKm_1(1, GRABSUV_1);
        tienKm_2 = tinhKm_2(soKm, GRABSUV_2);
        tongTien = tienKm_1 + tienKm_2 + tienCho;
      } else if (soKm > 19) {
        tienKm_1 = tinhKm_1(1, GRABSUV_1);
        tienKm_2 = tinhKm_2(19, GRABSUV_2);
        tienKm_3 = tinhKm_3(soKm, GRABSUV_3);
        tongTien = tienKm_1 + tienKm_2 + tienKm_3 + tienCho;
      }
      break;

    case "grabBlack":
      tinhTienChiTiet(
        soKm,
        tgCho,
        GRAB_BLACK_WAIT,
        GRAB_BLACK_1,
        GRAB_BLACK_2,
        GRAB_BLACK_3
      );
      break;

    default:
      alert("Vui lòng chọn loại xe!");
      break;
  }

    //   in kết quả
    document.getElementById("divThanhTien").style.display = "block";
    document.getElementById("btnHoaDon").style.display = "block";
    document.getElementById("xuatTien").innerHTML = tongTien;
    
};

function layLoaiXe() {
  var grabX = document.getElementById("grabX");
  var grabSuv = document.getElementById("grabSUV");
  var grabBlack = document.getElementById("grabBlack");
  var loaiXe = "";

  //Kiểm tra chọn xe
  if (grabX.checked) {
    // console.log("grabX");
    loaiXe = "grabX";
  } else if (grabSuv.checked) {
    // console.log("grabSUV");
    loaiXe = "grabSUV";
  } else if (grabBlack.checked) {
    // console.log("grabBlack");
    loaiXe = "grabBlack";
  }

  return loaiXe;
}

function tinhTienCho(tgCho, giaCho) {
  var kq = 0;
  if (tgCho >= 3) {
    kq = Math.floor(tgCho / 3) * giaCho;
  }
  return kq;
}

function tinhKm_1(soKM, giaKM) {
  var kq = soKM * giaKM;
  return kq;
}

function tinhKm_2(soKM, giaKM) {
  var kq = (soKM - 1) * giaKM;
  return kq;
}

function tinhKm_3(soKM, giaKM) {
  var kq = (soKM - 19) * giaKM;
  return kq;
}

function tinhTienChiTiet(soKm, tgCho, giaCho, giaKM_1, giaKM_2, giaKM_3) {
  tienCho = tinhTienCho(tgCho, giaCho);
  if (0 <= soKm && soKm <= 1) {
    tienKm_1 = tinhKm_1(soKm, giaKM_1);
    tongTien = tienKm_1 + tienCho;
  } else if (1 < soKm && soKm <= 19) {
    tienKm_1 = tinhKm_1(1, giaKM_1);
    tienKm_2 = tinhKm_2(soKm, giaKM_2);
    tongTien = tienKm_1 + tienKm_2 + tienCho;
  } else if (soKm > 19) {
    tienKm_1 = tinhKm_1(1, giaKM_1);
    tienKm_2 = tinhKm_2(19, giaKM_2);
    tienKm_3 = tinhKm_3(soKm, giaKM_3);
    tongTien = tienKm_1 + tienKm_2 + tienKm_3 + tienCho;
  }
}

document.getElementById("btnHoaDon").onclick = function(){
    var content = "";
    var soKm = document.getElementById("soKM").value;
    var tgCho = document.getElementById("tgCho").value;

  if (0 <= soKm && soKm <= 1) {
      content += "<tr>";
      content +=    "<td> KM đầu tiên </td>";
      content +=    "<td>" + soKm + "</td>";
      content +=    "<td>" + GRABX_1 + "</td>";
      content +=    "<td>" + tienKm_1 + "</td>";
      content += "</tr>";

      content += "<tr>";
      content +=    "<td> Thời Gian Chờ </td>";
      content +=    "<td>" + tgCho + "</td>";
      content +=    "<td>" + GRABX_WAIT + "</td>";
      content +=    "<td>" + tienCho + "</td>";
      content += "</tr>";

      content += "<tr>";
      content +=    "<td> Tồng tiền </td>";
      content +=    "<td>" + tongTien + "</td>";
      content += "</tr>";
  }

  document.getElementById("tbody").innerHTML = content;
};