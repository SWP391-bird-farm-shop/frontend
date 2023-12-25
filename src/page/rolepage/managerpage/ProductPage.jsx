import React, { useEffect, useState } from "react";
import { FaEye, FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../../components/utils/requestAPI";
import useAuth from "../../../hooks/useAuth";
import { data } from "jquery";
import PopupModal from "../../../components/modal/PopupModal";
import "./ProductPage.css";

const ProductPage = () => {
  const { auth } = useAuth();

  const { action } = useParams();
  const [listProduct, setListProduct] = useState(null);
  const [listCage, setListCage] = useState(null);
  const [listFood, setListFood] = useState(null);
  const [listToy, setListToy] = useState(null);

  const [showPopup, setShowPopup] = useState("");
  const [result, setResult] = useState(false);

  const [id, setId] = useState("");

  const navigate = useNavigate();

  const fetchData = async () => {
    const url = "/api/Product/get-all";
    try {
      const response = await api.get(url);
      console.log(response.data);
      setListProduct(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    const url = `/api/Product/delete-product?id=${id}`;
    try {
      const response = await api.delete(url);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateCage = async (id) => {
    navigate(`/manager/update-product/add-cage/${id}`);
  };

  const handleUpdateFood = async (id) => {
    navigate(`/manager/update-product/add-food/${id}`);
  };

  const handleUpdateToy = async (id) => {
    navigate(`/manager/update-product/add-toy/${id}`);
  };

  const handleShowInfo = async (id) => {
    navigate(`/manager/item-info/view-info/${id}`);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const sortByCage = () => {
      const list = [];
      listProduct?.map((cage) => {
        cage?.categoryProduct.map((cate) => {
          console.log(cate.category);
          if (cate?.category.categoryName === "Cage") list.push(cage);
        });
      });
      setListCage(list);
    };

    const sortByFood = () => {
      const list = [];
      listProduct?.map((food) => {
        food.categoryProduct.map((cate) => {
          if (cate?.category.categoryName === "Food") list.push(food);
        });
      });
      setListFood(list);
    };

    const sortByToy = () => {
      const list = [];
      listProduct?.map((toy) => {
        toy.categoryProduct.map((cate) => {
          if (cate?.category.categoryName === "Toy") list.push(toy);
        });
      });
      console.log(list);
      setListToy(list);
    };

    if (listProduct) {
      sortByCage();
      sortByFood();
      sortByToy();
    }
  }, [listProduct]);

  function formatCash(currency) {
    return currency?.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  const handlePopup = (id) => {
    setShowPopup(true);
    setId(id);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  if (result) {
    handleDelete(id);
    setResult(false);
  }

  //listProduct
  if (action === "view-product") {
    return (
      <div className="product-manager-page">
        {listCage?.length > 0 ? (
          <div>
            <h2 className="product-manager-page-title">Lồng chim</h2>
            <table className="user-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Ảnh</th>
                  <th>Tên sản phẩm</th>
                  <th>Kiểu dáng</th>
                  <th>Kích thước</th>
                  <th>Màu sắc</th>
                  <th>Chất liệu</th>
                  <th>Số lượng</th>
                  <th>Giá tiền</th>
                  <th>Trạng thái</th>
                  <th>Tác vụ</th>
                </tr>
              </thead>
              <tbody className="content-info">
                {listCage?.map((cage) => (
                  <tr key={cage.productId}>
                    <td> {cage.productId} </td>
                    <td>
                      <img src={cage?.image[0]?.imageUrl} alt={`${cage.productName}`} />
                    </td>
                    <td className="overflow overflow-scroll short">
                      {cage.productName}
                    </td>
                    <td className="overflow overflow-scroll short">
                      kiểu dáng
                    </td>
                    <td className="overflow overflow-scroll short">
                      {cage?.sizeProduct[0]?.size.sizeDescription}
                    </td>
                    <td className="overflow overflow-scroll short">
                      {cage?.materialProduct[0]?.material.materialName}
                    </td>
                    <td className="overflow overflow-scroll short">
                      {cage?.colorProduct[0]?.color.colorName}
                    </td>

                    <td className="overflow overflow-scroll short">
                      {cage.quantity}
                    </td>
                    <td className="overflow overflow-scroll short">
                      ₫{formatCash(cage.price)}
                    </td>
                    {cage.status ? (
                      // Nội dung khi user.gender là true
                      <td>Hiển thị</td>
                    ) : (
                      // Nội dung khi user.gender là false
                      <td>Không hiển thị</td>
                    )}
                    <td>
                      <button
                        className="update-button"
                        onClick={() => handleShowInfo(cage.productId)}
                      >
                        <FaEye />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>
            <h2 className="product-manager-page-title">Lồng chim</h2>
            <h4>Không có sản phẩm</h4>
          </div>
        )}
        {listFood?.length > 0 ? (
          <div>
            <h2 className="product-manager-page-title">Thức ăn cho chim</h2>
            <table className="user-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Ảnh</th>
                  <th>Tên sản phẩm</th>
                  <th>Số lượng</th>
                  <th>Giá tiền</th>
                  <th>Trạng thái</th>
                  <th>Tác vụ</th>
                </tr>
              </thead>
              <tbody className="content-info">
                {listFood?.map((food) => (
                  <tr key={food.productId}>
                    <td> {food.productId} </td>
                    <td>
                      <img src={food?.image[0]?.imageUrl} alt={`${food.productName}`} />
                    </td>
                    <td className="overflow overflow-scroll short">
                      {food.productName}
                    </td>

                    <td className="overflow overflow-scroll short">
                      {food.quantity}
                    </td>
                    <td className="overflow overflow-scroll short">
                      ₫{formatCash(food.price)}
                    </td>
                    {food.status ? (
                      // Nội dung khi user.gender là true
                      <td>Hiển thị</td>
                    ) : (
                      // Nội dung khi user.gender là false
                      <td>Không hiển thị</td>
                    )}
                    <td>
                      <button
                        className="update-button"
                        onClick={() => handleShowInfo(food.productId)}
                      >
                        <FaEye />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>
            <h2 className="product-manager-page-title">Thức ăn cho chim</h2>
            <h4>Không có sản phẩm</h4>
          </div>
        )}
        {listToy?.length > 0 ? (
          <div>
            <h2 className="product-manager-page-title">Phụ kiện - Đồ chơi</h2>
            <table className="user-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Ảnh</th>
                  <th>Tên sản phẩm</th>
                  <th>Số lượng</th>
                  <th>Giá tiền</th>
                  <th>Trạng thái</th>
                  <th>Tác vụ</th>
                </tr>
              </thead>
              <tbody className="content-info">
                {listToy?.map((toy) => (
                  <tr key={toy.productId}>
                    <td> {toy.productId} </td>
                    <td>
                      <img src={toy?.image[0]?.imageUrl} alt={`${toy.productName}`} />
                    </td>
                    <td className="overflow overflow-scroll short">
                      {toy.productName}
                    </td>

                    <td className="overflow overflow-scroll short">
                      {toy.quantity}
                    </td>
                    <td className="overflow overflow-scroll short">
                      ₫{formatCash(toy.price)}
                    </td>
                    {toy.status ? (
                      // Nội dung khi user.gender là true
                      <td>Hiển thị</td>
                    ) : (
                      // Nội dung khi user.gender là false
                      <td>Không hiển thị</td>
                    )}
                    <td>
                      <button
                        className="update-button"
                        onClick={() => handleShowInfo(toy.productId)}
                      >
                        <FaEye />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>
            <h2 className="product-manager-page-title">Phụ kiện - Đồ chơi</h2>
            <h4>Không có sản phẩm</h4>
          </div>
        )}
      </div>
    );
  }

  if (action === "edit-product") {
    return (
      <div className="product-manager-page">
        {listCage?.length > 0 ? (
          <div>
            <h2 className="product-manager-page-title">Lồng chim</h2>
            <table className="user-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Ảnh</th>
                  <th>Tên sản phẩm</th>
                  <th>Kiểu dáng</th>
                  <th>Kích thước</th>
                  <th>Màu sắc</th>
                  <th>Chất liệu</th>
                  <th>Số lượng</th>
                  <th>Giá tiền</th>
                  <th>Trạng thái</th>
                  <th>Tác vụ</th>
                </tr>
              </thead>
              <tbody className="content-info">
                {listCage?.map((cage) => (
                  <tr key={cage.productId}>
                    <td> {cage.productId} </td>
                    <td>
                      <img src={cage?.image[0]?.imageUrl} alt={`${cage.productName}`} />
                    </td>
                    <td className="overflow overflow-scroll short">
                      {cage.productName}
                    </td>
                    <td className="overflow overflow-scroll short">
                      kiểu dáng
                    </td>
                    <td className="overflow overflow-scroll short">
                      {cage?.sizeProduct[0]?.size.sizeDescription}
                    </td>
                    <td className="overflow overflow-scroll short">
                      {cage?.materialProduct[0]?.material.materialName}
                    </td>
                    <td className="overflow overflow-scroll short">
                      {cage?.colorProduct[0]?.color.colorName}
                    </td>

                    <td className="overflow overflow-scroll short">
                      {cage.quantity}
                    </td>
                    <td className="overflow overflow-scroll short">
                      ₫{formatCash(cage.price)}
                    </td>
                    {cage.status ? (
                      // Nội dung khi user.gender là true
                      <td>Hiển thị</td>
                    ) : (
                      // Nội dung khi user.gender là false
                      <td>Không hiển thị</td>
                    )}
                    <td>
                      <button
                        className="update-button"
                        onClick={() => handleUpdateCage(cage.productId)}
                      >
                        <FaRegEdit />
                      </button>
                      <button
                        className="remove-button"
                        onClick={() => handlePopup(cage.productId)}
                      >
                        <FaTrashAlt />
                      </button>
                      {showPopup && (
                        <PopupModal
                          action={"remove"}
                          statusReturn={result}
                          setStatusReturn={setResult}
                          open={showPopup}
                          onClose={handleClose}
                        />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>
            <h2 className="product-manager-page-title">Lồng chim</h2>
            <h4>Không có sản phẩm</h4>
          </div>
        )}

        {listFood?.length > 0 ? (
          <div>
            <h2 className="product-manager-page-title">Thức ăn cho chim</h2>
            <table className="user-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Ảnh</th>
                  <th>Tên sản phẩm</th>
                  <th>Số lượng</th>
                  <th>Giá tiền</th>
                  <th>Trạng thái</th>
                  <th>Tác vụ</th>
                </tr>
              </thead>
              <tbody className="content-info">
                {listFood?.map((food) => (
                  <tr key={food.productId}>
                    <td> {food.productId} </td>
                    <td>
                      <img src={food?.image[0]?.imageUrl} alt={`${food.productName}`} />
                    </td>
                    <td className="overflow overflow-scroll short">
                      {food.productName}
                    </td>

                    <td className="overflow overflow-scroll short">
                      {food.quantity}
                    </td>
                    <td className="overflow overflow-scroll short">
                      ₫{formatCash(food.price)}
                    </td>
                    {food.status ? (
                      // Nội dung khi user.gender là true
                      <td>Hiển thị</td>
                    ) : (
                      // Nội dung khi user.gender là false
                      <td>Không hiển thị</td>
                    )}
                    <td>
                      <button
                        className="update-button"
                        onClick={() => handleUpdateFood(food.productId)}
                      >
                        <FaRegEdit />
                      </button>
                      <button
                        className="remove-button"
                        onClick={() => handlePopup(food.productId)}
                      >
                        <FaTrashAlt />
                      </button>
                      {showPopup && (
                        <PopupModal
                          action={"remove"}
                          statusReturn={result}
                          setStatusReturn={setResult}
                          open={showPopup}
                          onClose={handleClose}
                        />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>
            <h2 className="product-manager-page-title">Thức ăn cho chim</h2>
            <h4>Không có sản phẩm</h4>
          </div>
        )}

        {listToy?.length > 0 ? (
          <div>
            <h2 className="product-manager-page-title">Phụ kiện - Đồ chơi</h2>
            <table className="user-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Ảnh</th>
                  <th>Tên sản phẩm</th>
                  <th>Số lượng</th>
                  <th>Giá tiền</th>
                  <th>Trạng thái</th>
                  <th>Tác vụ</th>
                </tr>
              </thead>
              <tbody className="content-info">
                {listToy?.map((toy) => (
                  <tr key={toy.productId}>
                    <td> {toy.productId} </td>
                    <td>
                      <img src={toy?.image[0]?.imageUrl} alt={`${toy.productName}`} />
                    </td>
                    <td className="overflow overflow-scroll short">
                      {toy.productName}
                    </td>

                    <td className="overflow overflow-scroll short">
                      {toy.quantity}
                    </td>
                    <td className="overflow overflow-scroll short">
                      ₫{formatCash(toy.price)}
                    </td>
                    {toy.status ? (
                      // Nội dung khi user.gender là true
                      <td>Hiển thị</td>
                    ) : (
                      // Nội dung khi user.gender là false
                      <td>Không hiển thị</td>
                    )}
                    <td>
                      <button
                        className="update-button"
                        onClick={() => handleUpdateToy(toy.productId)}
                      >
                        <FaRegEdit />
                      </button>
                      <button
                        className="remove-button"
                        onClick={() => handlePopup(toy.productId)}
                      >
                        <FaTrashAlt />
                      </button>
                      {showPopup && (
                        <PopupModal
                          action={"remove"}
                          statusReturn={result}
                          setStatusReturn={setResult}
                          open={showPopup}
                          onClose={handleClose}
                        />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>
            <h2 className="product-manager-page-title">Phụ kiện - Đồ chơi</h2>
            <h4>Không có sản phẩm</h4>
          </div>
        )}
        {showPopup && (
          <PopupModal
            action={"remove"}
            statusReturn={result}
            setStatusReturn={setResult}
            open={showPopup}
            onClose={handleClose}
          />
        )}
      </div>
    );
  }
};

export default ProductPage;
