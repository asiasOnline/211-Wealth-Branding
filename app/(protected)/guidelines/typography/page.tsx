import React from 'react'
import Image from 'next/image'

const TypographyGuidelines = () => {
  return (
    <div>
      <h1>Typography</h1>
      <p>Typography needs to be properly selected to reflect an organization’s messaging  and set the tone. Before reading a single word, the font choice needs to portray both credibility and warmth while  ensuring accessibility and staying consistent with the brand’s personality. To achieve this balance two fonts were chosen for the 211 Wealth branding: Aleo and Google Sans Flex.</p>
      <hr className='section-divider my-8'/>
      <div id='heading-fonts'>
        <h2>Heading Fonts</h2>
        <p className='my-4'>Aleo is a contemporary, semi-rounded, slab serif font. The slender lines help make it easy to read, while the serifs provide a professionalism that avoids being too rigid. Aleo should be utilized exclusively for headlines and section titles.</p>
        <div className='flex gap-20
        '>
          <div className='font-bold'>
          <p className='text-xl pb-2'>Aleo - Bold | Weight: 700</p>
          <div className='flex gap-4 font-heading'>
            <div>
              <p className='text-7xl'>Aa</p>
            </div>
            <div>
              <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p>abcdefghijklmnopqrstuvwxyz</p>
              <p>1234567890(,.;:?!$%#@&*-)</p>
            </div>
          </div>
          </div>
          <div className='font-semibold'>
          <p className='text-xl pb-2'>Aleo - Semibold | Weight: 500</p>
          <div className='flex gap-4 font-heading'>
            <div>
              <p className='text-7xl '>Aa</p>
            </div>
            <div>
              <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p>abcdefghijklmnopqrstuvwxyz</p>
              <p>1234567890(,.;:?!$%#@&*-)</p>
            </div>
          </div>
          </div>
        </div>
      </div>
      <hr className='section-divider my-8'/>
      <div id='body-fonts'>
        <h2>Body Fonts</h2>
        <p className='pt-4'>DM Sans  is a geometric, sans serif typeface making it low-contrast and giving it ample amounts of space. This font was chosen because it’s clean and consistent, making it an ideal choice for those who may be reading under duress, on a mobile device, or those with English as a second language.</p>
        <p className='py-4'>It’s a professional choice that avoids coming off as lifeless or corporate  and versatile enough to be used in a variety of contexts and sizes.</p>
        <div className='flex gap-20
        '>
          <div className='font-bold'>
          <p className='text-xl pb-2'>DM Sans - Bold | Weight: 700</p>
          <div className='flex gap-4'>
            <div>
              <p className='text-7xl'>Aa</p>
            </div>
            <div>
              <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p>abcdefghijklmnopqrstuvwxyz</p>
              <p>1234567890(,.;:?!$%#@&*-)</p>
            </div>
          </div>
          </div>
          <div>
          <p className='text-xl pb-2'>DM Sans - Regular | Weight: 400</p>
          <div className='flex gap-4'>
            <div>
              <p className='text-7xl '>Aa</p>
            </div>
            <div>
              <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p>abcdefghijklmnopqrstuvwxyz</p>
              <p>1234567890(,.;:?!$%#@&*-)</p>
            </div>
          </div>
          </div>
        </div>
      </div>
      <hr className='section-divider my-8'/>
      <div id='text-color'>
        <h2>Text Color</h2>
        <p>Neutral colors (Coffee Bean Black, Linen Grey, and Porcelain White) should be used for most text. This helps to limit confusion and will provide the most predictable contrast. However, for functional purposes colors will be used sparingly. A variation of Sage Green will be used for hyperlinks while a variation of Autumn Leaf Orange will be used explicitly for warnings and error messaging.</p>
        <div className='flex'>
          <div className='w-1/3'>
            <Image 
              src='/typography-examples/typography-examples1.png'
              alt='Typography example showing a heading, main text, and secondary text with a link in light mode.'
              width={300}
              height={189}
              className='border rounded my-4'
            />
            <div className='flex flex-col gap-0.5 text-sm'>
              <p>Coffee Black Body Text </p>
              <p>Linen Gray 700 Secondary Text</p>
              <p>Sage Green 700 Hyperlink</p>
              <p>Porcelain White Background</p>
            </div>
          </div>
          <div className='w-1/3'>
            <Image 
              src='/typography-examples/typography-examples2.png'
              alt='Typography example showing a heading, main text, and secondary text with a link in dark mode.'
              width={300}
              height={189}
              className='border rounded my-4'
            />
            <div className='text-sm'>
              <p>Porcelain White Body Text </p>
              <p>Linen Gray 500 Secondary Text</p>
              <p>Sage Green 200 Hyperlink</p>
              <p>Coffee Black Background</p>
            </div>
          </div>
          <div className='w-1/3'>
            <Image 
              src='/typography-examples/typography-examples3.png'
              alt='Email input example'
              width={300}
              height={189}
              className='border rounded my-4'
            />
            <div className='text-sm'>
              <p>Linen Gray 700 Secondary Text</p>
              <p>Orange 600 Warning Text</p>
              <p>Porcelain White Background</p>
            </div>
          </div>
        </div>
      </div>
      <hr className='section-divider my-8'/>
      <div id='general-text-guidelines'>
        <h2>General Text Guidelines</h2>
        <p className='my-4'>Typography should always be left-aligned, with very few exceptions. The following standards should guide how each element is styled across all 211 Wealth materials.</p>
        <div className='my-8'>
          <h3>Headings</h3>
          <p className='my-2'>Headings should use Aleo in title case and will range from bold to semi-bold and will typically be set in Coffee Bean Black or Porcelain White, but may also be Sage Green depending on the background and functionality. Make sure to always maintain generous spacing between headings and the body text or subheadings that follow to establish clear headings.</p>
        </div>
        <div className='my-8'>
          <h3>Subheadings</h3>
          <p className='my-2'>Subheadings should use DM Sans, at a notably smaller size than the primary heading but always larger than body text. Subheadings should use medium or semi-bold weight to create a clear visual step between the headings and the body content beneath it without creating competition.</p>
        </div>
        <div className='my-8'>
          <h3>Body Text</h3>
          <p className='my-2'>Body text should use DM Sans, regular weight, and utilize sentence case. This text type should always be set in a neutral color, Coffee Bean Black on light backgrounds and Porcelain White on dark backgrounds. Line spacing should always be generous enough to support comfortable reading, particularly in longer-form content.</p>
        </div>
        <div className='my-8'>
          <h3>Secondary Text</h3>
          <p className='my-2'>Secondary text should utilize DM Sans at a light weight, and be kept at a smaller size than body text. Secondary text should be used for captions, footnotes, labels, and supporting information. Make sure to use a variation of Linen Grey to signal its supporting role and make sure it does not compete with primary content.</p>
        </div>
        <div className='my-8'>
          <h3>Statistics & Key Figures</h3>
          <p className='my-2'>Statistics and other key figures should use DM Sans in a bold weight, and prominently displayed at a large size. Statistics should be used as a visual anchor, capturing a viewer’s attention and communicating the impact of the statistic immediately. Use Sage Green or Autumn Leaf Orange to highlight the numerical figure itself when the emphasis is warranted.</p>
          <p className='my-2'>Pair each figure with a short descriptor, also in DM Sans, but at a notably smaller size. The statistic should have a sub-heading in bold, Coffee Bean Black and if further explanation is required it should be paired with a caption either  in Coffee Bean Black or Linen Grey.</p>
        </div>
        <div className='my-8'>
          <h3>Buttons & Calls to Action</h3>
          <p className='my-2'>These UI elements should use DM Sans  in a medium or bold weight in title case. Keep button text short (three to five words at most).</p>
        </div>
        <div className='my-8'>
          <h3>Hyperlinks</h3>
          <p className='my-2'>Hyperlinks should use DM Sans in a regular weight and should always appear in a variation of Sage Green. These elements should also be underlined to ensure they are identifiable as interactive elements regardless of the user’s device or the context.</p>
        </div>
        <div className='my-8'>
          <h3>Warnings & Error Messages</h3>
          <p className='my-2'>Warnings and error messages should use DM Sans in a medium weight. A darker shade of Autumn Leaf Orange should be exclusively reserved for these elements and should not appear in any other decorative or general content contexts.</p>
        </div>
      </div>
      <hr className='section-divider my-8'/>
      <div id='emphasis-applications'>
        <h2>Emphasis Applications</h2>
        <div className='my-8'>
          <h3>Bold</h3>
          <p className='my-2'>Bold text should be used to draw attention to key words or phrases. It should be used sparingly, so that it retains its signaling power. Avoid bolding entire sentences or paragraphs.</p>
        </div>
        <div className='my-8'>
          <h3>Italics</h3>
          <p className='my-2'>Italics should be reserved for titles, technical terms, or moments that require a subtle tonal shift, such as quoted thoughts or attributions. Avoid using italics for general emphasis purposes, as they can reduce legibility, particularly for readers with dyslexia or those reading in a second language.</p>
        </div>
        <div className='my-8'>
          <h3>Highlighting</h3>
          <p className='my-2'>Highlighted text should be used with extreme restraint, no more than once or twice per page, and only in Sage Green.</p>
        </div>
      </div>
      <hr className='section-divider my-8'/>
      <div id='fallback-font'>
        <h2>Fallback Font</h2>
        <p className='my-2'>A fallback font is utilized as a safety net when primary fonts are unavailable. This may be due to device limitations, a browser environment, a client with extension that strips custom fonts, etc. However, taking the time to consciously choose a fallback helps retain consistency even in suboptimal situations.</p>
        <p className='my-2'>For Aleo the fallback option is Georgia. A web safe option that’s designated as one of the most legible fonts for both digital and print applications.</p>
        <p className='my-2'>When setting up fallbacks for any headings for 211 Wealth the stack should be:</p>
        <p>Aleo → Georgia → serif</p>
        <p className='my-2'>For DM Sans the natural fallback is Trebucket MS, a web safe, humanist sans serif font that’s available on most devices and environments.</p>
        <p className='my-2'>When setting up fallbacks for any body text for 211 Wealth the stack should be:</p>
        <p>DM Sans → Trebucket MS →  sans serif</p>
      </div>
    </div>
  )
}

export default TypographyGuidelines