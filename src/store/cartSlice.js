const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    allProducts: [],
    cartList: [],
    total: 0,
  },

  reducers: {
    addAllProductsToCart(state, action) {
      const updatedCartList = action.payload.filter((item)=> item.instagram !== true);
      return { ...state, allProducts: updatedCartList };
    },

    addProduct(state, action) {
      const updatedCartList = state.cartList.concat(action.payload);
      const total = state.total + action.payload.price;
      const updatedTotal = Number(total.toFixed(2));
      return { ...state, total: updatedTotal, cartList: updatedCartList };
    },
    removeProduct(state, action) {

      const product = state.cartList.find(
        (item) => item.id === action.payload.id
      );
      const updatedCartList = state.cartList.filter(
        (item) => item.id !== action.payload.id
      );
      const total = state.total - (product.quantity *product.price) ;
      const updatedTotal = Number(total.toFixed(2));
      return { ...state, total: updatedTotal, cartList: updatedCartList };
    },
    increaseQuantity(state, action) {
      const existingItemIndex = state.cartList.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex !== -1) {
        const updatedCartList = [...state.cartList];
        updatedCartList[existingItemIndex] = {
          ...updatedCartList[existingItemIndex],
          quantity: updatedCartList[existingItemIndex].quantity + 1
        };
    
        const total = calculateTotal(updatedCartList);
        const updatedTotal = Number(total.toFixed(2));
    
        return { ...state, total: updatedTotal, cartList: updatedCartList };
      }
    
      return state;
    },
    
    decreaseQuantity(state, action) {
      const existingItemIndex = state.cartList.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex !== -1 && state.cartList[existingItemIndex].quantity > 1) {
        const updatedCartList = [...state.cartList];
        updatedCartList[existingItemIndex] = {
          ...updatedCartList[existingItemIndex],
          quantity: updatedCartList[existingItemIndex].quantity - 1
        };
    
        const total = calculateTotal(updatedCartList);
        const updatedTotal = Number(total.toFixed(2));
    
        return { ...state, total: updatedTotal, cartList: updatedCartList };
      }
    
      return state;
    },
  },
});

// Helper function to calculate the total based on the cart items
function calculateTotal(cartList) {
  return cartList.reduce(
    (total, item) => total + item.price * item.quantity,
    0
    
  );
}

export const {
  addAllProductsToCart,
  addProduct,
  removeProduct,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
