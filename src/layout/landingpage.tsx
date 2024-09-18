import React, { Component, ReactNode } from "react";
class LandingPage extends Component {
  render(): ReactNode {
    return (
      <div className="dashboard overflow-hidden bg-white w-full flex justify-center items-center absolute z-10 left-0 right-0 top-0 bottom-0">
        <div className="block text-black relative">
          <div className="item absolute left-0 top-0 bottom-0 right-0 flex justify-center">
            <div className="item-rounded rounded-full h-10 w-10 bg-black"></div>
          </div>
          <div className="flex gap-x-6 uppercase md:text-7xl font-cgbold">
            <div className="title flex">
              <div>a</div>
              <div>n</div>
              <div>g</div>
              <div>e</div>
              <div>l</div>
              <div>i</div>
              <div>n</div>
              <div>e</div>
            </div>
            <div className="title flex">
              <div>u</div>
              <div>n</div>
              <div>i</div>
              <div>v</div>
              <div>e</div>
              <div>r</div>
              <div>s</div>
              <div>e</div>
            </div>
          </div>
          <p className="since text-center font-medium md:text-base mt-2 uppercase">
            Since 2024
          </p>
        </div>
      </div>
    );
  }
}

export default LandingPage;
