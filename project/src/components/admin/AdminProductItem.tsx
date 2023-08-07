import { IProduct } from "../../interfaces/product.interface";
import { ICategory } from "../../interfaces/category.interface";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/fn";

interface AdminProductItemProps {
  product: IProduct;
  index: number;
  handleDeleteProduct: (id: string) => void;
  startEdit: (id: string) => void;
}

const AdminProductItem = (props: AdminProductItemProps) => {
  const { product, index, handleDeleteProduct, startEdit } = props;

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {index}
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        <span className="line-clamp-4">{product.name}</span>
      </td>
      <td className="w-32 p-4">
        <img src={product.thumb as string} alt="Apple Watch" />
      </td>
      <td className="px-6 py-4">{formatCurrency(product.price)}</td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        <p className="line-clamp-4">{product.description}</p>
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {(product.categoryId as ICategory).name}
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center">
          <Link to={`update/${product._id}`}>
            <button
              className="text-main-500 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={() => startEdit(product._id)}
            >
              Edit
            </button>
          </Link>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={() => handleDeleteProduct(product._id)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default AdminProductItem;
