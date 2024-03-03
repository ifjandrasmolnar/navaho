import React from 'react'
import '../style/Desktop.css';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip placement="top" {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#F8F8F8',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
}));

const Desktop = ({row, dataView, dataEdit}) => {
  return (
    <div className="div">
        <div className="div-2">
        <div className="div-3">
            <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/42f2cdf9c3d461cd8e070a392d5222ad4d741f9021367d1db04fb8162f241413?apiKey=a8ed06ca193b4bbb9cb432a6e4e9e3a2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/42f2cdf9c3d461cd8e070a392d5222ad4d741f9021367d1db04fb8162f241413?apiKey=a8ed06ca193b4bbb9cb432a6e4e9e3a2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/42f2cdf9c3d461cd8e070a392d5222ad4d741f9021367d1db04fb8162f241413?apiKey=a8ed06ca193b4bbb9cb432a6e4e9e3a2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/42f2cdf9c3d461cd8e070a392d5222ad4d741f9021367d1db04fb8162f241413?apiKey=a8ed06ca193b4bbb9cb432a6e4e9e3a2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/42f2cdf9c3d461cd8e070a392d5222ad4d741f9021367d1db04fb8162f241413?apiKey=a8ed06ca193b4bbb9cb432a6e4e9e3a2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/42f2cdf9c3d461cd8e070a392d5222ad4d741f9021367d1db04fb8162f241413?apiKey=a8ed06ca193b4bbb9cb432a6e4e9e3a2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/42f2cdf9c3d461cd8e070a392d5222ad4d741f9021367d1db04fb8162f241413?apiKey=a8ed06ca193b4bbb9cb432a6e4e9e3a2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/42f2cdf9c3d461cd8e070a392d5222ad4d741f9021367d1db04fb8162f241413?apiKey=a8ed06ca193b4bbb9cb432a6e4e9e3a2&"
            className="img"
            />
        </div>
        <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c6ce524c46ba28eeb62b8f960ec7cb077fae79cdb8b01d87b6d8883f22bdcdc?apiKey=a8ed06ca193b4bbb9cb432a6e4e9e3a2&"
            className="img-2"
        />
        <div className="div-4">
            <div className="div-5">
            <div className="div-6">
                <br />
                <HtmlTooltip
                    title={
                    <React.Fragment>
                        <Typography color="inherit">ID</Typography>
                    </React.Fragment>
                    }
                >
                    {row.id}
                </HtmlTooltip>
            </div>
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e60f2e3732bba9170d4098eba266446e23db1da4bbedccf34bc42ec86f938e4?apiKey=a8ed06ca193b4bbb9cb432a6e4e9e3a2&"
                className="img-3"
            />
            <div className="div-7">
                <HtmlTooltip
                    title={
                    <React.Fragment>
                        <Typography color="inherit">Cím / Leírás</Typography>
                    </React.Fragment>
                    }
                >
                    <span style={{fontWeight: '500'}}>{row.description_str}</span>
                </HtmlTooltip>
            </div>
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e399d92e0042f2c8e34b9bac6475abc949bd5c35c6cbc669b5d308845e8e7cc4?apiKey=a8ed06ca193b4bbb9cb432a6e4e9e3a2&"
                className="img-4"
            />
            <div className="div-8">
                <HtmlTooltip
                    title={
                    <React.Fragment>
                        <Typography color="inherit">Méret</Typography>
                    </React.Fragment>
                    }
                >
                    {row.ow_i}
                    <br />x<br />
                    {row.oh_i}
                </HtmlTooltip>
            </div>
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/76865b46ae7462f6d4e75c4d7c066eed1f4ff1d8aaa192b59dd627fa1e3fda55?apiKey=a8ed06ca193b4bbb9cb432a6e4e9e3a2&"
                className="img-5"
            />
            <div className="div-9">
                <HtmlTooltip
                    title={
                    <React.Fragment>
                        <Typography color="inherit">Készítés dátuma</Typography>
                    </React.Fragment>
                    }
                >
                    {row.createDate_dt}
                </HtmlTooltip>
            </div>
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f66b9c9525dab010c64c176da515601db302d6e5e180dbee08cc38b379dd1b9e?apiKey=a8ed06ca193b4bbb9cb432a6e4e9e3a2&"
                className="img-6"
            />
            <div className="div-10">
                <HtmlTooltip
                    title={
                    <React.Fragment>
                        <Typography color="inherit">Módosítás dátuma</Typography>
                    </React.Fragment>
                    }
                >
                    {row.harvestDate_dt}
                </HtmlTooltip>
            </div>
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/dec6c1af340073928daa6696575c5c37c1e0a2b0a78de61580435827093a5706?apiKey=a8ed06ca193b4bbb9cb432a6e4e9e3a2&"
                className="img-7"
            />
            <div className="div-11">
                <HtmlTooltip
                    title={
                    <React.Fragment>
                        <Typography color="inherit">Formátum</Typography>
                    </React.Fragment>
                    }
                >
                    {row.format_str}
                </HtmlTooltip>
            </div>
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7841a27a8bef2a17efad5e3bee65d4e05ec8ad88987c6fa0fc34dd647206222?apiKey=a8ed06ca193b4bbb9cb432a6e4e9e3a2&"
                className="img-8"
            />
            </div>
            <div className="div-12">
            <div className="div-13" onClick={() => dataView(row)}>Meta Adatok</div>
            <div className="div-14" onClick={() => dataEdit(row)}>Publikus Adatok Szerkeztése</div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Desktop