import { Circle } from '@phosphor-icons/react'
import { useCallback, useEffect, useRef, useState } from 'react'
import farm2 from "../../assets/images/farming2.png"
import water from "../../assets/images/water.png"
import forest from "../../assets/images/forest.png"


const items = [
  {
    title: 'Biodiversity Conservation and Ecosystem Restoration',
    description: 'Símbolo italiano, a Ferrari mescla arte e velocidade com seu emblemático vermelho e "cavallino rampante".',
    image:  farm2
  },
  {
    title: 'Circular Economy and Waste Reduction',
    description: 'Com design audacioso, a Lamborghini proporciona uma combinação inigualável de adrenalina e elegância.',
    image: water
  },
  {
    title: 'Reforestation and Afforestation',
    description: 'Nascida da Fórmula 1, a McLaren é a quintessência da precisão britânica e inovação aerodinâmica.',
    image: forest
  }
]

function App() {
  const [currentItem, setCurrentItem] = useState(0)

  const snapRef = useRef(null)

  const handleItemChange = useCallback(() => {
    const sizeContainer = snapRef.current?.scrollWidth ?? 0
    const sizeItem = sizeContainer / items.length

    if (currentItem >= items.length - 1) {
      snapRef.current?.scrollBy({ left: -sizeContainer, behavior: 'smooth' })
      setCurrentItem(0)
    } else {
      snapRef.current?.scrollBy({ left: sizeItem, behavior: 'smooth' })
      setCurrentItem((currentItem) => currentItem + 1)
    }
  }, [currentItem])

  useEffect(() => {
    const interval = setInterval(handleItemChange, 10000)

    return () => {
      clearInterval(interval)
    }
  }, [currentItem])

  return (
    <main className='  bg-gray-200'>
      <div className='relative  w-full h-full drop-shadow-lg'>
        <div className='absolute flex gap-2 backdrop-blur-sm bottom-10 z-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/30 p-2 rounded-full'>
          {items.map((item) =>
            currentItem === items.indexOf(item) ? (
              <Circle key={item.title} size={10} color='#222222' weight='fill' />
            ) : (
              <Circle key={item.title} size={10} color='#222222' weight='regular' />
            )
          )}
        </div>
        <div ref={snapRef} className='snap-x snap-mandatory flex overflow-x-hidden relative rounded-2xl'>
          {items.map((item) => (
            <div
              key={item.title}
              className='imageSlizer snap-center flex justify-center min-w-full gap-2 bg-cover bg-center bg-no-repeat rounded-2xl p-3'
              style={{
                backgroundImage: `url(${item.image})`,
                height: '500px',
                aspectRatio: 'auto 1080 / 721'
              }}
            >
              <div className='w-full absolute bottom-28  h-fit px-5 py-2 rounded-lg'>
                <p className='text-gray-100 text-4xl leading-normal px-4 max-w-xl  font-bold'>{item.title}</p>
                <p className='text-gray-900 text-sm px-4 py-3'><button className='rounded-full bg-white px-6 py-3'>View More </button></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
