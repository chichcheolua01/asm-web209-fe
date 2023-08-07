
import React, { useState } from "react";
import { useCreateCategoryMutation, useGetCategoriesQuery } from "../../../user/category.services";
import { ICategory } from "../../../../interfaces/category.interface";
import { toast } from "react-toastify";


const CreateCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const { data: categories } = useGetCategoriesQuery();
  const [createCategory, { isLoading }] = useCreateCategoryMutation();

  const handleAddCategory = async () => {
    if (categoryName.trim() === "") {
      return;
    }

    try {
      const newCategory = await createCategory({
        name: categoryName,
        slug: categoryName.toLowerCase().replace(/\s+/g, "-"),
        products: []
      }).unwrap();
      setCategoryName("");
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

  return (
    <>
      <h1 className="font-Poppins text-2xl">Create Category</h1>
      <form className="p-2 mt-10">
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-800">Brand name</label>
          <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)} />
        </div>
        <button type="submit" className="bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 shadow-mdfocus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 px-5 py-2.5" onClick={handleAddCategory} disabled={isLoading} >
          Thêm mới
        </button>
        {isLoading && <p>Adding category...</p>}
      </form>
    </>
  )
}

export default CreateCategory
