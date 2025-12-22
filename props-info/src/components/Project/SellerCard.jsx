import React from "react";

const SellerCard = (props) => {
  const { iceCreams = [] } = props;

  return (
    <>
      <h1 className="text-2xl font-semibold text-center my-6">
        Ice Cream Collection 🍨
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        {iceCreams.map((iceCream) => (
          <div
            key={iceCream.id}
            className="w-[340px] bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition"
          >
            {/* Image */}
            <div className="flex justify-center mt-4">
              <img
                src={iceCream.image}
                alt={iceCream.name}
                className="w-40 h-40 rounded-full object-cover border"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-700">
                {iceCream.name}
              </h2>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-2">
                {iceCream.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 mt-3">
                {iceCream.description}
              </p>

              {/* Toppings */}
              <div className="flex flex-wrap gap-2 mt-2">
                {iceCream.toppings.map((topping, index) => (
                  <span
                    key={index}
                    className="text-xs border border-gray-300 px-2 py-1 rounded-full"
                  >
                    {topping}
                  </span>
                ))}
              </div>

              {/* Price & Button */}
              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="text-2xl font-bold text-amber-500">
                    ${iceCream.price.toFixed(2)}
                  </p>
                  <p className="text-xs text-gray-500">
                    +${iceCream.delivery} delivery
                  </p>
                </div>

                <button className="bg-amber-400 hover:bg-amber-500 text-white px-4 py-2 rounded-lg text-sm">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SellerCard;
