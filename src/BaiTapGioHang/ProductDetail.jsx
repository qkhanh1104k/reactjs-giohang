import React, { Component } from "react";

export default class ProductDetail extends Component {
    renderDetail = (sanPhamChiTiet) => {
        return (
            <>
                <div className="col-4">
                    <h3 className="text-center">{sanPhamChiTiet.tenSP}</h3>
                    <div className="img ">
                        <img src={sanPhamChiTiet.hinhAnh} alt="" width={400} height={400} />
                    </div>
                </div>
                <div className="col-8 ps-5">
                    <h3 className="mb-4">Thông số kĩ thuật</h3>
                    <table class="table table-bordered fs-5 lh-lg">
                        <tr>
                            <td>Màn hình</td>
                            <td>{sanPhamChiTiet.manHinh}</td>
                        </tr>
                        <tr>
                            <td>Hệ điều hành</td>
                            <td>{sanPhamChiTiet.heDieuHanh}</td>
                        </tr>
                        <tr>
                            <td>Camera trước</td>
                            <td>{sanPhamChiTiet.cameraTruoc}</td>
                        </tr>
                        <tr>
                            <td>Camera sau </td>
                            <td>{sanPhamChiTiet.cameraSau}</td>
                        </tr>
                        <tr>
                            <td>RAM</td>
                            <td>{sanPhamChiTiet.ram}</td>
                        </tr>
                        <tr>
                            <td>ROM</td>
                            <td>{sanPhamChiTiet.rom}</td>
                        </tr>
                    </table>
                </div>
            </>
        );
    };
    render() {
        const { sanPhamChiTiet } = this.props;
        return (
            <div className="container my-5">
                <div className="row">{this.renderDetail(sanPhamChiTiet)}</div>
            </div>
        );
    }
}
