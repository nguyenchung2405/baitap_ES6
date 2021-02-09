function getEle(id) {
    return document.getElementById(id);
}

getEle('btnTinhLuong').addEventListener('click', function () {
    let chucVu = getEle('chucVu').value;
    let arrInput = document.querySelectorAll('form input');
    let arrSpan = document.querySelectorAll('.col-6.bg-dark p span');
    let nhanVien = {};

    if (kiemTraThongTin(arrInput) != false) {
        arrInput = [...arrInput, chucVu];

        let heSoLuong = '';
        let luongCB = '';
        let luong = 0;
        let VND = Intl.NumberFormat('VN-vn');
        for (let i = 0; i < arrInput.length; i++) {
            if (i < 4) {
                let tagInput = arrInput[i];
                let name = arrInput[i].name;
                if (i == 2) {
                    heSoLuong = tagInput.value;
                }
                if (i == 3) {
                    luongCB = tagInput.value;
                }
                luong = heSoLuong * luongCB;
                luong = VND.format(luong);
                nhanVien = { ...nhanVien, [name]: tagInput.value };
                if (luong != 0) {
                    nhanVien = { ...nhanVien, Lương: luong };
                }
            } else {
                nhanVien = { ...nhanVien, "Chức vụ": chucVu };
            }
        }

        hienThi(arrSpan, nhanVien);
    }

});



function hienThi(arr, nhanVien) {
    for (let i = 0; i < arr.length; i++) {
        if (i == 0) {
            arr[0].innerHTML = nhanVien['Mã nhân viên'];
        } else if (i == 1) {
            arr[1].innerHTML = nhanVien['Tên nhân viên'];
        } else if (i == 2) {
            arr[2].innerHTML = nhanVien['Chức vụ'];
        } else {
            arr[3].innerHTML = nhanVien['Lương'];
        }
    }
}

function kiemTraThongTin(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].value === '') {
            alert('Vui lòng điền đầy đủ thông tin');
            return false;
        }
    }
}