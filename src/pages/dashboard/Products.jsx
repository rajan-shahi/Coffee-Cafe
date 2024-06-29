import React, { useState, useEffect } from "react";
import c1 from "../../assets/coffee2.png"; // Example image import

const Products = () => {
  const initialTableItems = [
    {
      id: 1,
      name: "Premium Coffee",
      type: "Coffee",
      price: "Rs 300",
      image: c1,
    },
    {
      id: 2,
      name: "Hot Coffee",
      type: "Coffee",
      price: "Rs 150",
      image: c1,
    },
    {
      id: 3,
      name: "Milk Coffee",
      type: "Coffee",
      price: "Rs 120",
      image: c1,
    },
    {
      id: 4,
      name: "Cold Coffee",
      type: "Coffee",
      price: "Rs 190",
      image: c1,
    },
  ];

  const [products, setProducts] = useState(initialTableItems);
  const [areAllChecked, setAllChecked] = useState(false);
  const [checkboxItems, setCheckboxItems] = useState({});
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [productName, setProductName] = useState("");
  const [productType, setProductType] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState(null); // State for selected image file
  const [imagePreview, setImagePreview] = useState(null); // State for image preview
  const [isEditing, setIsEditing] = useState(false); // State for edit mode
  const [selectedProduct, setSelectedProduct] = useState(null); // State for selected product to edit

  // Initialize checkboxItems state on mount
  useEffect(() => {
    const initialCheckboxes = {};
    initialTableItems.forEach((item, idx) => {
      initialCheckboxes[`checkbox${idx}`] = false;
    });
    setCheckboxItems(initialCheckboxes);
  }, []);

  // Toggle all checkbox items
  const handleCheckboxItems = () => {
    const updatedCheckboxes = {};
    const newAllChecked = !areAllChecked;
    initialTableItems.forEach((item, idx) => {
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

  // Function to delete a product by ID
  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
    // Optionally, update checkboxItems state and areAllChecked state if necessary
  };

  // Function to toggle visibility of add/edit product form
  const toggleAddProduct = (product = null) => {
    setShowAddProduct(!showAddProduct);
    setIsEditing(product !== null);
    setSelectedProduct(product);

    if (product) {
      // Populate form fields with selected product details for editing
      setProductName(product.name);
      setProductType(product.type);
      setProductPrice(product.price.replace("Rs ", ""));
      setImagePreview(product.image);
      // Assuming `productImage` state should be managed separately for editing image
      setProductImage(null); // Clear image selection for now; you may handle this differently
    } else {
      // Reset form fields and image preview on toggle for adding new product
      setProductName("");
      setProductType("");
      setProductPrice("");
      setProductImage(null);
      setImagePreview(null);
    }
  };

  // Handle form submission for adding or updating a product
  const handleAddProduct = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!productName || !productType || !productPrice || !productImage) {
      alert("Please fill all fields and select an image.");
      return;
    }

    if (isEditing && selectedProduct) {
      // Update existing product
      const updatedProducts = products.map((product) =>
        product.id === selectedProduct.id
          ? {
              ...product,
              name: productName,
              type: productType,
              price: `Rs ${productPrice}`,
              image: imagePreview || c1, // Use image preview or default image
            }
          : product
      );
      setProducts(updatedProducts);
    } else {
      // Create new product object
      const newProduct = {
        id: products.length + 1,
        name: productName,
        type: productType,
        price: `Rs ${productPrice}`,
        image: imagePreview || c1, // Use image preview or default image
      };

      // Update products state with new product
      setProducts([...products, newProduct]);
    }

    toggleAddProduct(); // Close form after submission
  };

  // Handle image selection and preview
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (!selectedImage) {
      return;
    }

    setProductImage(selectedImage);

    // Display image preview
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(selectedImage);
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl">
            Total Products: {products.length}
          </h3>
          <p className="text-gray-600 text-sm mt-1">Total number of products</p>
        </div>
        <div className="mt-3 md:mt-0">
          <button
            onClick={() => toggleAddProduct()}
            className="inline-block px-4 py-2 text-white duration-150 font-medium bg-primary rounded-lg hover:bg-primary/95 md:text-sm"
          >
            Add Product
          </button>
        </div>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="text-gray-600 text-sm border-b">
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
            {products.map((item, idx) => (
              <tr
                key={item.id}
                className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="px-6 py-4 whitespace-nowrap flex items-center gap-x-4">
                  <div>
                    <input
                      type="checkbox"
                      id={`checkbox-${item.id}`}
                      className="peer hidden"
                      checked={checkboxItems[`checkbox${idx}`]}
                      onChange={(e) => handleCheckboxChange(e, idx)}
                    />
                    <label
                      htmlFor={`checkbox-${item.id}`}
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
                <td className="px-6 py-4 whitespace-nowrap">{item.type}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.price}</td>
                <td className="text-right px-6 whitespace-nowrap">
                  <a
                    href="#"
                    onClick={() => toggleAddProduct(item)}
                    className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                  >
                    Edit
                  </a>
                  <button
                    onClick={() => handleDeleteProduct(item.id)}
                    className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg ml-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Overlay for Add/Edit Product form */}
      {showAddProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 md:px-0 px-4">
          <div className="bg-white p-6 w-full max-w-md mx-auto rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">
              {isEditing ? "Edit Product" : "Add Product"}
            </h2>
            <form onSubmit={handleAddProduct} className="space-y-4">
              <div>
                <label htmlFor="productName" className="text-sm text-gray-700">
                  Product Name
                </label>
                <input
                  type="text"
                  id="productName"
                  name="productName"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  placeholder="Enter Product name"
                  className="mt-2 border outline-none p-2 bg-gray-50 w-full border-gray-300 rounded-md sm:text-sm"
                  required
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
                  value={productType}
                  onChange={(e) => setProductType(e.target.value)}
                  placeholder="Enter product type"
                  className="mt-2 border outline-none p-2 bg-gray-50 w-full border-gray-300 rounded-md sm:text-sm"
                  required
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
                  value={productPrice}
                  onChange={(e) => setProductPrice(e.target.value)}
                  placeholder="Enter Product price"
                  className="mt-2 border outline-none p-2 bg-gray-50 w-full border-gray-300 rounded-md sm:text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="productImage" className="text-sm text-gray-700">
                  Product Image
                </label>
                <input
                  type="file"
                  id="productImage"
                  name="productImage"
                  onChange={handleImageChange}
                  className="mt-2 p-2 w-full text-sm"
                  accept="image/*"
                  required={!isEditing} // Require image selection only for new products
                />
                {imagePreview && (
                  <div className="mt-2">
                    <img
                      src={imagePreview}
                      alt="Product Preview"
                      className="h-20 w-20 object-cover rounded-md"
                    />
                  </div>
                )}
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="text-sm px-4 py-2 text-white font-medium bg-primary rounded-lg hover:bg-primary/95 duration-300"
                >
                  {isEditing ? "Update" : "Save"}
                </button>
                <button
                  type="button"
                  onClick={() => toggleAddProduct()}
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
