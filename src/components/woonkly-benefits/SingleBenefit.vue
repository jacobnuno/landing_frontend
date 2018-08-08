<template>
<div class="woonkly-benefit">
  <div class="squares">

  	<div class="square back-square"></div>
  	<div class=" square front-square">

  		<div class="square-text">
  			{{text}}
  			<ul class="icons-sqr">
  				<li v-for="icon in icons">
  					<img :src="icon">

  				</li>
  			</ul>
  		</div>

  		<div class="img-square">
  			<img v-if="img"  :src="img">

  		</div>


  	</div>

  </div>
</div>
</template>

<style lang="scss">
	.woonkly-benefit{
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

	.back-square{
		width: 70%;
		height: 60%;
		min-width: 100px;
		min-height: 100px;
		background: linear-gradient(to top right,#02004A, #00D3FF);
		box-shadow: 0px 1px 30px 0px #00D3FF, 0px 1px 18px 0px #02004A;
		position: absolute;
		left: 0;
		top: 0;
		border: 0;

	}

	.front-square{
		width: 80%;
		height: 80%;
		min-width: 150px;
		min-height: 150px;
		background-color: white;
		position: absolute;
		left: 7%;
		top :8%;
		display: table;
		border: .4px solid grey;
		animation: shadowmove 3s infinite;

		/*box-shadow: 0px 1px 40px 1px #00D3FF, 0px 1px 5px 0px #02004A;*/

		.img-square{
			display:table-cell;


			img{
				margin-top: 1rem;
				min-width: 3rem;
				max-width: 15%;
				max-height: 80%;
			}

		}

		.square-text{
		color: black;
		display:table-cell;
		width:75%;
    	vertical-align:middle;
    	text-align:center;
    	padding:1em;
    	font-weight: bold;
    	font-size: .95em;
    	.icons-sqr{
    		padding: 0px;
    		margin: 0;
    		width: 100%;
    		margin-top: 10px;
    		li{
    			display: inline;
	    		padding: 0;
	    		margin:0;
	    		margin-left: 10px;
	    		list-style: none;

	    	}
			img{
				min-height: 20px;
				min-width: 30px;
				max-width: 30px;
				max-height: 20px;
			}
		}
		}



	}


	@keyframes shadowmove {
    50% {box-shadow: 0px 1px 40px 1px #00D3FF;}
	}


</style>


<script>
    export default{
        name: 'SingleBenefit',
        props:{text: {type: String,required: true},icons: {type: Array,required: false}, img: { type: String, required: false}},
        methods: {

        }

    }
</script>
