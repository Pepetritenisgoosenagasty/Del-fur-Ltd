import React, { useState } from 'react'

const FilterButtons = ({data, setfilteredCat}: any) => {
   

    const categories = [
        {
            id: 0,
            name: "All",
        },
        {
            id: 1,
            name: "Doors",
        },
        {
            id: 2,
            name: "Wardrobe",
        },
        {
            id: 3,
            name: "Kitchen",
        },
        {
            id: 4,
            name: "Office & Study Room",
        },
        {
            id: 5,
            name: "Beds",
        },
        {
            id: 6,
            name: "Others",
        }
    ]

    const [activeTab, setActiveTab] = useState(0)

    const handleClickFilter = (id: number) => {
        setActiveTab(id)

     const filteredImage = data.filter((image: any) => image.category_id === id)  
     
     if (id === 0) {
        setfilteredCat(data)
     } else {
        setfilteredCat(filteredImage)
     }
    }


  return (
    <>
    <div className='space-x-4 text-center'>
      {
        categories?.map((category) => (
            <>
            <button
            //   style={montserrat.style}
              className={`px-[20px] py-[10px] rounded-md mt-4 font-bold ${activeTab === category.id ? 'bg-[#2d3091] text-[#fff]' : 'text-[#000] bg-gray-200'}`}
              onClick={() => handleClickFilter(category.id)}
            >
              {category.name}
            </button>
            </>
        ))
      }

    </div>
    </>
  )
}

export default FilterButtons