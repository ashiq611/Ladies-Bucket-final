import axios from "axios";
// const url = 'https://ledisbucket.onrender.com'
// const url = `http://localhost:4000`


export const createOrder = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "CreateOrderRequest" });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post( `/api/v1/order/new`, userData, config);
    dispatch({ type: "CreateOrderSuccess", payload: data.message });
  } catch (err) {
    dispatch({ type: "CreateOrderFail", payload: err.response.data.message });
  }
};

export const myOrders = () => async (dispatch) => {
  try {
    dispatch({ type: "UserOrderRequest" });

    const { data } = await axios.get(`/api/v1/orders/me`);
    dispatch({ type: "UserOrderSuccess", payload: data.orders });
  } catch (err) {
    dispatch({ type: "UserOrderFail", payload: err.response.data.message });
    // console.log(error.message);
  }
};


//Clearing Errors
export const clearError = () => async (dispatch) => {
  dispatch({ type: "ClearErrors" });
};
