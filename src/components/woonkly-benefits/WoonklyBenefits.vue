<template>
  <section id="woonkly-benefits">
		<div class="section">
			<div class="columns is-mobile is-centered">

        <div class="column is-12">
          <h3 class="title is-12 has-text-centered">{{$t('message.principalBenefits')}}</h3>
        </div>
        <!-- TODO: Poner los cuadros de los beneficios aqui -->
      </div>

    <aside>
    	<ul class="columns is-multiline is-centered">
    		<li class="column is-6-tablet is-3-desktop is-3-fullhd is-narrow">
    			<benefit :text="$t('message.benefits[0]')" :icons="['/img/icons/youtube.svg','/img/icons/vimeo.svg','/img/icons/viuli.svg']"></benefit>
    		</li>
    		<li class="column is-6-tablet is-3-desktop is-3-fullhd  is-narrow">
    			<benefit :text="$t('message.benefits[1]')" :icons="['/img/icons/megafono.svg','/img/icons/conv&play.svg']"></benefit>
    		</li>
    		<li class="column is-6-tablet is-3-desktop is-3-fullhd  is-narrow">
    			<benefit :text="$t('message.benefits[2]')" img="/img/icons/interactuar.svg"></benefit>
    		</li>
    		<li class="column is-6-tablet is-3-desktop is-3-fullhd  is-narrow">
    			<benefit :text="$t('message.benefits[3]')" img="/img/icons/cryptomonedaswnk.svg"></benefit>
    		</li>
    	</ul>
    </aside>
		</div>
  </section>
</template>

<style lang="scss">
#woonkly-benefits{
	padding-bottom: 6em;

	& > .section {
		max-width: 1200px;
		margin-left: auto;
		margin-right: auto;
	}

	h3 {
    margin-bottom: 3em;
		color: black;
	}
}

@media screen and (min-width: 1070px) {
	#woonkly-benefits{
		padding-bottom: 13em;
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
