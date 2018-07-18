<template>
<section id="woonkly-tv">
  <w-divider/>
  <div class="section">
    <div class="columns is-mobile is-multiline">
      <div class="column is-12">
        <h3 class="title is-3 has-text-centered">Descubre Woonkly TV 1.0</h3>
        <p class="brief">
          Los creadores de contenido de cualquier plataforma centralizada (Youtube, imeo…) o descentralizada (Viuli…) y los anunciantes de todo el mundo tienen al fin una herramienta para alcanzar a su público objetivo de manera casi instantánea y por un costo varias veces inferior a cualquier otro método publicitario y los usuarios tienen al fin una herramienta que les permite ganar dinero por su tiempo, su atención y su interacción con vídeos que les interesen.
        </p>
      </div>

      <div class="column is-12">
        <figure class="image">
          <img src="/img/sections/woonkly_tv.jpg" alt="Woonkly Tv">
        </figure>
      </div>

      <div class="column is-12">
        <p class="brief">Woonkly nace de la idea de que compartir es la base del éxito. Nuestra filosofía consiste en que todos ganen.</p>
        <p class="brief">Piénsalo. A nivel internacional la inversión publicitaria anual supera los 600 mil millones de dólares, o 600 billones. Imagina que parte de ese dinero se fuera directamente a las personas que ven esa publicidad. ¿No sería más justo? ¿Más lógico?.</p>
        <p class="brief">Eso es Woonkly. La conexión entre el capital que invierten las empresas o artistas en publicidad y las personas que ven los vídeos de dichas empresas o artistas. Conectamos el capital de los</p>
      </div>

    </div>
  </div>
</section>
</template>

<script>
import wDivider from '@/components/wavy-dividers/WoonklyWavy1'

export default {
  components: {
    wDivider
  }
}
</script>


<style lang="scss">
@import '../assets/scss/mixins';

#woonkly-tv {

  .top-divider {
    @include divider('/img/wavy/top-divider.svg')
  }

  .brief {
    color: grey;
    margin-bottom: 0.9em;
  }

  .title {
    color: var(--woonkly-dark-blue);
  }
}
</style>

