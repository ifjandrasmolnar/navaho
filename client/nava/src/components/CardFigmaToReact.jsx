import React from "react";
import "./";
export const Card = () => {
  return (
    <div className="card">
      <div className="frame">
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <img className="image" alt="Image" src="image-6.png" />
            <img className="img" alt="Image" src="image-7.png" />
          </div>
        </div>
        <div className="div">
          <div className="frame-2">
            <div className="div-wrapper">
              <div className="text-wrapper">3/4</div>
            </div>
            <div className="frame-3">
              <div className="text-wrapper-2">1</div>
            </div>
            <div className="frame-4">
              <div className="text-wrapper-3">1/2</div>
            </div>
            <div className="frame-4">
              <div className="text-wrapper-3">1/2</div>
            </div>
            <div className="frame-4">
              <div className="text-wrapper-3">1/2</div>
            </div>
            <div className="frame-5">
              <div className="text-wrapper-4">1/3</div>
            </div>
          </div>
          <div className="frame-6">
            <div className="frame-7">
              <div className="text-wrapper-5">Metadat</div>
            </div>
            <div className="frame-8">
              <div className="text-wrapper-5">Publikus Adatok</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
