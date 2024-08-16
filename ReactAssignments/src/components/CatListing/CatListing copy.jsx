import React, {useEffect, useState} from 'react'

function CatListing() {

    const [catListings, setCatListings] = useState([])
    const [pageNumber, setpageNumber] = useState(1)
    const fetchCatListingAPI = async () => {
        const response = await fetch(`${import.meta.env.VITE_RANDOM_CATLISTING_URI}?page=${pageNumber}&limit=8`)
        const json = await response.json()
        console.log(json.data.data)
        setCatListings(json.data.data)
        return json;
    }

    useEffect(() => {
        fetchCatListingAPI()
    }, [])


    return (
        <>
            <div className='flex justify-center items-center bg-cover bg-center h-screen'
                 style={{  backgroundImage: "url('beige-floral-background-with-abstract-doodle-shapes_53876-165523.jpg')"}}>
                <div className='flex h-auto w-full  text-white justify-center py-10'>
                    <div className='m-4 flex overflow-x-auto space-x-36 p-4'>
                        {catListings.slice(0, 8).map((individualData) => (
                            <div
                            key={individualData.id}
                            className='flex-shrink-0 w-[300px] h-[620px] bg-gray-800 text-white rounded-lg shadow-lg flex flex-col'
                          >
                            {/* Image Container */}
                            <div className='h-2/5 overflow-hidden'>
                              <img
                                src={individualData.image}
                                alt={individualData.name}
                                className='w-full h-full object-cover'
                              />
                            </div>
                          
                            {/* Text Content Container */}
                            <div className='flex flex-col flex-grow p-4 bg-gray-900 overflow-y-auto'>
                              <h2 className='text-lg font-bold'>{individualData.name}</h2>
                              <div className='text-sm mt-2'>
                                {individualData.description}
                              </div>
                              
                              {/* Additional Information Container */}
                              <div className='text-sm mt-auto'>
                                <div>{individualData.origin}</div>
                                <div>{individualData.temperature}</div>
                                <div>{individualData.lifespan}</div>
                              </div>
                            </div>
                          </div>
                          
                          
                          
                        ))}
                    </div>

                </div>

            </div>
        </>
    )
}

export default CatListing