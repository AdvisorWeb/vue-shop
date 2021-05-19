<template>
	<div class="v-cart">
		<router-link :to="{name: 'catalog'}">
			<div class="v-catalog__link_to_cart">To catalog</div>
		</router-link>
		<h1>Корзина</h1>

		<p v-if="!cart_data.length">There are not products</p>
		<v-cart-item
			v-for="(item,index) in cart_data"
			:key="item.article"
			:cart_item_data="item"
			@deleteFromCart="deleteFromCart(index)"
			@incrementItem="incrementItem(index)"
			@decrementItem="decrementItem(index)"
		/>
		<div class="v-cart__total">
			<p class="total__name">Total: </p>
			<p>{{cartTotalCost}} RUB</p>
		</div>
	</div>
</template>

<script>

import vCartItem from './v-cart-item'
import {mapActions} from 'vuex'

export default {
	name: "v-cart",
	props: {
		cart_data: {
			type: Array,
			default() {
				return []
			}
		}
	},
	computed: {
		cartTotalCost() {
			let result = []
			if(this.cart_data.length){
				for (let item of this.cart_data) {
					result.push(item.price * item.quantity)
				}
				result = result.reduce((sum, el) => {
					return sum + el;
				})
				return result
			}
			else {
				return 0
			}
		}
	},
	mounted() {

	},
	methods: {
		...mapActions([
			'DELETE_FROM_CART',
			'INCREMENT_ITEM',
			'DECREMENT_ITEM',
		]),
		incrementItem(index){
			this.INCREMENT_ITEM(index)
		},
		decrementItem(index){
			this.DECREMENT_ITEM(index)
		},
		deleteFromCart(index) {
			this.DELETE_FROM_CART(index)
		}
	},
	components: {
		vCartItem
	}
}
</script>

<style lang="scss" scoped>
.v-cart {
	margin-bottom: 100px;
	width: 100%;
	position: relative;

	&__total {
		position: fixed;
		bottom: 0;
		right: 0;
		left: 0;
		padding: $padding;
		display: flex;
		justify-content: center;
		background: $green-bg;
		color: #ffffff;
		font-size: 20px;
	}

	.total__name {
		margin-right: $margin*2;
	}
}
</style>