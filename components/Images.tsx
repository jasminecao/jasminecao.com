import Image from 'next/image'
import React from 'react'
import llama from '@/public/film/llama.jpg'
import chinatown from '@/public/film/chinatown.jpg'
import girlWithDucks from '@/public/film/girlWithDucks.jpg'
import centralPark from '@/public/film/centralPark.jpg'
import badmintonActionShot from '@/public/film/badmintonActionShot.jpg'
import lighthouse from '@/public/film/lighthouse.jpg'
import luiClaud from '@/public/film/luiClaud.jpg'
import nyc from '@/public/film/nyc.jpg'
import philly from '@/public/film/philly.jpg'
import mtRainier from '@/public/film/mtRainier.jpg'
import seattle from '@/public/film/seattle.jpg'
import turtleFrog from '@/public/film/turtleFrog.jpg'

const Images = () => {
  const images = [
    llama,
    chinatown,
    girlWithDucks,
    centralPark,
    badmintonActionShot,
    lighthouse,
    luiClaud,
    nyc,
    philly,
    mtRainier,
    seattle,
    turtleFrog,
  ]

  return (
    <div className="image-container">
      {images.map((img, i) => {
        const imageName = img.src.split('/').slice(-1)[0].split('.')[0]
        return (
          <div className="image-wrapper" key={`${imageName}-wrap`}>
            <Image
              key={`${imageName}-img`}
              src={img}
              alt={imageName}
              placeholder="blur"
              layout="responsive"
              objectFit="contain"
            />
          </div>
        )
      })}
    </div>
  )
}

export default Images
