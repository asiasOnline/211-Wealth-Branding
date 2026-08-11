import React from 'react'

type ColorBlockProps = {
    hex: string;
    rgb: string;
    hsl: string;
    cmyk: string;
}

const ColorBlock = ({hex, rgb, hsl, cmyk}: ColorBlockProps) => {
  return (
    <div className='flex items-center gap-4'>
      <div className={`w-52 max-w-full h-24 rounded border`}
          style={{backgroundColor: `#${hex}`}}
      ></div>
      <div className='flex flex-col gap-2 text-xs'>
        <p>Hex: #{hex}</p>
        <p>RGB: rgb({rgb})</p>
        <p>HSL: ({hsl})</p>
        <p>CMYK: ({cmyk})</p>
      </div>
    </div>
  )
}

export default ColorBlock