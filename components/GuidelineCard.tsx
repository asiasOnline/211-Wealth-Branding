import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const GuidelineCard = () => {
  const guidelineCards = [
    { id: "01",
      name: "The Foundation", 
      href: "/guidelines/foundation", 
      src: "/guideline-card-covers/foundation.png",
      alt: "The Foundation"
    },
    { id: "02",
      name: "Logotypes", 
      href: "/guidelines/logotypes",
      src: "/guideline-card-covers/logotypes.png",
      alt: "Logotypes"
    },
    { id: "03",
      name: "Colors", 
      href: "/guidelines/colors",
      src: "/guideline-card-covers/colors.png",
      alt: "Colors"
    },
    { id: "04",
      name: "Typography", 
      href:"/guidelines/typography",
      src: "/guideline-card-covers/typography.png",
      alt: "Typography"
    },
    { id: "05",
      name: "Graphics & Patterns", 
      href:"/guidelines/graphics-patterns",
      src: "/guideline-card-covers/patterns.png",
      alt: "Typography"
    },
    { id: "06",
      name: "Photography", 
      href:"/guidelines/photography",
      src: "/guideline-card-covers/photography.png",
      alt: "Typography"
    },
    { id: "07",
      name: "Layout", 
      href:"/guidelines/layout",
      src: "/guideline-card-covers/layout.png",
      alt: "Typography"
    },
    { id: "08",
      name: "Iconography", 
      href:"/guidelines/iconography",
      src: "/guideline-card-covers/iconography.png",
      alt: "Typography"
    }
  ];
  
  return (
    <>
      {guidelineCards.map((card) => {

        return (
          <div key={card.id}>
            <Link
              href={card.href}
            >
              <Image 
                src={card.src}
                alt={card.alt}
                width={400}
                height={225}
                className='border border-brand-black rounded-md'
              />
            </Link>
            <p className='my-2 font-bold'>
              <span className='text-lg'>{card.id}.</span>
              <span className='text-2xl ml-2'>{card.name}</span>
            </p>
          </div>
        )
      })}
    </>
  )
}

export default GuidelineCard