import React, {useEffect, useState} from 'react'

function CatListing() {
  const [catListings, setCatListings] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(false);

  const fetchCatListingAPI = async () => {
    setLoading(true);
    console.log(`${import.meta.env.VITE_RANDOM_CATLISTING_URI}?page=${page}&limit=4`)
    const response = await fetch(`${import.meta.env.VITE_RANDOM_CATLISTING_URI}?page=${page}&limit=4`);

    const json = await response.json();
    setTotalPages(json.data.totalPages)
    setCatListings(json.data.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCatListingAPI(page);
  }, [page]);

  const handleNext = () => {
    if (page < totalPages) {
      setPage(prevPage => prevPage + 1);
    }
  };

    return (
      <>
        <div className='flex h-screen bg-cover bg-center'
             style={{
               backgroundImage: "url('beige-floral-background-with-abstract-doodle-shapes_53876-165523.jpg')",
               backgroundRepeat: 'repeat-x',
               backgroundSize: 'auto 100%',
               backgroundAttachment: 'fixed',
               overflow: 'hidden'
             }}>
          <div className='absolute -inset-0 bg-black' style={{ opacity: 0.7 }}></div>
          <div className='relative z-10 w-full whitespace-nowrap'>
            {catListings.map((cat, index) => (
              <div key={index}
                   className="inline-block max-w-sm rounded-xl overflow-hidden shadow-lg bg-white my-16 mx-10 w-[370px] h-[650px]">
                <div className='h-2/5 overflow-hidden'>
                  <img className="w-[400px]" style={{ objectFit: `cover` }} src={cat.image} alt={cat.name}/>
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{cat.name}</div>
                  <p className="text-gray-700 text-xs text-wrap">
                    {cat.description}
                  </p>
                </div>
                <div className="px-6">
                  <div className="flex justify-start px-1 py-1 text-sm font-semibold text-black-700">
                    <div className='italic font-semibold mr-16'>Origin</div>
                    <div className=''>{cat.origin}</div>
                  </div>
                  <div className="text-sm font-semibold text-wrap text-black-700 mr-2 mb-2">
                    <div className='py-2 italic text-black-700'>Temperament</div>
                    <div className='flex space-x-2 rounded-xl px-1 py-1'>
                      {cat.temperament.split(",").slice(0, 3).map((temp, index) => (
                        <div key={index}
                            className='bg-gray-300 text-gray-700 px-2 py-1 rounded-full text-xs'>
                          {temp.trim()}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex text-sm font-semibold text-black">
                    <div className='italic font-semibold mr-16'>Life Span</div>
                    <div className=''>{cat.life_span} Years</div>
                  </div>
                  <button
                    className="flex text-sm font-semibold text-black my-16"
                    onClick={() => window.open(`https://en.wikipedia.org/wiki/${cat.name}_cat`, "_blank")}>
                    Learn More
                  </button>
                </div>
              </div>
            ))}
            <div className="flex justify-center mt-8">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                className={`px-4 py-2 mx-1 rounded ${page === index + 1 ? 'bg-blue-700' : 'bg-blue-500'} text-white`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button
              className="px-4 py-2 mx-1 bg-blue-500 text-white rounded"
              onClick={handleNext}
              disabled={loading || page >= totalPages}
            >
              {loading ? 'Loading...' : 'Next 3 Items'}
            </button>
          </div>
          </div>
        </div>
      </>
    );


}

export default CatListing