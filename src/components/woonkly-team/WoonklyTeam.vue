<template>
  <section v-observe-visibility="{ callback: visibilityChanged, intersection: { threshold: 0.1 } }" id="woonkly-team" class="section">
    <img id="woonkly-light" src="/img/icons/woonkly-light.png" alt="Woonkly Light">
    <h3 class="title is-3 has-text-centered has-text-white is-uppercase">Un equipo experto</h3>
    <p class="is-size-5 has-text-centered">Crear una gran idea, un excelente producto y una potente criptomoneda solo puede realizarse con un equipo de los mejores expertos en cada área.</p>
    <div class="columns is-mobile is-multiline team">
      <w-team-member v-for="(m, index) in team" v-bind:key="index" :member="m" class="column is-half-mobile is-one-quarter-tablet"/>
    </div>
    <h3 class="title is-3 has-text-centered has-text-white is-uppercase">Inversores y Advisors</h3>
    <div class="columns is-mobile is-multiline advisors">
      <w-team-member v-for="a in advisors" :key="a.name" :member="a" class="column is-half-mobile is-one-third-tablet"/>
    </div>
  </section>
</template>

<script>
import wTeamMember from '@/components/woonkly-team/WoonklyTeamMember'

export default {
  data () {
    return {
      team: [
        {
          name: 'Mr. Santos',
          position: 'Presidente & CEO',
          img: 'mrsantos.jpg',
          links: {
            twitter: 'https://twitter.com/mrsantosyoutube',
            youtube: 'https://www.youtube.com/channel/UCo3hRG_jF6lAVzOUh_UM5Sg',
            linkedin: 'https://mx.linkedin.com/in/danielsantos3'
          }
        },
        {
          name: 'Matei Antohi',
          position: 'Co-Fundador',
          img: 'mateantohi.png',
          links: {
            linkedin: 'https://www.linkedin.com/in/matei-antohi-18950865/'
          }
        },
        {
          name: 'David Leonardo',
          position: 'Dir. Operaciones',
          img: 'davidleonardo.png',
          links: {
            linkedin: 'https://www.linkedin.com/in/davidleonardoc/'
          }
        },
        {
          name: 'Oscar Cardenas',
          position: 'CTO & Gerente de Blockchain',
          img: 'oscarcardenas.jpeg',
          links: {
            linkedin: 'https://www.linkedin.com/in/cardedeveloper/'
          }
        },
        {
          name: 'Derek Jones',
          position: 'Financial Blockchain Manager',
          img: 'derekjones.jpeg',
          links: {
            linkedin: 'https://www.linkedin.com/in/unitedcoin/'
          }
        },
        {
          name: 'Ghali El Kasri',
          position: 'Arquitecto de Blockchain',
          img: 'ghalielkasri.jpeg',
          links: {
            linkedin: 'https://www.linkedin.com/in/mohamed-el-ghali-el-kasri-61471114a/'
          }
        },
        {
          name: 'Ghita El Kasri',
          position: 'Blockchain financial arquitect',
          img: 'ghitaelkasri.jpeg',
          links: {
            linkedin: 'https://www.linkedin.com/in/ghita-el-kasri-81a6b185/'
          }
        },
        {
          name: 'Hassan Lahlou',
          position: 'Director Matemático de Blockchain',
          img: 'hassanlahlou.jpeg',
          links: {
            linkedin: 'https://www.linkedin.com/in/hassanlahlou/'
          }
        },
        {
          name: 'Sara Santos',
          position: 'Directora de Marketing',
          img: 'sarasantos.jpg',
          links: {
            linkedin: 'https://www.linkedin.com/in/sarasc9/'
          }
        },
        {
          name: 'Carlos Pavia',
          position: 'Director desarrollo web',
          img: 'carlospavia.jpg',
          links: {
            linkedin: 'https://www.linkedin.com/in/carlos-pavia-7517bb51/'
          }
        },
        {
          name: 'Jonathan Álvarez',
          position: 'Director Financiero',
          img: 'jonathanalvarez.jpg',
          links: {
            linkedin: 'https://www.linkedin.com/in/jonathan-alvarez-592816bb/'
          }
        },
        {
          name: 'Shuberth Chi',
          position: 'Director tecnológico',
          img: 'shuberthchi.png',
          links: {
            linkedin: 'https://www.linkedin.com/in/shuberth-chi-balam/'
          }
        }
      ],
      advisors: [
        {
          name: 'Rodrigo de la Peña',
          position: 'Inversor',
          img: 'rodrigodelapena.png',
          links: {
            linkedin: 'https://www.linkedin.com/in/rodrigo-de-la-pe%C3%B1a-30a4b522/'
          }
        },
        {
          name: 'Luis Riveroll',
          position: 'Inversor',
          img: 'luisriveroll.jpg'
        },
        {
          name: 'Paul D´Souza',
          position: 'Silicon Valley Advisor',
          img: 'pauldsouza.png'
        },
        {
          name: 'Álvaro Santos',
          position: 'Advisor',
          img: 'alvarosantos.png',
          links: {
            linkedin: 'https://www.linkedin.com/in/%C3%A1lvaro-santos-g%C3%B3mez-9a456435/'
          }
        },
        {
          name: 'Jorge Espinosa (Criptón)',
          position: 'Youtube Blockchain Influencer',
          img: 'jorgeespinosa.jpg'
        },
        {
          name: 'Javier García',
          position: 'Plug & Play Advisor',
          img: 'javergarcia.jpg',
          links: {
            linkedin: 'https://www.linkedin.com/in/javier-garc%C3%ADa-9921a7141/'
          }
        },
        {
          name: 'Daniel Muvdi',
          position: 'Advisor',
          img: 'danielmuvdi.jpg'
        },
        {
          name: 'Mendy Srugo',
          position: 'Advisor & Investor',
          img: 'mendysrugo.jpg'
        },
        {
          name: 'David Battaglia',
          position: 'Advisor',
          img: 'davidbattaglia.jpg'
        }
      ]
    }
  },
  methods: {
    visibilityChanged (isVisible, entry) {
      if (isVisible) {
        this.$emit('currentSectionChanged', 'WoonklyTeam')
      }
    }
  },
  components: {
    wTeamMember
  }
}
</script>


<style lang="scss">
#woonkly-team {
  background: var(--woonkly-black-blue);
  padding-bottom: 5em;
  position: relative;

  #woonkly-light {
    position: absolute;
    z-index: 1;
    width: 4em;
    top: 38%;
    right: 2em;
  }

  & > h3.title:first-of-type {
    margin-bottom: 2.5em;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      display: inline-block;
      top: calc(100% + 1em);
      left: 50%;
      transform: translateX(-50%);
      height: 0.75em;
      width: 2px;
      background: var(--woonkly-light-blue);
    }

  }

  .team, .advisors {
    justify-content: space-evenly;
  }
}

@media screen and (min-width: 769px) {
  #woonkly-team {
    padding-bottom: 12em;

    .team {
      max-width:  1000px;
    }

    .advisors {
      max-width: 650px;
    }

    & > .columns {
      margin-left: auto;
      margin-right: auto;
    }
  }
}
</style>
