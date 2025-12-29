import React, { useState, useEffect } from 'react'

const SearchFilter = () => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products')
        const data = await response.json()
        setProducts(data.products)
        setFilteredProducts(data.products)
      } catch (error) {
        console.error('Error fetching products:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredProducts(products)
    } else {
      const filtered = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredProducts(filtered)
    }
  }, [searchTerm, products])

  return (
    <div className='p-6 bg-white rounded-lg shadow-lg border border-gray-200'>
      <h2 className='text-2xl font-bold mb-4 text-gray-800'>Example 5: Search & Filter</h2>
      
      <input
        type="text"
        placeholder="Search products by name, category, or brand..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4'
      />

      {loading ? (
        <div className='text-center py-8'>
          <div className='inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500'></div>
        </div>
      ) : (
        <>
          <p className='text-sm text-gray-600 mb-4'>
            Showing {filteredProducts.length} of {products.length} products
          </p>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product.id} className='border-2 border-gray-300 p-4 rounded-md hover:shadow-md transition-shadow'>
                  <img src={product.thumbnail} alt={product.title} className='w-full h-40 object-cover rounded mb-2' />
                  <h3 className='font-bold text-black mb-1'>{product.title}</h3>
                  <p className='text-sm text-gray-500 mb-2'>{product.category}</p>
                  <p className='text-sm font-bold text-black'>${product.price}</p>
                  <p className='text-xs text-gray-500'>Rating: {product.rating} ⭐</p>
                </div>
              ))
            ) : (
              <div className='col-span-full text-center py-8 text-gray-500'>
                No products found matching "{searchTerm}"
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default SearchFilter

