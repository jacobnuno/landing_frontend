<template>
  <section id="woonkly-atention" class="section">
    <img id="woonkly-moon" src="/img/icons/gradient-circle-2.svg" alt="Woonkly Moon">
    <img id="triangle" src="/img/icons/transparent-triangle.svg" alt="Woonkly triangle">
    <div class="columns">
      <div class="column is-12-mobile is-half-tablet atention">
        <div class="wrapper">
          <h3 class="title is-3">La atención de las personas tiene un valor medible</h3>
          <p>
            Creadores de contenido y anunciantes tienen algo en común. Quieren llegar a su público objetivo y pagarán por hacerlo, pero esta vez, a los usuarios que los ven.
          </p>
          <a href="" target="_blank" class="view-video">
            <img src="/img/icons/circle_play.svg" alt="Play Video" width="60px">
            <span>Ver video</span>
          </a>
        </div>
      </div>
      <div class="column is-12-mobile is-half-tablet">
        <figure class="image">
          <img src="/img/sections/woonkly-mockup-1.png">
        </figure>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
#woonkly-atention {
  position: relative;

  .columns {
    & > .atention {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
  #woonkly-moon {
    width: 7em;
    position: absolute;
    left: -22%;
  }

  #triangle {
    position: absolute;
    width: 8em;
    left: 2em;
  }

  background: #07062c;
  padding-left: 3em;

  a.view-video {
    display: flex;
    align-items: center;
    margin: 1em 0;
  }
}

@media screen and (min-width: 769px) {
  #woonkly-atention {

    .columns {
      & > .atention {
        align-items: flex-end;
        .wrapper {
          max-width: 500px;
        }
      }
    }

  }
}
</style>
