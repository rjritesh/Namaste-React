import { useState } from "react";
import ShimmerMenu from "./ShimmerMenu";
import { ChevronUp, ChevronDown } from 'lucide-react';
import { CDN_URL2 } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import ResMenuHeader from "./ResMenuHeader";
import { useDispatch } from "react-redux"
import { addItem} from "../utils/cartSlice"

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo, menu } = useRestaurentMenu(resId);
  const [openIndex, setOpenIndex] = useState(0);


  const dispatch = useDispatch()


  if (!resInfo) return <ShimmerMenu></ShimmerMenu>

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <ResMenuHeader resInfo={resInfo} />

      <div className="flex flex-col gap-6">
        {menu.map((category, index) => {
          const items = category?.card?.card?.itemCards;
          const title = category?.card?.card?.title;

          if (!items || !title) return null;

          return (
            <div key={index} className="border border-gray-200 rounded-lg">
              {/* Accordion Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center px-4 py-3 text-left font-bold text-lg hover:bg-gray-50 transition cursor-pointer"
                aria-expanded={openIndex === index}
              >
                <span>{title} ({items.length})</span>
                <span className="text-xl">{openIndex === index ? <ChevronUp /> : <ChevronDown />}</span>
              </button>

              {/* Accordion Body */}
              {openIndex === index && (
                <div className="p-4 flex flex-col gap-5">
                  {items.map((item, i) => {
                    const info = item?.card?.info;
                    if (!info) return null;

                    return (
                      <div
                        key={i}
                        className="bg-white p-4 rounded-lg shadow-sm flex gap-4 items-start justify-between hover:shadow-md transition-shadow duration-200"
                      >
                        {/* Image */}
                        {info.imageId && (
                          <img
                            src={CDN_URL2 + info.imageId}
                            alt={info.name}
                            className="w-36 h-28 object-cover rounded-md flex-shrink-0"
                          />
                        )}

                        {/* Info */}
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-800">
                              {info.name} - ₹{(info.price || info.defaultPrice) / 100}
                            </h4>
                            {info.description && (
                              <p className="text-sm text-gray-600 mt-1">
                                {info.description}
                              </p>
                            )}
                          </div>
                          <div className="mt-4">
                            <button className="px-4 py-1 bg-white border border-orange-500 text-orange-500 rounded-md text-sm font-semibold hover:bg-orange-50 transition cursor-pointer"
                              onClick={() =>

                                dispatch(addItem(info))

                              }
                            >
                              ADD +
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
