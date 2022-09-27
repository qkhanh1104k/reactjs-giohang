import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
   //render sản phẩm từ mảng
  renderItem =(mangSanPham,themGioHang,xemChiTiet)=>{
   return mangSanPham.map((sanPham,index)=>{
       return(
          <div className='col-4'key ={index}>
             <ProductItem themGioHang={themGioHang} sanPham={sanPham} xemChiTiet ={xemChiTiet}/>
          </div>
       )
       })
   }

   render() {
   const {mangSanPham,themGioHang,xemChiTiet} =this.props
    return (
      <div className='container'>
         <div className='row'>{this.renderItem(mangSanPham,themGioHang,xemChiTiet)}</div>
      </div>
    )
  }
}
