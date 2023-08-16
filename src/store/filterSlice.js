const { createSlice } = require("@reduxjs/toolkit");

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    allProducts: [],
    filteredProducts: [],
    sortBy: null,
    rating: null,
    featured: false,
    byBrand: false,
    byEvent: false,
    inStock: false,
    onSale: false,
  },

  reducers: {
    addAllProductsToFiltered(state, action) {
      // add all products before filter
      const allProductsfilterd = action.payload.filter((item)=> item.instagram !== true);
      return { ...state, filteredProducts: allProductsfilterd };
    },
    addAllProductsToAllProducts(state, action) {
      // add all products before filter
      const allProducts = action.payload.filter((item)=> item.instagram !== true);
      return { ...state, allProducts: allProducts };
    },
    sort(state, action) {
      state.sortBy = action.payload;
      if (state.sortBy === "lowToHigh") {
        state.filteredProducts = state.allProducts.sort(
          (a, b) => Number(a.price) - Number(b.price)
        );
      }
      if (state.sortBy === "highToLow") {
        state.filteredProducts.sort(
          (a, b) => Number(b.price) - Number(a.price)
        );
      }
      
    },
    rate(state, action) {
      state.rating = action.payload;

      let fullProducts = state.allProducts;
      let updatedProducts = [];

      if (state.rating === "5Stars") {
        if (state.featured) {
          updatedProducts = state.filteredProducts.filter(
            (product) => Math.round(product.rating.rate) === 5
          );
        } else {
          updatedProducts = fullProducts.filter(
            (product) => Math.round(product.rating.rate) === 5
          );
        }
      }
      if (state.rating === "4Stars") {
        // ||
        if (state.featured) {
          updatedProducts = state.filteredProducts.filter(
            (product) => Math.round(product.rating.rate) === 4
          );
        } else {
          updatedProducts = fullProducts.filter(
            (product) => Math.round(product.rating.rate) === 4
          );
        }
      }
      if (state.rating === "3Stars") {
        if (state.featured) {
          updatedProducts = state.filteredProducts.filter(
            (product) => Math.round(product.rating.rate) === 3
          );
        } else {
          updatedProducts = fullProducts.filter(
            (product) => Math.round(product.rating.rate) === 3
          );
        }
      }
      if (state.rating === "2Stars") {
        if (state.featured) {
          updatedProducts = state.filteredProducts.filter(
            (product) => Math.round(product.rating.rate) === 2
          );
        } else {
          updatedProducts = fullProducts.filter(
            (product) => Math.round(product.rating.rate) === 2
          );
        }
      }
      if (state.rating === "1Star") {
        if (state.featured) {
          updatedProducts = state.filteredProducts.filter(
            (product) => Math.round(product.rating.rate) === 1
          );
        } else {
          updatedProducts = fullProducts.filter(
            (product) => Math.round(product.rating.rate) === 1
          );
        }
      }
      state.filteredProducts = updatedProducts;
    },
    featureProducts(state, action) {
      state.featured = action.payload;

      if (state.featured) {
        if (state.rating) {
          state.filteredProducts = state.filteredProducts.filter(
            (product) => product.featured_product
          );
        } else {
          state.filteredProducts = state.allProducts.filter(
            (product) => product.featured_product
          );
        }
      } else {
        state.filteredProducts = state.allProducts;
      }
    },
    clearFilter(state, action) {
      state.sortBy = false;
      state.featured = false;
      state.filteredProducts = state.allProducts;
      
    },
    search(state,action){
      const searchTerm = action.payload.toLowerCase(); // Convert the search term to lowercase

      state.filteredProducts = state.allProducts.filter((product) => {
        const title = product.title.toLowerCase(); // Convert the product title to lowercase
        return title.includes(searchTerm);
      });
    }
  },
});

export const filterReducer = filterSlice.reducer;
export const {
  addAllProductsToAllProducts,
  addAllProductsToFiltered,
  sort,
  rate,
  featureProducts,
  clearFilter,
  search
} = filterSlice.actions;
