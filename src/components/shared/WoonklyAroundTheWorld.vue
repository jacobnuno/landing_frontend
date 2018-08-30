<template>
<div class="w-around-wrapper">

  <div class="container has-text-left">
    <p class="title is-3">{{$t(`message.carousel.${currentSection}.title`)}}</p>
    <p class="subtitle is-5 has-text-white">{{$t(`message.carousel.${currentSection}.description`)}}</p>
  </div>

  <w-carousel id="woonkly-around-the-world" class="w-new-carousel" :on-index-changed="woonklyAroundCarousel">
    <li>
      <w-element-carousel :img-url="'https://hipertextual.com/files/2017/02/imagen_17117_social.jpg'" data-section="amsterdam"/>
    </li>
    <li>
      <w-element-carousel :img-url="'http://www.comingsoon.net/assets/uploads/2018/01/rey-in-star-wars-the-last-jedi-5j.jpg'" data-section="amsterdam"/>
    </li>
    <li>
      <w-element-carousel :img-url="'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png'" data-section="bef"/>
    </li>
    <li>
      <w-element-carousel :img-url="'https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/08/Sphero-Star-wars-r2-d2-bb-9e-796x424.jpg'" data-section="bef"/>
    </li>
    <li>
      <w-element-carousel :img-url="'https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/pyr/55673ed52a98bb41703ed903/dia-star-wars.jpg'" data-section="bef"/>
    </li>
  </w-carousel>
</div>
</template>

<script>
import wCarousel from '@/components/shared/WoonklyTinyCarousel'
import wElementCarousel from '@/components/shared/WoonklyCarousel/SingleElement'

export default {
  data () {
		return {
			currentSection: null
		}
	},
  methods: {
    woonklyAroundCarousel ({ index,  slideItems }) {
      this.currentSection = slideItems[index].querySelector('div').getAttribute('data-section')
    },
  },
  components: {
    wCarousel,
    wElementCarousel
  }
}
</script>

<style lang="scss">
.w-around-wrapper {

  & > .container {
    margin-bottom: 2em;
  }

  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
  .fade-enter-active {
    transition: all .3s ease;
  }
  .fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .fade-enter, .fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }

}

@media screen and (min-width: 768px) {
  #woonkly-around-the-world {
    max-width: 510px !important;
  }
}

@media screen and (min-width: 1200px) {
  #woonkly-around-the-world {
    max-width: 680px !important;
  }
}
</style>
