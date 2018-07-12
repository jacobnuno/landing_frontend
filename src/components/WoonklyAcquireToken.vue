<template>
  <section id="woonkly-ac-token" class="section">
    <img src="/img/icons/linea_luz.svg" id="blue-line-left">
    <div class="is-size-4-mobile is-size-2-tablet has-text-centered">ADQUIRIR TOKENS</div>
      <div class="columns">
        <div class="column is-12-mobile is-4-tablet is-offset-2-tablet">
          <p class="has-text-left is-size-7-mobile is-size-6-tablet is-3-tablet w-p">
              Con el objetivo de premiar la atención de las personas cuando ven vídeos o interactúan con el contenido , hemos creado nuestra criptomoneda, llamada “woonk”. Los creadores de contenido y anunciantes pueden comprar woonks para repartirlos entre las personas que vean, compartan e interactuen con su contenido.
              Estas son las fases de la Oferta inicial de nuestra criptomoneda:
          </p>
          <ul>
            <li v-for="(list1, listIndex) in list1" :key="listIndex" class="list-tkn">
              <img src="/img/icons/group.svg" class="bullet">
              <div>
                <div class="is-size-6-mobile is-size-4-tablet">{{ list1.title }}</div>
                {{ list1.content }}
              </div>
            </li>
          </ul>
        </div>
        <div class="column is-12-mobile is-6-tablet is-offset-1-tablet w-div-right">
          <ul>
            <li v-for="(list2, listIndex) in list2" :key="listIndex" class="list-tkn">
              <img src="/img/icons/group.svg" class="bullet">
              <div>
                <div class="is-size-6-mobile is-size-4-tablet">{{ list2.title }}</div>
                {{ list2.content }}
              </div>
            </li>
          </ul>

        </div>

      </div>
      <img src="/img/icons/linea_luz.svg" id="blue-line-right">
      <img src="/img/icons/ilustracion.svg" id="blue-cube">

    </section>
</template>

<script>
export default {
  data () {
    return{
      list1: [
        {
            title: '1 Mayo-1 Junio:',
            content: `Venta privada para suscriptores de
            Mr. Santos en Youtube (50%
            Bonus)`
        },
        {
            title: '1 Junio-1 Julio:',
            content: `Venta privada
            para suscriptores de otros
            canales de Youtube (40%
            Bonus)`
        },
        {
            title:'1 Julio- 1 Septiembre:',
            content: `Venta
            privada (Capitales de Emiratos
            Árabes, Hong Kong y Europa)
            (30% Bonus)`
        },
        {
            title: '1 Septiembre-1 Octubre:',
            content: `ICO Fase 1 (20% Bonus)`
        },
        {
            title: '1 Octubre- 1 Noviembre:',
            content: `ICO Fase 2 (10% Bonus)`
        },
        {
            title: '1 Noviembre- 31 Diciembre:',
            content: `ICO Fase 3 (0% Bonus)`
        }
      ],
      list2: [
        {
            title: 'Inicio',
            content: `1 Mayo 2018`
        },
        {
            title: 'Número de Woonks a la venta',
            content: `3,000,000,000 (30%)`
        },
        {
            title: 'Final de la ICO',
            content: `31 Diciembre 2018`
        },
        {
            title: 'Tasa de cambio',
            content: `1 ETH = 50,000 Woonks`
        },
        {
            title: 'Métodos de inversión aceptados',
            content: `ETH (BTC, LTC, DASH próximamente)`
        },
        {
            title: 'Inversión mínima',
            content: `0.01 ETH`
        }
      ]
    }
  }
};
</script>

<style lang="scss" scope>
#woonkly-ac-token {
  background: var(--woonkly-black-blue);
  .extended-brief {
    margin-top: 1.5em;
  }

  #blue-line-left {
    position: absolute;
    transform: translate(-30%, -45%);
    width: 6em;
  }

  #blue-line-right {
    position: absolute;
    transform: translate(55%, -170%);
    width: 14em;
  }

  #blue-cube {
    position: absolute;
    transform: translate(74%, -88%);
    width: 12em;
  }

  .bullet {
    max-width: 10%;
  }

  .list-tkn {
    display: flex;
    align-items: flex-start;
    margin: 1em;
    text-align: left;
    position: relative;
  }

  .w-p {
    margin: 1em 0 4em;
  }

}

@media only screen and (min-width: 769px) {
  #woonkly-ac-token {
    .bullet {
      max-width: 5%;
    }
    .w-div-right {
      margin-top: 4em;
    }
    #blue-line-left {
      transform: translate(12%, -13%);
      width: 16em;
    }

    #blue-line-right {
      transform: translate(290%, -90%);
      width: 16em;
    }

    #blue-cube {
      transform: translate(220%, -105%);
      width: 30em;
    }
  }
}

</style>
