import React, { useState, useEffect } from "react";
import c1 from "../../assets/coffee2.png"; // Example image import

const Products = () => {
  const tableItems = [
    {
      name: "Liam James",
      email: "liamjames@example.com",
      position: "Software engineer",
      image: c1, // Example image usage
    },
    {
      name: "Olivia Emma",
      email: "oliviaemma@example.com",
      position: "Product designer",
      image: c1,
    },
    {
      name: "William Benjamin",
      email: "william.benjamin@example.com",
      position: "Front-end developer",
      image: c1,
    },
    {
      name: "Henry Theodore",
      email: "henrytheodore@example.com",
      position: "Laravel engineer",
      image: c1,
    },
    {
      name: "Amelia Elijah",
      email: "amelia.elijah@example.com",
      position: "Open source manager",
      image: c1,
    },
  ];

  const [areAllChecked, setAllChecked] = useState(false);
  const [checkboxItems, setCheckboxItems] = useState({});
  const [showAddProduct, setShowAddProduct] = useState(false);

  // Initialize checkboxItems state on mount
  useEffect(() => {
    const initialCheckboxes = {};
    tableItems.forEach((item, idx) => {
      initialCheckboxes[`checkbox${idx}`] = false;
    });
    setCheckboxItems(initialCheckboxes);
  }, []);

  // Toggle all checkbox items
  const handleCheckboxItems = () => {
    const updatedCheckboxes = {};
    const newAllChecked = !areAllChecked;
    tableItems.forEach((item, idx) => {
      updatedCheckboxes[`checkbox${idx}`] = newAllChecked;
    });
    setCheckboxItems(updatedCheckboxes);
    setAllChecked(newAllChecked);
  };

  // Update individual checkbox state
  const handleCheckboxChange = (e, idx) => {
    const updatedCheckboxes = {
      ...checkboxItems,
      [`checkbox${idx}`]: e.target.checked,
    };
    setCheckboxItems(updatedCheckboxes);
    setAllChecked(false); // Uncheck "Select All" if any checkbox changes
  };

  // Check if all checkboxes are checked
  useEffect(() => {
    const checkboxItemsVal = Object.values(checkboxItems);
    const allChecked = checkboxItemsVal.every((item) => item);
    setAllChecked(allChecked);
  }, [checkboxItems]);

  // Function to toggle visibility of add product form
  const toggleAddProduct = () => {
    setShowAddProduct(!showAddProduct);
  };

  // Placeholder function for handling form submission
  const handleAddProduct = (e) => {
    e.preventDefault();
    // Implement logic to handle adding a product here
    toggleAddProduct(); // Example: Close form after submission
  };

  return (
    <div className="max-w-screen-xl mx-auto ">
      <div className="flex items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl">Total Products</h3>
          <p className="text-gray-600 text-sm mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="mt-3 md:mt-0">
          <button
            onClick={toggleAddProduct}
            className="inline-block px-4 py-2 text-white duration-150 font-medium bg-primary rounded-lg hover:bg-primary/95 md:text-sm"
          >
            Add Product
          </button>
        </div>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6 flex items-center gap-x-4">
                <div>
                  <input
                    type="checkbox"
                    id="checkbox-all-items"
                    className="peer hidden"
                    checked={areAllChecked}
                    onChange={handleCheckboxItems}
                  />
                  <label
                    htmlFor="checkbox-all-items"
                    className="relative flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
                  ></label>
                </div>
                Product Name
              </th>
              <th className="py-3 px-6">Product Image</th>
              <th className="py-3 px-6">Product Type</th>
              <th className="py-3 px-6">Product Price</th>

              <th className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {tableItems.map((item, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="px-6 py-4 whitespace-nowrap flex items-center gap-x-4">
                  <div>
                    <input
                      type="checkbox"
                      id={`checkbox-${idx}`}
                      className="peer hidden"
                      checked={checkboxItems[`checkbox${idx}`]}
                      onChange={(e) => handleCheckboxChange(e, idx)}
                    />
                    <label
                      htmlFor={`checkbox-${idx}`}
                      className="relative flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
                    ></label>
                  </div>
                  {item.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-12 w-12 object-cover rounded-full"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.position}</td>

                <td className="text-right px-6 whitespace-nowrap">
                  <a
                    href="#"
                    className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                  >
                    Edit
                  </a>
                  <button className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Overlay for Add Product form */}
      {showAddProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 w-full max-w-md mx-auto rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Add Product</h2>
            <form onSubmit={handleAddProduct} className="space-y-4">
              <div>
                <label htmlFor="productName" className="text-sm text-gray-700">
                  Product Name
                </label>
                <input
                  type="text"
                  id="productName"
                  name="productName"
                  placeholder="Enter Product name"
                  className="mt-2 border outline-none p-2 bg-gray-50 w-full border-gray-300 rounded-md sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="productType" className="text-sm text-gray-700">
                  Product Type
                </label>
                <input
                  type="text"
                  id="productType"
                  name="productType"
                  placeholder="Enter product type"
                  className="mt-2 border outline-none p-2 bg-gray-50 w-full border-gray-300 rounded-md sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="productPrice" className="text-sm text-gray-700">
                  Product Price
                </label>
                <input
                  type="number"
                  id="productPrice"
                  name="productPrice"
                  placeholder="Enter Product price"
                  className="mt-2 border outline-none p-2 bg-gray-50 w-full border-gray-300 rounded-md sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="productPrice" className="text-sm text-gray-700">
                  Product Image
                </label>
                <input
                  type="file"
                  id="productPrice"
                  name="productPrice"
                 
                  className="mt-2  p-2 w-full text-sm"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="text-sm px-4 py-2 text-white font-medium bg-primary rounded-lg hover:bg-primary/95 duration-300"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={toggleAddProduct}
                  className="inline-block ml-4 text-sm px-4 py-2 text-gray-600 font-medium bg-gray-200 rounded-lg hover:bg-gray-300 duration-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
