const products = [
    {
      id: 1,
      href: '#',
      name:1
      
    },
    {
        id: 1,
        href: '#',
        name:2
        
      },
      {
        id: 3,
        href: '#',
        name:3
        
      },
      {
        id: 4,
        href: '#',
        name:4
        
      }
    // More products...
  ]



function Trys() {
    return ( <>
 <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
    
    </> );
}

export default Trys;