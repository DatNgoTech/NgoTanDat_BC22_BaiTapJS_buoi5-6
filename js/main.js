const GRABX_1 = 8000;
const GRABX_2 = 7500;
const GRABX_3 = 7000;
const GRABX_WAIT = 2000;

//GrabSUV
const GRAB_SUV_1 = 9000;
const GRAB_SUV_2 = 8500;
const GRAB_SUV_3 = 8000;
const GRAB_SUV_WAIT = 3000;

//GrabBLACK
const GRAB_BLACK_1 = 10000;
const GRAB_BLACK_2 = 9500;
const GRAB_BLACK_3 = 9000;
const GRAB_BLACK_WAIT = 3500;

//Monney
var tienKm_1 = 0;
var tienKm_2 = 0;
var tienKm_3 = 0;
var tongTien = 0;
var tienCho = 0;

document.getElementById("btnTinhtien").onclick = function() {
    var Km = +document.getElementById("Km").value;
    var time = +document.getElementById("time").value;

    var loaiXe = layLoaixe();

    //   if (loaiXe === "grabX") {
    //   } else if (loaiXe === "grabSUV") {
    //   } else if (loaiXe === "grabBLACK") {}

    switch (loaiXe) {
        case "grabX":
            var tongTT = tinhTienchiTiet(Km, time, GRABX_WAIT, GRABX_1, GRABX_2, GRABX_3);
            console.log(tongTT);
            break;

        case "grabSUV":
            var tongTT = tinhTienchiTiet(Km, time, GRAB_SUV_WAIT, GRAB_SUV_1, GRAB_SUV_2, GRAB_SUV_3);
            console.log(tongTT);
            break;

        case "grabBLACK":
            var tongTT = tinhTienchiTiet(Km, time, GRAB_BLACK_WAIT, GRAB_BLACK_1, GRAB_BLACK_2, GRAB_BLACK_3);
            console.log(tongTT);
            break;
        default:
            alert("Vui lòng chọn loại xe");
            break;
    }

    //In kết quả ra
    document.getElementById("divThanhTien").style.display = "block";
    document.getElementById("xuatTien").innerHTML = tongTT;
};

function layLoaixe() {
    var grab_X = document.getElementById("grabX");
    var grab_SUV = document.getElementById("grabSUV");
    var grab_BLACK = document.getElementById("grabBlack");
    var loaiXe = "";

    if (grab_X.checked) {
        loaiXe = "grabX";
    } else if (grab_SUV.checked) {
        loaiXe = "grabSUV";
    } else if (grab_BLACK.checked) {
        loaiXe = "grabBLACK";
    }
    return loaiXe;
}

function tinhTiencho(time, gia_Cho) {
    var kq = 0;
    if (time >= 3) {
        kq = Math.floor(time / 3) * gia_Cho;
    }
    return kq;
}

function tinhKM_1(Km, giaKm) {
    var kq = Km * giaKm;
    return kq;
}

function tinhKM_2(Km, giaKm) {
    var kq = (Km - 1) * giaKm;
    return kq;
}

function tinhKM_3(Km, giaKm) {
    var kq = (Km - 19) * giaKm
    return kq;
}

function tinhTienchiTiet(Km, time, gia_Cho, price_Km_1, price_Km_2, price_Km_3) {
    tienCho = tinhTiencho(time, gia_Cho);
    if (0 <= Km && Km <= 1) {
        tienKm_1 = tinhKM_1(Km, price_Km_1);
        tongTien = tienKm_1 + tienCho;
    } else if (1 < Km && Km <= 19) {
        tienKm_1 = tinhKM_1(1, price_Km_1);
        tienKm_2 = tinhKM_2(Km, price_Km_2);
        tongTien = tienKm_1 + tienKm_2 + tienCho;
    } else if (Km > 19) {
        tienKm_1 = tinhKM_1(1, price_Km_1);
        tienKm_2 = tinhKM_2(19, price_Km_2);
        tienKm_3 = tinhKM_3(Km, price_Km_3);
        tongTien = tienKm_1 + tienKm_2 + tienKm_3 + tienCho;
    }
    return tongTien;
}
document.getElementById("btnInhoaDon").onclick = function() {
    var Km = +document.getElementById("Km").value;
    var time = +document.getElementById("time").value;
    var loaiXe = layLoaixe();
    var printresult;
    switch (loaiXe) {
        case "grabX":
            if (0 < Km && Km <= 1) {
                printresult = printbill(time, GRABX_WAIT, tienCho, Km, GRABX_1, tongTien);
            } else if (1 < Km && Km <= 19) {
                printresult = printbill__1(time, GRABX_WAIT, tienCho, Km, GRABX_1, GRABX_2, tongTien);
            } else if (Km > 19) {
                printresult = printbill__2(time, GRABX_WAIT, tienCho, Km, GRABX_1, GRABX_2, GRABX_3, tongTien);
            }
            document.getElementById("tbody").innerHTML = printresult;
            break;

        case "grabSUV":
            if (0 < Km && Km <= 1) {
                printresult = printbill(time, GRAB_SUV_WAIT, tienCho, Km, GRAB_SUV_1, tongTien);
            } else if (1 < Km && Km <= 19) {
                printresult = printbill__1(time, GRAB_SUV_WAIT, tienCho, Km, GRAB_SUV_1, GRAB_SUV_2, tongTien);
            } else if (Km > 19) {
                printresult = printbill__2(time, GRAB_SUV_WAIT, tienCho, Km, GRAB_SUV_1, GRAB_SUV_2, GRAB_SUV_3, tongTien);
            }
            document.getElementById("tbody").innerHTML = printresult;
            break;

        case "grabBLACK":
            if (0 < Km && Km <= 1) {
                printresult = printbill(time, GRAB_BLACK_WAIT, tienCho, Km, GRAB_BLACK_1, tongTien);
            } else if (1 < Km && Km <= 19) {
                printresult = printbill__1(time, GRAB_BLACK_WAIT, tienCho, Km, GRAB_BLACK_1, GRAB_BLACK_2, tongTien);
            } else if (Km > 19) {
                printresult = printbill__2(time, GRAB_BLACK_WAIT, tienCho, Km, GRAB_BLACK_1, GRAB_BLACK_2, GRAB_BLACK_3, tongTien);
            }
            document.getElementById("tbody").innerHTML = printresult;
            break;
        default:
            alert("Vui lòng chọn loại xe");
            break;
    }
}

function printbill(time, giaTgcho, tienCho, Km, price_Km, tongTien) {
    var content1 = "";

    content1 += "<tr>";
    content1 += "<td>Firts KM </td>";
    content1 += "<td>" + Km + "</td>";
    content1 += "<td>" + price_Km + "</td>";
    content1 += "<td>" + Km * price_Km + "</td>";
    content1 += "</tr>";

    content1 += "<tr>";
    content1 += "<td>waiting time </td>";
    content1 += "<td>" + time + "</td>";
    content1 += "<td>" + giaTgcho + "</td>";
    content1 += "<td>" + tienCho + "</td>";
    content1 += "</tr>";

    content1 += "<tr>";
    content1 += "<td>Sum money</td>";
    content1 += "<td>" + tongTien + "</td>";
    content1 += "</tr>";
    return content1;
}



function printbill__1(time, giaTgcho, tienCho, Km, price_Km, price_Km2, tongTien) {
    var content1 = "";

    content1 += "<tr>";
    content1 += "<td>Firts KM</td>";
    content1 += "<td>" + "1" + "</td>";
    content1 += "<td>" + price_Km + "</td>";
    content1 += "<td>" + price_Km * 1 + "</td>";
    content1 += "</tr>";

    content1 += "<tr>";
    content1 += "<td>KM form 1 to 19" + "</td>";
    content1 += "<td>" + (Km - 1) + "</td>";
    content1 += "<td>" + price_Km2 + "</td>";
    content1 += "<td>" + price_Km2 * (Km - 1) + "</td>";
    content1 += "</tr>";

    content1 += "<tr>";
    content1 += "<td>waiting time</td>";
    content1 += "<td>" + time + "</td>";
    content1 += "<td>" + giaTgcho + "</td>";
    content1 += "<td>" + tienCho + "</td>";
    content1 += "</tr>";

    content1 += "<tr>";
    content1 += "<td>Sum money</td>";
    content1 += "<td>" + tongTien + "</td>";
    content1 += "</tr>";
    return content1;
}

function printbill__2(time, giaTgcho, tienCho, Km, price_Km, price_Km2, price_Km3, tongTien) {
    var content1 = "";

    content1 += "<tr>";
    content1 += "<td>Firts KM</td>";
    content1 += "<td>" + "1" + "</td>";
    content1 += "<td>" + price_Km + "</td>";
    content1 += "<td>" + price_Km * 1 + "</td>";
    content1 += "</tr>";

    content1 += "<tr>";
    content1 += "<td>KM form 1 to 19</td>";
    content1 += "<td> 18 </td>";
    content1 += "<td>" + price_Km2 + "</td>";
    content1 += "<td>" + price_Km2 * 18 + "</td>";
    content1 += "</tr>";

    content1 += "<tr>";
    content1 += "<td>KM form 19 " + "</td>";
    content1 += "<td>" + (Km - 19) + "</td>";
    content1 += "<td>" + price_Km3 + "</td>";
    content1 += "<td>" + price_Km3 * (Km - 19) + "</td>";
    content1 += "</tr>";

    content1 += "<tr>";
    content1 += "<td>waiting time</td>";
    content1 += "<td>" + time + "</td>";
    content1 += "<td>" + giaTgcho + "</td>";
    content1 += "<td>" + tienCho + "</td>";
    content1 += "</tr>";

    content1 += "<tr>";
    content1 += "<td>Sum money</td>";
    content1 += "<td>" + tongTien + "</td>";
    content1 += "</tr>";
    return content1;
}