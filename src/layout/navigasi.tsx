import React, { Component, ReactNode } from "react";
class Navigasi extends Component {
  render(): ReactNode {
    return (
      <div className="flex py-3 justify-center text-slate-100 md:gap-x-10 text-xs font-intersemibold items-center">
        <p className="menu">Gabung</p>
        <p className="menu">Tentang</p>
        <div className="menu uppercase text-lg font-interbold">
          Angeline Universe
        </div>
        <p className="menu">Kontak</p>
        <p className="menu">Aplikasi</p>
      </div>
    );
  }
}

export default Navigasi;
