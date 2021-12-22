import Image from 'next/image'
import React from 'react'

const Images = () => {
  const images = [
    'llama',
    'chinatown',
    'girl-with-ducks',
    'central-park',
    'badminton-action-shot',
    'lighthouse',
    'lui-claud',
    'nyc',
    'philly',
    'mt-rainier',
    'seattle',
    'turtle-frog',
  ]

  return images.map((img) => (
    <div key={img} style={{ margin: '0.5rem', display: 'inline-block' }}>
      <Image
        key={img}
        src={`/film/${img}.JPG`}
        width="450"
        height="300"
        alt={img}
      />
    </div>
  ))
}

export default Images
