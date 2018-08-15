<template>
	<figure class="woonkly-carousel-photo image is-128x128">
		<div class="img" :style="{backgroundImage: `url(${imgUrl})`}"></div>
	</figure>
</template>

<script>
export default{
  props: {
    imgUrl: {
      default: false
    }
  }
}
</script>

<style lang="scss">
.woonkly-carousel-photo {
	position: relative;
	background: white;
	margin: 0 auto;
	z-index: 100;

	&::after, &::before {
		position: absolute;
		content: "";
		height: 80%;
		width: 80%;
		z-index: -1;
		background: var(--woonkly-light-blue);
	}

	&::after {
		left: -1em;
		top: -1em;
	}

	&::before {
		left: -0.5em;
		top: -0.5em;
	}

	& > .img {
		position: relative;
		width: 100%;
		height: 100%;
		border: 4px solid white;
		background-position: center center;
		background-size: cover;
	}
}
</style>

