import axios from "axios";

export default {
	GET_PRODUCTS_FROM_API({commit}) {
		return axios('http://localhost:3000/products', {
			method: "GET"
		}).then((products) => {
			commit("SET_PRODUCTS_TO_STATE", products.data)
			return products
		}).catch((e) => {
			console.log(e)
			return e
		})
	},
	ADD_TO_CART({commit}, product) {
		commit('SET_CART', product)
	},
	INCREMENT_ITEM({commit}, index) {
		commit('INCREMENT', index)
	},
	DECREMENT_ITEM({commit}, index) {
		commit('DECREMENT', index)
	},
	DELETE_FROM_CART({commit}, index){
		commit('REMOVE_FROM_CART', index)
	}
}