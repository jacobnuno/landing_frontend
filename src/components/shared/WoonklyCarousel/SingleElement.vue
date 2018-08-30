<template>
<div class="w-carousel-single-element-wrapper">
	<figure class="woonkly-carousel-photo image is-128x128">
		<div class="img" :style="{backgroundImage: `url(${imgUrl})`}"></div>
	</figure>
</div>
</template>

<script>
export default {
  props: {
    imgUrl: {
      default: false
    }
  }
}
</script>

<style lang="scss">
.w-carousel-single-element-wrapper {
	padding: 1em 0 2.5em 0;

	.woonkly-carousel-photo {
		position: relative;
		background: white;
		margin: 0 auto;
		z-index: 100;

		&::after, &::before {
			position: absolute;
			content: "";
			height: 90%;
			width: 90%;
			z-index: -1;
			background: var(--woonkly-gradient-light-to-dark-right);
			border-radius: 8px;
		}

		&::after {
			left: -0.5em;
			top: -0.5em;
			box-shadow: -6px 7px 12px -9px rgba(0,0,0,0.75);
		}

		&::before {
			left: -1em;
			top: 0.25em;
		}

		& > .img {
			position: relative;
			width: 100%;
			height: 100%;
			border: 4px solid white;
			background-position: center center;
			background-size: cover;
			// box-shadow: -49px 32px 64px -19px var(--woonkly-light-blue);
			box-shadow: -16px 16px 24px 12px var(--woonkly-light-blue-quarter-opacity);
		}
	}
}
</style>

