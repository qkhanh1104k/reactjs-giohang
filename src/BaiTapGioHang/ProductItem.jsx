import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
   const {sanPham,themGioHang,xemChiTiet} =this.props

    return (
      <div className='card bg-light'>
         <img className='card-img-top' src={sanPham.hinhAnh} alt="..." width={200} height={300}/>
         <div className='card-body'>
            <h4 className='card-title'>{sanPham.tenSP}</h4>
            <button className='btn btn-success me-3' onClick={()=>{
               xemChiTiet(sanPham)
            }}>Xem chi tiết</button>
            <button className='btn btn-danger' onClick={()=>{
               themGioHang(sanPham)
            }}>Thêm vào giỏ hàng</button>
         </div>
      </div>
    )
  }
}
