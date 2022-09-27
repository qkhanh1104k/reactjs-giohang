import React, { Component } from "react";
import Cart from "./Cart";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";

const data = [
    {
        maSP: 1,
        tenSP: "VinSmart Live",
        manHinh: "AMOLED, 6.2, Full HD+",
        heDieuHanh: "Android 9.0 (Pie)",
        cameraTruoc: "20 MP",
        cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
        ram: "4 GB",
        rom: "64 GB",
        giaBan: 5700000,
        hinhAnh: "./img/products/vsphone.jpg",
    },
    {
        maSP: 2,
        tenSP: "Meizu 16Xs",
        manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
        heDieuHanh: "Android 9.0 (Pie); Flyme",
        cameraTruoc: "20 MP",
        cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
        ram: "4 GB",
        rom: "64 GB",
        giaBan: 7600000,
        hinhAnh: "./img/products/meizuphone.jpg",
    },
    {
        maSP: 3,
        tenSP: "Iphone XS Max",
        manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
        heDieuHanh: "iOS 12",
        cameraSau: "Chính 12 MP & Phụ 12 MP",
        cameraTruoc: "7 MP",
        ram: "4 GB",
        rom: "64 GB",
        giaBan: 27000000,
        hinhAnh: "./img/products/applephone.jpg",
    },
];

export default class BaiTapGioHang extends Component {
    //biến state thay đổi,tạo thuộc tính
    constructor(props) {
        super(props);
        this.state = {
            gioHang: [],
            xemChiTiet:{},
        };
    }
    //------------Thêm item vào giỏ hàng--------
    themGioHang = (itemClick) => {
        //B1: từ sp chọn tạo ra sp trong giỏ hàng
        let spGioHang = {
            maSP: itemClick.maSP,
            tenSP: itemClick.tenSP,
            soLuong: 1,
            giaBan: itemClick.giaBan,
            hinhAnh: itemClick.hinhAnh,
        };
        //B2:Kiểm tra spChon có trong giỏ hàng chưa
        var gioHangCapNhat = [...this.state.gioHang];
        let index = gioHangCapNhat.findIndex((sp) => sp.maSP === spGioHang.maSP);
        if (index !== -1) {
            //Sản phẩm được click đã có trong this.state.gioHang
            gioHangCapNhat[index].soLuong += 1;
        } else {
            gioHangCapNhat.push(spGioHang);
        }

        //b3:set state để component render lại
        this.setState({
            gioHang: gioHangCapNhat,
        });
    };
    //------------Xóa giỏ hàng---------
    xoaGioHang = (maSP) => {
        var gioHangCapNhat = this.state.gioHang.filter((sp) => sp.maSP !== maSP);
        this.setState({
            gioHang: gioHangCapNhat,
        });
    };

    //----------------Tăng giảm số lượng----------
    tangGiamSoLuong = (maSP, value) => {
        //value==true: tăng số lượng, false:giảm số lượng giới hạn là 1
        var gioHangCapNhat = [...this.state.gioHang];
        let index = gioHangCapNhat.findIndex((sp) => sp.maSP === maSP);
        if (value) {
            gioHangCapNhat[index].soLuong += 1;
        } else {
            if (gioHangCapNhat[index].soLuong > 1) {
                gioHangCapNhat[index].soLuong -= 1;
            }
        }
        this.setState({
            gioHang: gioHangCapNhat,
        });
    };
    //---------Xem chi tiết----------
    xemChiTiet=(idClick)=>{
      let spChiTiet = {
        hinhAnh:idClick.hinhAnh,
        tenSP:idClick.tenSP,
        manHinh:idClick.manHinh,
        heDieuHanh:idClick.heDieuHanh,
        cameraTruoc:idClick.cameraTruoc,
        cameraSau:idClick.cameraSau,
        ram:idClick.ram,
        rom:idClick.rom,
      }
      this.setState({
        xemChiTiet:spChiTiet
      })
    }

    render() {
        //tính tổng số lượng trong giỏ hàm
        let tongSoLuong = this.state.gioHang.reduce((tsl, spGH, index) => {
            return (tsl += spGH.soLuong);
        }, 0);
        return (
            <div className="container">
                <h3>Giỏ hàng của bạn</h3>
                <Cart gioHang={this.state.gioHang} xoaGioHang={this.xoaGioHang} tangGiamSoLuong={this.tangGiamSoLuong} />
                <div className="text-end my-2">
                    <a
                        href="..."
                        style={{
                            fontSize: "17px",
                            fontWeight: "bold",
                            textDecoration: "none",
                        }}
                        data-bs-toggle="modal"
                        data-bs-target="#modalId"
                    >
                        Giỏ hàng({tongSoLuong})
                    </a>
                </div>
                <ProductList mangSanPham={data} themGioHang={this.themGioHang} xemChiTiet={this.xemChiTiet}  />
                <ProductDetail  sanPhamChiTiet={this.state.xemChiTiet}/>
            </div>
        );
    }
}
