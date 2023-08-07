import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetCategoryQuery, useUpdateCategoryMutation } from "../../../user/category.services";
import { ICategory } from "../../../../interfaces/category.interface";

const initialState: Omit<ICategory, "_id"> = {
  name: ""
};

const UpdateCategory = () => {
  const { id } = useParams();
  const { data } = useGetCategoryQuery(id!);
  const cate = data?.productCategory
  const [editedCategory, setEditedCategory] = useState<Omit<ICategory, "_id"> | ICategory>(initialState);
  const [updateCategory, { isLoading }] = useUpdateCategoryMutation();

  const handleUpdateCategory = async () => {
    try {
      const updatedCategory = await updateCategory({
        id: id ? id : (id as string),
        body: {
          name: editedCategory.name,
        }
      }).unwrap();
      setEditedCategory(initialState);
      console.log("Category updated:", updatedCategory);

    } catch (error) {
      console.error("Error updating category:", error);
    }
  };

  return (
    <>
      <h1 className="font-Poppins text-2xl">EDIT BRAND</h1>
      <form className="p-2 mt-10" >
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-800">Category name</label>
          <input type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="" value={editedCategory.name || cate?.name || ""}
            onChange={(e) =>
              setEditedCategory({
                ...editedCategory,
                name: e.target.value,
              })
            } />
        </div>
        <button type="submit"
          className="bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 shadow-mdfocus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 px-5 py-2.5" onClick={handleUpdateCategory} disabled={isLoading}>
          Edit
        </button>
        {isLoading && <p>Updating category...</p>}
      </form >
    </>
  )
}

export default UpdateCategory
