import React from 'react'

const TypographyGuidelines = () => {
  return (
    <div>
      <h1>Typography</h1>
      <p>Typography needs to be properly selected to reflect an organization’s messaging  and set the tone. Before reading a single word, the font choice needs to portray both credibility and warmth while  ensuring accessibility and staying consistent with the brand’s personality. To achieve this balance two fonts were chosen for the 211 Wealth branding: Aleo and Google Sans Flex.</p>
      <hr className='section-divider my-8'/>
      <div id='heading-fonts'>
        <h2>Heading Fonts</h2>
        <p>Aleo is a contemporary, semi-rounded, slab serif font. The slender lines help make it easy to read, while the serifs provide a professionalism that avoids being too rigid. Aleo should be utilized exclusively for headlines and section titles.</p>
        <div>
          Aleo - Bold | Weight: 700
          <div className='flex gap-4 font-heading'>
            <div>
              <p className='text-3xl'>Aa</p>
            </div>
            <div>
              <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p>abcdefghijklmnopqrstuvwxyz</p>
              <p>1234567890(,.;:?!$%#@&*-)</p>
            </div>
          </div>
        </div>
      </div>
      <hr className='section-divider my-8'/>
      <div id='body-fonts'>
        <h2>Body Fonts</h2>
      </div>
      <hr className='section-divider my-8'/>
      <div id='text-color'>
        <h2>Text Color</h2>
      </div>
      <hr className='section-divider my-8'/>
      <div id='general-text-guidelines'>
        <h2>General Text Guidelines</h2>
      </div>
      <hr className='section-divider my-8'/>
      <div id='general-text-guidelines'>
        <h2>Emphasis Applications</h2>
      </div>
      <hr className='section-divider my-8'/>
      <div id='general-text-guidelines'>
        <h2>Fallback Font</h2>
      </div>
    </div>
  )
}

export default TypographyGuidelines