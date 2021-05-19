<template>
	<div class="v-catalog-item">
		<img :src=" require('@/assets/images/' + product_data.image ) " alt="img" class="v-catalog-item__image">
		<p class="v-catalog-item__name">{{ product_data.name }}</p>
		<p class="v-catalog-item__price">Price: {{ product_data.price }} RUB</p>
		<button
			class="v-catalog-item__addToCart btn"
			@click="addToCart"
		>Add to cart
		</button>
	</div>
</template>

<script>
export default {
	name: "v-catalog-item",
	props: {
		product_data: {
			type: Object,
			default() {
				return {}
			}
		}
	},
	mounted() {
		this.$set(this.product_data, 'quantity', 1)
	},
	methods: {
		addToCart() {
			this.$emit('addToCart',this.product_data)
		}
	}
}
</script>

<style lang="scss" scoped>
.v-catalog-item {
	flex-basis: 25%;
	box-shadow: 0 0 8px 0 #e0e0e0;
	padding: $padding*2;
	margin-bottom: $margin*2;

	&__image {
		width: 100px;
	}
}
</style>