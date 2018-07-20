<template>
  <section id="woonkly-benefits" class="section">
    <div class="columns is-mobile is-centered">

      <div class="column is-12">
        <h3 class="title is-12">Los beneficios principales para cada grupo son</h3>
      </div>
      <!-- TODO: Poner los cuadros de los beneficios aqui -->
    </div>

    <aside>
    	<ul class="columns is-multiline is-centered">
    		<li class="column is-6-tablet is-3-desktop is-3-fullhd is-narrow">
    			<benefit text="Gana dinero por ver vídeos" :icons="['/img/icons/youtube.svg','/img/icons/vimeo.svg','/img/icons/viuli.svg']"></benefit>
    		</li>
    		<li class="column is-6-tablet is-3-desktop is-3-fullhd  is-narrow">
    			<benefit text="Gana dinero por compartir contenido digital" :icons="['/img/icons/megafono.svg','/img/icons/conv&play.svg']"></benefit>
    		</li>
    		<li class="column is-6-tablet is-3-desktop is-3-fullhd  is-narrow">
    			<benefit text="Gana dinero por interactuar con Vídeos, imágenes y post" img="/img/icons/interactuar.svg"></benefit>
    		</li>
    		<li class="column is-6-tablet is-3-desktop is-3-fullhd  is-narrow">
    			<benefit text="Participa en loterías diarias gratuitas de criptomonedas" img="/img/icons/cryptomonedaswnk.svg"></benefit>
    		</li>
    	</ul>
    </aside>
  </section>
</template>

<style lang="scss">
#woonkly-benefits{
	padding-bottom: 6em;
	h3 {
    margin-bottom: 3em;
		color: black;
	}
}

@media screen and (min-width: 1070px) {
	#woonkly-benefits{
		padding-bottom: 10em;
	}
}
</style>

<script>
import benefit from '@/components/woonkly-benefits/SingleBenefit'

export default {
  components: {
    benefit
  }
}
</script>
