const products = [
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://fabrilife.com/products/6526a0ac21c13-square.jpg?v=20',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 2,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://fabrilife.com/products/642edbcbb2bcb-square.jpg?v=20',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 3,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://fabrilife.com/products/6526a0ac21c13-square.jpg?v=20',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 4,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://fabrilife.com/products/642edbcbb2bcb-square.jpg?v=20',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 5,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://fabrilife.com/products/642edbcbb2bcb-square.jpg?v=20',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 6,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://fabrilife.com/products/64906129076c1-square.jpg?v=20',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 7,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://fabrilife.com/products/64906129076c1-square.jpg?v=20',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 8,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://fabrilife.com/products/64970a502f1e2-square.jpg?v=20',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 9,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://fabrilife.com/products/642edbcbb2bcb-square.jpg?v=20',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 10,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://fabrilife.com/products/64970a502f1e2-square.jpg?v=20',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
  ]
  
  export default function SampleProduct() {
    return (
      <div className="bg-white">
        <div className="mx-auto container px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
  
          <div className="mt-6 grid grid-cols-2 gap-x-2 gap-y-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:gap-x-4">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }