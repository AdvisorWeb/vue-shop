<template>
	<div class="v-cart-item">
		<img :src=" require('@/assets/images/' + cart_item_data.image ) " alt="img" class="v-cart-item__image">
		<div class="v-cart-item__info">
			<p>{{ cart_item_data.name }}</p>
			<p>{{ cart_item_data.price }}</p>
			<p>{{ cart_item_data.article }}</p>
		</div>
		<div class="v-cart-item__quantity">
			<p>Qty:</p>
			<span class="quantity__tools">
        <span class="quantity__btn" @click="decrementItem">-</span>
				{{cart_item_data.quantity}}
        <span class="quantity__btn" @click="incrementItem">+</span>
      </span>
		</div>
		<button @click="deleteFromCart">
			Delete
		</button>

	</div>
</template>

<script>

import {mapActions} from 'vuex'

export default {
	name: "v-cart-item",
	props: {
		cart_item_data: {
			type: Object,
			default(){
				return {};
			}
		}
	},
	methods: {
		deleteFromCart(){
			this.$emit('deleteFromCart')
		},
		incrementItem(){
			this.$emit('incrementItem')
		},
		decrementItem(){
			this.$emit('decrementItem')
		}
	}
}
</script>

<style lang="scss" scoped>
.v-cart-item {
	display: flex;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: center;
	box-shadow: 0 0 8px 0 #e0e0e0;
	padding: $padding*2;
	margin-bottom: $margin*2;
	&__image {
		max-width: 50px;
	}

	.quantity__btn {
		cursor: pointer;
		padding: $padding/3 $padding;
	}

	.quantity__tools {
		user-select: none;
	}
}
</style>