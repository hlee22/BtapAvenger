import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import React, { Component } from "react";



export default class BTAvenger extends Component {
  films = [
    {
      maPhim: 1314,
      tenPhim: "avarta",
      biDanh: "avarta",
      trailer: "https://www.youtube.com/watch?v=EiJ7EsHOC64",
      hinhAnh: "https://picsum.photos/seed/picsum/200",
      moTa: "hay",
      maNhom: "GP01",
      ngayKhoiChieu: "2000-02-11T00:00:00",
      danhGia: 0,
    },
    {
      maPhim: 1329,
      tenPhim: "",
      biDanh: "dao-kinh-hoang",
      trailer: "https://www.youtube.com/embed/IHNzOHi8sJs",
      hinhAnh: "https://picsum.photos/seed/picsum/200",
      moTa: "lorem",
      maNhom: "GP01",
      ngayKhoiChieu: "2020-11-30T00:00:00",
      danhGia: 9,
    },
    {
      maPhim: 1314,
      tenPhim: "avarta",
      biDanh: "avarta",
      trailer: "https://www.youtube.com/watch?v=EiJ7EsHOC64",
      hinhAnh: "https://picsum.photos/seed/picsum/200",
      moTa: "hay",
      maNhom: "GP01",
      ngayKhoiChieu: "2000-02-11T00:00:00",
      danhGia: 0,
    },
    {
      maPhim: 1314,
      tenPhim: "avarta",
      biDanh: "avarta",
      trailer: "https://www.youtube.com/watch?v=EiJ7EsHOC64",
      hinhAnh: "https://picsum.photos/seed/picsum/200",
      moTa: "hay",
      maNhom: "GP01",
      ngayKhoiChieu: "2000-02-11T00:00:00",
      danhGia: 0,
    },
    {
      maPhim: 1329,
      tenPhim: "Dao  Hoang",
      biDanh: "dao-kinh-hoang",
      trailer: "https://www.youtube.com/embed/IHNzOHi8sJs",
      hinhAnh: "https://picsum.photos/seed/picsum/200",
      moTa: "",
      maNhom: "GP01",
      ngayKhoiChieu: "2020-11-30T00:00:00",
      danhGia: 9,
    },
    {
      maPhim: 1314,
      tenPhim: "avarta",
      biDanh: "avarta",
      trailer: "https://www.youtube.com/watch?v=EiJ7EsHOC64",
      hinhAnh: "https://picsum.photos/seed/picsum/200",
      moTa: "hay",
      maNhom: "GP01",
      ngayKhoiChieu: "2000-02-11T00:00:00",
      danhGia: 0,
    },
   
  ];
  renderFilms = () => {
   
    let content = [];
    for (let index in this.films) {
      let objCol4 = (
        <div className="col-2">
          <div className="card">
            <img
              src={this.films[index].hinhAnh}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{this.films[index].tenPhim}</h5>
              <p className="card-text">{this.films[index].moTa}</p>
            </div>
          </div>
        </div>
      );
      content.push(objCol4);
    }
    console.log(content);
    return content;
  };

  renderByMap = () => {
    
    return this.films.map((product) => {
      return (
        <div className="col-2 py-5  ">
          <div className="card">
            <img src={product.hinhAnh} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{product.tenPhim}</h5>
              <p className="card-text">{product.moTa}</p>
            </div>
          </div>
        </div>
      );
    });

  };

  render() {
    return (
      <div className="container home" >
        <div className="row card-group ">
          {this.renderFilms()}

          {this.renderByMap()}
        </div>
      </div>
    );
  }
}
