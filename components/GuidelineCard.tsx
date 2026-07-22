import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const GuidelineCard = () => {
  const guidelineCards = [
    {name: "The Foundation", 
      href: "/guidelines/foundation", 
      src: "guideline-card-covers/foundation.png",
      alt: "The Foundation"
    },
    {name: "Logotypes", 
      href: "/guidelines/logotypes",
      src: "guideline-card-covers/logotypes.png",
      alt: "Logotypes"
    },
    {name: "Colors", 
      href: "/guidelines/colors",
      src: "guideline-card-covers/colors.png",
      alt: "Colors"
    },
    {name: "Typography", 
      href:"/guidelines/typography",
      src: "guideline-card-covers/typography.png",
      alt: "Typography"
    }
  ];
  
  return (
    <>
      {guidelineCards.map((card) => {

        return (
          <Link
            key={card.name}
            href={card.href}
          >
            <Image 
              src={card.src}
              alt={card.alt}
              width={240}
              height={180}
            />
          </Link>
        )
      })}
    </>
  )
}

export default GuidelineCard