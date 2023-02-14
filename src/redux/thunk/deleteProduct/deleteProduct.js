import { removeProduct } from "../../actions/productAction";

const deleteProduct = (product) => {
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/productDel?id=${product}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
    if (data.acknowledged && data.deletedCount > 0) {
      dispatch(removeProduct(product));
    }
  };
};
export default deleteProduct;
