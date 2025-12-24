import React from 'react'

const SellerCard = () => {
    return (
        <div className='mt-2 flex flex-wrap gap-2'>
            <div className='border border-gray-400 w-[400px] flex flex-col p-4 rounded-2xl '>
                <img src="https://media.istockphoto.com/id/1153411309/photo/treaded-ice-cream-with-3-scoops-of-sweet-ice-cream-insulated-on-a-white-background.jpg?s=612x612&w=0&k=20&c=Uf8LK4S7VCnnlWR68lRy7-ypcrYQhkzovolT48yc8dY=" alt="" className='w-[200px] h-[200px]rounded-full object-cover mx-auto' />
                <div className="p-4">
                    <h1 className='font-bold text-3xl text-gray-600 text-left'>Valina Ice Cream</h1>
                    <div className='flex gap-2 mt-1 '>
                        <p className=' px-1 py-1'>Vegan</p>
                        <p className=' px-1 py-1'>Gluten Free</p>
                        <p className=' px-1 py-1'>Organic</p>
                    </div>
                    <div className='mt-1 text-left ps-1 '>
                        <p>Lorem ipsum dolor sit adipisicing elit. Temporibus, fugit!
                            <span className='border border-gray-400 p-1 ms-1 rounded-full'>Choco Chip</span> <span className='border border-gray-400 p-1 rounded-full'>Nuts</span></p>
                    </div>
                    <div className='flex justify-between items-center mt-2'>
                        <div className='flex flex-col'>
                            <h3 className='text-3xl text-amber-400 font-bold'>$10.00</h3>
                            <p className='text-sm text-gray-500 text-left'>+$2 delivery</p>
                        </div>
                        <div className='flex justify-center items-center w-100%'>
                            <button className='bg-amber-400 text-white px-4 py-2 rounded-md'>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
           
          

        </div>
    )
}

export default SellerCard