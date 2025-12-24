import React from 'react'

const SellerCard = (props) => {

    const { iceCreams = [] } = props

    console.log(props)
    return (
        <>
            <h1 className='text-2xl font-bold text-center my-4'>Ice Creams Card with Array of object</h1>
            <div className='mt-2 flex flex-wrap gap-2'>
                {iceCreams.map((iceCream) => (
                    <div key={iceCream.id} className='border border-gray-400 w-[400px] flex flex-col p-4 rounded-2xl '>
                        <img src={iceCream.image} alt={iceCream.name} className='w-[200px] h-[200px] rounded-full object-cover mx-auto' />
                        <div className="p-4">
                            <h1 className='font-bold text-3xl text-gray-600 text-left'>{iceCream.name}</h1>
                            <div className='flex gap-2 mt-1 '>
                                {iceCream.tags.map((tag, index) => (
                                    <p key={index} className=' px-1 py-1'>{tag}</p>
                                ))}
                            </div>
                            <div className='mt-1 text-left ps-1 '>
                                <p>
                                    {iceCream.description}
                                    {iceCream.toppings.map((topping, index) => (
                                        <span key={index} className='border border-gray-400 p-1 ms-1 rounded-full'>{topping}</span>
                                    ))}
                                </p>
                            </div>
                            <div className='flex justify-between items-center mt-2'>
                                <div className='flex flex-col'>
                                    <h3 className='text-3xl text-amber-400 font-bold'>${iceCream.price.toFixed(2)}</h3>
                                    <p className='text-sm text-gray-500 text-left'>+${iceCream.delivery} delivery</p>
                                </div>
                                <div className='flex justify-center items-center w-100%'>
                                    <button className='bg-amber-400 text-white px-4 py-2 rounded-md'>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default SellerCard
