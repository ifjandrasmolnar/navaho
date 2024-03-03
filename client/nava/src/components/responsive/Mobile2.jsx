import React from 'react'
import '../style/Mobile2.css';

const Mobile2 = ({row, dataView, dataEdit}) => {
  return (
    <div className="mmdiv">
    <div className="mmdiv-2">
      <div className="mmdiv-3">
        <div className="mmdiv-4">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/016a4828d219cff00b364dfa3faf2b2d3dfcc609d2dbb707da9b5a78720f0b9c?apiKey=a8ed06ca193b4bbb9cb432a6e4e9e3a2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/016a4828d219cff00b364dfa3faf2b2d3dfcc609d2dbb707da9b5a78720f0b9c?apiKey=a8ed06ca193b4bbb9cb432a6e4e9e3a2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/016a4828d219cff00b364dfa3faf2b2d3dfcc609d2dbb707da9b5a78720f0b9c?apiKey=a8ed06ca193b4bbb9cb432a6e4e9e3a2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/016a4828d219cff00b364dfa3faf2b2d3dfcc609d2dbb707da9b5a78720f0b9c?apiKey=a8ed06ca193b4bbb9cb432a6e4e9e3a2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/016a4828d219cff00b364dfa3faf2b2d3dfcc609d2dbb707da9b5a78720f0b9c?apiKey=a8ed06ca193b4bbb9cb432a6e4e9e3a2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/016a4828d219cff00b364dfa3faf2b2d3dfcc609d2dbb707da9b5a78720f0b9c?apiKey=a8ed06ca193b4bbb9cb432a6e4e9e3a2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/016a4828d219cff00b364dfa3faf2b2d3dfcc609d2dbb707da9b5a78720f0b9c?apiKey=a8ed06ca193b4bbb9cb432a6e4e9e3a2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/016a4828d219cff00b364dfa3faf2b2d3dfcc609d2dbb707da9b5a78720f0b9c?apiKey=a8ed06ca193b4bbb9cb432a6e4e9e3a2&"
            className="mmimg"
          />
        </div>
        <div className="mmdiv-5">
          <div className="mmdiv-6" onClick={() => dataView(row)}>Meta Adatok</div>
          <div className="mmdiv-7" onClick={() => dataEdit(row)}>Publikus Adatok</div>
        </div>
      </div>
    </div>
    <div className="mmdiv-8">
      <div className="mmdiv-9">
        <div className="mmdiv-10"><span>ID:</span> {row.id}</div>
      </div>
      <div className="mmdiv-12">
        <div className="mmdiv-13"><span>Cím:</span> {row.description_str}</div>
      </div>
      <div className="mmdiv-15">
        <div className="mmdiv-16"><span>Méret:</span> {row.ow_i}x{row.oh_i}</div>
      </div>
      <div className="mmdiv-18">
        <div className="mmdiv-19"><span>Készítés dátuma:</span> {row.createDate_dt}</div>
      </div>
      <div className="mmdiv-21">
        <div className="mmdiv-22"><span>Módosítás dátuma:</span> {row.harvestDate_dt}</div>
      </div>
      <div className="mmdiv-24">
        <div className="mmdiv-25"><span>Formátum:</span> {row.format_str}</div>
      </div>
    </div>
    </div>
  )
}

export default Mobile2