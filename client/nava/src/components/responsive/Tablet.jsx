import React from 'react'
import '../style/Tablet.css';

const Tablet = ({row, dataView, dataEdit}) => {
  return (
    <div className="tdiv">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd736f04864c255fa84d22643e9aba8aae9efee7a4eab8177c7ae5835d227a4a?apiKey=a8ed06ca193b4bbb9cb432a6e4e9e3a2&"
          className="timg"
        />
        <div className="tdiv-2">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/58ea76a6477d63dcd26417c288b372a6d62e676a0dfb17c49fa56279d5a102d0?apiKey=a8ed06ca193b4bbb9cb432a6e4e9e3a2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/58ea76a6477d63dcd26417c288b372a6d62e676a0dfb17c49fa56279d5a102d0?apiKey=a8ed06ca193b4bbb9cb432a6e4e9e3a2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/58ea76a6477d63dcd26417c288b372a6d62e676a0dfb17c49fa56279d5a102d0?apiKey=a8ed06ca193b4bbb9cb432a6e4e9e3a2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/58ea76a6477d63dcd26417c288b372a6d62e676a0dfb17c49fa56279d5a102d0?apiKey=a8ed06ca193b4bbb9cb432a6e4e9e3a2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/58ea76a6477d63dcd26417c288b372a6d62e676a0dfb17c49fa56279d5a102d0?apiKey=a8ed06ca193b4bbb9cb432a6e4e9e3a2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/58ea76a6477d63dcd26417c288b372a6d62e676a0dfb17c49fa56279d5a102d0?apiKey=a8ed06ca193b4bbb9cb432a6e4e9e3a2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/58ea76a6477d63dcd26417c288b372a6d62e676a0dfb17c49fa56279d5a102d0?apiKey=a8ed06ca193b4bbb9cb432a6e4e9e3a2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/58ea76a6477d63dcd26417c288b372a6d62e676a0dfb17c49fa56279d5a102d0?apiKey=a8ed06ca193b4bbb9cb432a6e4e9e3a2&"
            className="timg-2"
          />
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd736f04864c255fa84d22643e9aba8aae9efee7a4eab8177c7ae5835d227a4a?apiKey=a8ed06ca193b4bbb9cb432a6e4e9e3a2&"
          className="timg"
        />
        <div className="tdiv-3">
          <div className="tdiv-4">
            <div className="tdiv-5"><span>ID:</span> {row.id}</div>
          </div>
          <div className="tdiv-7">
            <div className="tdiv-8"><span>Cím:</span> {row.description_str}</div>
          </div>
          <div className="tdiv-10">
            <div className="tdiv-11"><span>Méret:</span> {row.ow_i}x{row.oh_i}</div>
          </div>
          <div className="tdiv-13">
            <div className="tdiv-14"><span>Készítés dátuma:</span> {row.createDate_dt}</div>
          </div>
          <div className="tdiv-16">
            <div className="tdiv-17"><span>Módosítás dátuma:</span> {row.harvestDate_dt}</div>
          </div>
          <div className="tdiv-19">
            <div className="tdiv-20"><span>Formátum:</span> {row.format_str}</div>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd736f04864c255fa84d22643e9aba8aae9efee7a4eab8177c7ae5835d227a4a?apiKey=a8ed06ca193b4bbb9cb432a6e4e9e3a2&"
          className="timg"
        />
        <div className="tdiv-22">
          <div className="tdiv-23" onClick={() => dataView(row)}>
            Meta Adatok
          </div>
          <div className="tdiv-24" onClick={() => dataEdit(row)}>
            Publikus Adatok Szerkeztése
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd736f04864c255fa84d22643e9aba8aae9efee7a4eab8177c7ae5835d227a4a?apiKey=a8ed06ca193b4bbb9cb432a6e4e9e3a2&"
          className="timg"
        />
      </div>
  )
}

export default Tablet