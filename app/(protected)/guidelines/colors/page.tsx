import React from 'react'
import Image from 'next/image'
import ColorBlock from '@/components/ColorBlock'

const ColorsGuidelines = () => {
  return (
    <div>
      <h1>Colors</h1>
      <p>Color is one of the more defining elements of a brand and the palette for 211 Wealth was carefully selected to help embody the organization’s purpose to serve, their values of community, family, grace, and stewardship, and the audience they will regularly engage with.</p>
      <hr className='section-divider my-8'/>
      <div id='main-color'>
        <h2>Main Color</h2>
        <p className='my-4'>The primary color is <span className='font-bold'>sage green</span>.</p>
        <div className='flex gap-8'>
          <p className='w-1/2'>Green is an ideal choice for 211 Wealth as it ties into the brand’s tree logo. It’s a grounded color that naturally symbolizes growth, and effortlessly ties into the public health sector.</p>
          <ColorBlock
            hex='679436'
            rgb='103, 148, 54'
            hsl='89, 47, 40'
            cmyk='30, 0, 64, 42'
          />
        </div>
      </div>
      <hr className='section-divider my-8'/>
      <div id='secondary-colors'>
        <h2>Secondary Colors</h2>
        <p className='my-4'><span className='font-bold'>Sky blue</span> and <span className='font-bold'>autumn leaf orange</span> are secondary colors.</p>
        <div className='flex gap-8 mb-6'>
          <p className='w-1/2'>Sky blue is a bright color that helps to provide an uplifting energy  and can add a balance that naturally pairs well with the primary sage green. It will primarily be used as a supporting color.</p>
          <ColorBlock
            hex='30C5FF'
            rgb='48, 197, 255'
            hsl='197, 100, 59'
            cmyk='81, 23, 0, 0'
          />
        </div>
        <div className='flex gap-8'>
          <p className='w-1/2'>Autumn leaf orange is another bright, energetic color that provides a  warmth that helps it easily stand out and makes it ideal for directing attention without it being too overwhelming.</p>
          <ColorBlock
            hex='E17034'
            rgb='255, 112, 52'
            hsl='21, 74, 54'
            cmyk='0, 50, 77, 12'
          />
        </div>
      </div>
      <hr className='section-divider my-8'/>
      <div id='neutral-colors'>
        <h2>Neutral Color</h2>
        <div className='flex gap-8 mt-8 mb-6'>
          <p className='w-1/2'>Coffee bean black is the brand’s default for text when used against white and light backgrounds.</p>
          <ColorBlock
            hex='311C1E'
            rgb='49, 28, 30'
            hsl='354, 27, 15'
            cmyk='0, 43, 39, 81'
          />
        </div>
        <div className='flex gap-8 mb-6'>
          <p className='w-1/2'>Linen grey is used for more discreet needs such as dividers, form fields, and shadows.</p>
          <ColorBlock
            hex='A7A7A2'
            rgb='167, 167, 162'
            hsl='60, 3, 65'
            cmyk='0, 0, 3, 35'
          />
        </div>
        <div className='flex gap-8 mb-6'>
          <p className='w-1/2'>Porcelain white is the brand’s default for backgrounds for large areas such as entire pages, sections, and forms. It is also for text color when used against dark backgrounds.</p>
          <ColorBlock
            hex='FFFFFA'
            rgb='255, 255, 250'
            hsl='60, 100, 99'
            cmyk='0, 0, 2, 0'
          />
        </div>
        <div className='flex gap-8'>
          <p className='w-1/2'>White is used for smaller areas such as section backgrounds and UI elements when porcelain white is already in use.</p>
          <ColorBlock
            hex='FFFFFF'
            rgb='255, 255, 255'
            hsl='0, 0, 100'
            cmyk='0, 0, 0, 0'
          />
        </div>
      </div>
      <hr className='section-divider my-8'/>
      <div id='color-combinations'>
        <h2>Color Combinations</h2>
        <p>Below is a collection of suggested color combinations for layouts. These colors not only work well when paired with one another but they are also accessible and provide proper contrast.</p>
        <div>
          <p className='text-sm'>Porcelain White / Coffee Black</p>
          <Image 
            src='/color-combinations/white-black-combo.png'
            alt='Color Swatch of Coffee Black on Porcelain White'
          />
        </div>
      </div>
    </div>
  )
}

export default ColorsGuidelines