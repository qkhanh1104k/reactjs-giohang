import React, { Component } from "react";

export default class Cart extends Component {
   //render mảng gioHang ra table
   renderGioHang = (gioHang,xoaGioHang,tangGiamSoLuong) => {
      return gioHang.map((spGH, index) => {
          return (
              <tr key={index}>
                  <td>{spGH.maSP}</td>
                  <td>
                      <img src={spGH.hinhAnh} alt="..." width={50} height={75} />
                  </td>
                  <td>{spGH.tenSP}</td>
                  <td>
                      <button onClick={() => tangGiamSoLuong(spGH.maSP, true)}>+</button>
                      {spGH.soLuong}
                      <button onClick={() => tangGiamSoLuong(spGH.maSP, false)}>-</button>
                  </td>

                  <td>{spGH.giaBan}</td>
                  <td>{spGH.soLuong * spGH.giaBan}</td>
                  <td>
                      <button onClick={() => xoaGioHang(spGH.maSP)} className="btn btn-danger">
                          Xóa
                      </button>
                  </td>
              </tr>
          );
      });
   };
   render() {
      //lấy dữ liệu gioHang ra từ BaiTapGioHang
        const { gioHang,xoaGioHang,tangGiamSoLuong } = this.props;
        
        return (
            <div className="modal fade" id="modalId" tabIndex={-1} role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
                <div className="modal-dialog modal-lg " role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalTitleId">
                                Giỏ hàng
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <table className="table">
                                <thead>
                                 <tr>
                                    <td>Mã SP</td>
                                    <td>Hình ảnh</td>
                                    <td>Tên SP</td>
                                    <td>Số lượng</td>
                                    <td>Đơn giá </td>
                                    <td>Thành tiền</td>
                                 </tr>
                                </thead>
                                <tbody>
                                 {this.renderGioHang(gioHang,xoaGioHang,tangGiamSoLuong)}
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                Close
                            </button>
                            <button type="button" className="btn btn-primary">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
