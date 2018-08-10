<template>
  <div class="woonkly-carousel-element">
  <div class="squares">

  	<div class="square back-square"></div>
    <div class="square middle-square"></div>
  	<div class=" square front-square">
  		<div class="img-square" :style="{ backgroundImage : `url(${imgUrl})`}"></div>
  	</div>

  </div>

</div>

</template>

<style lang="scss" scoped>
.woonkly-carousel-element{
		margin: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.squares{
		min-width: 250px;
		min-height: 250px;
		position:relative;
		width: 50%;
    padding-bottom:50%;
	}
	.square{
		border-radius: 10px;
	}

  .back-square {
		width: 17.5em;
		height: 17.5em;
		min-width: 100px;
		min-height: 100px;
    background: #00d2fd;
		//box-shadow: 0px 1px 80px 0px #00D3FF, 0px 1px 18px 0px #02004A;
    box-shadow: -5px 23px 91px -17px rgba(0,211,255,1);
		position: absolute;
		left: -1em;
		top: 1em;
		border: 0;
	}

	.middle-square{
		width: 17.5em;
		height: 17.5em;
		min-width: 100px;
		min-height: 100px;
		background: #00d2fd;
		box-shadow: 0px 1px 30px 0px #00D3FF, 0px 1px 18px 0px #02004A;
		position: absolute;
		left: 0;
		top: 0;
		border: 0;

	}

	.front-square{
		width: 18em;
		height: 18em;
		min-width: 150px;
		min-height: 150px;
		background-color: white;
		position: absolute;
		left: 7%;
		top: 7%;
		display: table;
    border-radius: 0;
    border: none;
		animation: shadowmove 3s infinite;

		.img-square{
			display:table-cell;
      background-position: center center;
      background-size: 97% 97%;
      background-repeat: no-repeat;

			img{
				max-width: 100%;
				max-height: 100%;
			}

		}
	}

	@keyframes shadowmove {
    50% {box-shadow: -7px 3px 69px 2px rgba(0,211,255,1);}
	}
</style>


<script>
export default{
  props: {
    imgUrl: {
      default: false
    }
  }
}
</script>
