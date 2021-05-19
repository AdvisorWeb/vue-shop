<template>
	<div id="app">
		<v-main-wrapper/>
	</div>
</template>
<script>

import vMainWrapper from './components/v-main-wrapper'

export default {
	name: "app",
	components: {
		vMainWrapper
	}
}
</script>

<style lang="scss">
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
header {
	display: flex;
	border-bottom: 1px solid #ccc;
	padding: .5rem 1rem;
	p {
		margin-left: 1rem;
	}
}
nav {
	margin-left: auto;
	ul {
		list-style: none;
	}
	ul li {
		display: inline-flex;
		margin-left: 1rem;
	}
}
</style>
