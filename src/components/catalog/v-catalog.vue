<template>
	<div class="v-catalog">
		<router-link :to="{name: 'cart', params: {cart_data: CART}}">
			<div class="v-catalog__link_to_cart">Cart: {{CART.length}}</div>
		</router-link>

		<h1>Каталог</h1>
		<div class="v-catalog__list">
			<v-catalog-item
				v-for="product in PRODUCTS"
				:key="product.article"
				:product_data="product"
				@addToCart="addToCart"
			/>
		</div>

	</div>
</template>

<script>

import vCatalogItem from './v-catalog-item'
import {mapActions, mapGetters} from 'vuex'

export default {
	name: "v-catalog",
	data(){
		return{
			products: [],
		}
	},
	components: {
		vCatalogItem
	},
	computed: {
	...mapGetters([
			'PRODUCTS',
			'CART'
		])
	},
	methods: {
		...mapActions([
			'GET_PRODUCTS_FROM_API',
			'ADD_TO_CART'
		]),
		addToCart(data){
			this.ADD_TO_CART(data)
		}
	},
	mounted(){
		this.GET_PRODUCTS_FROM_API()
		.then(() => {
			console.log('Arrived')
		})
	}
}
</script>

<style lang="scss">
.v-catalog{
	width: 100%;
	position: relative;
	&__list{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: flex-start;
		width: 100%;
	}
	&__link_to_cart{
		position: absolute;
		top: 10px;
		right: 10px;
		padding: $padding $padding*2;
		border: 1px solid grey;
	}
}
</style>