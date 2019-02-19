import * as types from '../constants/ActionTypes';

// Actions here
export const filterPrice = (payload) => ({type: types.FILT_PRICE, payload});
export const filterCategory = (payload) => ({type: types.FILT_CAT, payload: payload});
export const sortingItem = (payload) => ({type: types.SORT_ITEM, payload: payload});