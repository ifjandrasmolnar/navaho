import React from 'react'
import '../style/Mobile.css';

const Mobile = ({row, dataView, dataEdit}) => {
  return (
    <div className="mdiv">
    <div className="mdiv-2">
      <div className="mdiv-3">
        <div className="mcolumn">
          <div className="mdiv-4">
            <div className="mdiv-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/490dfb4571f160bedffbea7d9965c92b913ee898ac5bac7f9761e9db1c55b3e7?apiKey=a8ed06ca193b4bbb9cb432a6e4e9e3a2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/490dfb4571f160bedffbea7d9965c92b913ee898ac5bac7f9761e9db1c55b3e7?apiKey=a8ed06ca193b4bbb9cb432a6e4e9e3a2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/490dfb4571f160bedffbea7d9965c92b913ee898ac5bac7f9761e9db1c55b3e7?apiKey=a8ed06ca193b4bbb9cb432a6e4e9e3a2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/490dfb4571f160bedffbea7d9965c92b913ee898ac5bac7f9761e9db1c55b3e7?apiKey=a8ed06ca193b4bbb9cb432a6e4e9e3a2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/490dfb4571f160bedffbea7d9965c92b913ee898ac5bac7f9761e9db1c55b3e7?apiKey=a8ed06ca193b4bbb9cb432a6e4e9e3a2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/490dfb4571f160bedffbea7d9965c92b913ee898ac5bac7f9761e9db1c55b3e7?apiKey=a8ed06ca193b4bbb9cb432a6e4e9e3a2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/490dfb4571f160bedffbea7d9965c92b913ee898ac5bac7f9761e9db1c55b3e7?apiKey=a8ed06ca193b4bbb9cb432a6e4e9e3a2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/490dfb4571f160bedffbea7d9965c92b913ee898ac5bac7f9761e9db1c55b3e7?apiKey=a8ed06ca193b4bbb9cb432a6e4e9e3a2&"
                className="mimg"
              />
            </div>
            <div className="mdiv-6">
              <div className="mdiv-7" onClick={() => dataView(row)}>Meta Adatok</div>
              <div className="mdiv-8" onClick={() => dataEdit(row)}>Publikus Adatok</div>
            </div>
          </div>
        </div>
        <div className="mcolumn-2">
          <div className="mdiv-9">
            <div className="mdiv-10">
              <div className="mdiv-11"><span>ID:</span> {row.id}</div>
            </div>
            <div className="mdiv-13">
              <div className="mdiv-14"><span>Cím:</span> {row.description_str}</div>
            </div>
            <div className="mdiv-16">
              <div className="mdiv-17"><span>Méret:</span> {row.ow_i}x{row.oh_i}</div>
            </div>
            <div className="mdiv-19">
              <div className="mdiv-20"><span>Készítés dátuma:</span> {row.createDate_dt}</div>
            </div>
            <div className="mdiv-22">
              <div className="mdiv-23"><span>Módosítás dátuma:</span> {row.harvestDate_dt}</div>
            </div>
            <div className="mdiv-25">
              <div className="mdiv-26"><span>Formátum:</span> {row.format_str}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Mobile