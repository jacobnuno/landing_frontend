<template>
  <section v-observe-visibility="{ callback: visibilityChanged, intersection: { threshold: 0.1 } }" id="woonkly-team" class="section">
    <img id="woonkly-light" src="/img/icons/woonkly-light.png" alt="Woonkly Light">
    <h3 class="title is-3 has-text-centered has-text-white is-uppercase">{{$t('message.aExpertTeam')}}</h3>
    <p class="is-size-5 has-text-centered">{{$t('message.createABetterIdea')}}</p>
    <div class="columns is-mobile is-multiline team">
      <w-team-member v-for="(m, index) in team" v-bind:key="index" :member="m" class="column is-half-mobile is-one-quarter-tablet"/>
    </div>
    <h3 class="title is-3 has-text-centered has-text-white is-uppercase">{{$t('message.investorsAndAdvisors')}}</h3>
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
          position: this.$t('message.teamMembers.santos.position'),
          img: 'mrsantos.jpg',
          links: {
            twitter: 'https://twitter.com/mrsantosyoutube',
            youtube: 'https://www.youtube.com/channel/UCo3hRG_jF6lAVzOUh_UM5Sg',
            linkedin: 'https://mx.linkedin.com/in/danielsantos3'
          }
        },
        {
          name: 'Matei Antohi',
          position: this.$t('message.teamMembers.mateiAntohi.position'),
          img: 'mateantohi.png',
          links: {
            linkedin: 'https://www.linkedin.com/in/matei-antohi-18950865/'
          }
        },
        {
          name: 'David Leonardo',
          position: this.$t('message.teamMembers.davidLeonardo.position'),
          img: 'davidleonardo.png',
          links: {
            linkedin: 'https://www.linkedin.com/in/davidleonardoc/'
          }
        },
        {
          name: 'Oscar Cardenas',
          position: this.$t('message.teamMembers.oscarCardenas.position'),
          img: 'oscarcardenas.jpeg',
          links: {
            linkedin: 'https://www.linkedin.com/in/cardedeveloper/',
            twitter: 'https://twitter.com/CardeDeveloper'
          }
        },
        {
          name: 'Sara Santos',
          position: this.$t('message.teamMembers.saraSantos.position'),
          img: 'sarasantos.jpg',
          links: {
            linkedin: 'https://www.linkedin.com/in/sarasc9/'
          }
        },
        {
          name: 'Carlos Pavia',
          position: this.$t('message.teamMembers.carlosPavia.position'),
          img: 'carlospavia.jpg',
          links: {
            linkedin: 'https://www.linkedin.com/in/carlos-pavia-7517bb51/'
          }
        },
        {
          name: 'Jonathan Álvarez',
          position: this.$t('message.teamMembers.jonathanAlvarez.position'),
          img: 'jonathanalvarez.jpg',
          links: {
            linkedin: 'https://www.linkedin.com/in/jonathan-alvarez-592816bb/'
          }
        },
        {
          name: 'Shuberth Chi',
          position: this.$t('message.teamMembers.shuberthChi.position'),
          img: 'shuberthchi.png',
          links: {
            linkedin: 'https://www.linkedin.com/in/shuberth-chi-balam/'
          }
        },
        {
          name: 'Gustavo Rueda',
          position: this.$t('message.teamMembers.gustavoRueda.position'),
          img: 'woonkzalo.jpg',
          links: {
            linkedin: 'https://www.linkedin.com/in/gustavo-adolfo-rueda-enr%C3%ADquez-5873b114a/'
          }
        },
        {
          name: 'Jacob Nuño',
          position: this.$t('message.teamMembers.jacobNuno.position'),
          img: 'jacob.jpg',
          links: {
            linkedin: 'https://www.linkedin.com/in/jacob-nu%C3%B1o-g%C3%B3mez-15a287158/'
          }
        },
        {
          name: 'Kevin Quino',
          position: this.$t('message.teamMembers.kevinQuino.position'),
          img: 'kevin.jpg',
          links: {
            linkedin: 'https://www.linkedin.com/in/kevin-salgado-quino-447a09140/'
          }
        },
        {
          name: 'Juan Sandoval',
          position: this.$t('message.teamMembers.juanSandoval.position'),
          img: 'manuel.jpg'
        },
        {
          name: 'Jorge Villaseñor',
          position: this.$t('message.teamMembers.jorgeVillasenor.position'),
          img: 'coke.jpg',
          links: {
            linkedin: 'https://www.linkedin.com/in/jacob-nu%C3%B1o-g%C3%B3mez-15a287158/'
          }
        },
        {
          name: 'Ilich Arredondo',
          position: this.$t('message.teamMembers.ilichArredondo.position'),
          img: 'ilich.jpg',
          links: {
            twitter: 'https://twitter.com/ilichh1',
            linkedin: 'https://www.linkedin.com/in/ilichh1/'
          }
        },
        {
          name: 'Derek Jones',
          position: this.$t('message.teamMembers.derekJones.position'),
          img: 'derekjones.jpeg',
          links: {
            linkedin: 'https://www.linkedin.com/in/unitedcoin/'
          }
        },
        {
          name: 'Woonkzalo',
          position: this.$t('message.teamMembers.woonkzalo.position'),
          img: 'gustavo.jpg',
          links: {
            twitter: 'https://twitter.com/woonkzalo'
          }
        }
      ],
      advisors: [
        {
          name: 'Ghali El Kasri',
          position: this.$t('message.teamMembers.ghaliElKasri.position'),
          img: 'ghalielkasri.jpeg',
          links: {
            linkedin: 'https://www.linkedin.com/in/mohamed-el-ghali-el-kasri-61471114a/'
          }
        },
        {
          name: 'Ghita El Kasri',
          position: this.$t('message.teamMembers.ghitaElKasri.position'),
          img: 'ghitaelkasri.jpeg',
          links: {
            linkedin: 'https://www.linkedin.com/in/ghita-el-kasri-81a6b185/'
          }
        },
        {
          name: 'Hassan Lahlou',
          position: this.$t('message.teamMembers.hassanLahlou.position'),
          img: 'hassanlahlou.jpeg',
          links: {
            linkedin: 'https://www.linkedin.com/in/hassanlahlou/'
          }
        },
        {
          name: 'Rodrigo de la Peña',
          position: this.$t('message.teamAdvisors.rodrigoDeLaPena.position'),
          img: 'rodrigodelapena.png',
          links: {
            linkedin: 'https://www.linkedin.com/in/rodrigo-de-la-pe%C3%B1a-30a4b522/'
          }
        },
        {
          name: 'Luis Riveroll',
          position: this.$t('message.teamAdvisors.luisRiveroll.position'),
          img: 'luisriveroll.jpg'
        },
        {
          name: 'Paul D´Souza',
          position: this.$t('message.teamAdvisors.paulDSouza.position'),
          img: 'pauldsouza.png'
        },
        {
          name: 'Álvaro Santos',
          position: this.$t('message.teamAdvisors.alvaroSantos.position'),
          img: 'alvarosantos.png',
          links: {
            linkedin: 'https://www.linkedin.com/in/%C3%A1lvaro-santos-g%C3%B3mez-9a456435/'
          }
        },
        {
          name: 'Jorge Espinosa (Criptón)',
          position: this.$t('message.teamAdvisors.jorgeEspinosa.position'),
          img: 'jorgeespinosa.jpg'
        },
        {
          name: 'Javier García',
          position: this.$t('message.teamAdvisors.javierGarcia.position'),
          img: 'javergarcia.jpg',
          links: {
            linkedin: 'https://www.linkedin.com/in/javier-garc%C3%ADa-9921a7141/'
          }
        },
        {
          name: 'Daniel Muvdi',
          position: this.$t('message.teamAdvisors.danielMuvdi.position'),
          img: 'danielmuvdi.jpg'
        },
        {
          name: 'Mendy Srugo',
          position: this.$t('message.teamAdvisors.mendySrugo.position'),
          img: 'mendysrugo.jpg'
        },
        {
          name: 'David Battaglia',
          position: this.$t('message.teamAdvisors.davidBattaglia.position'),
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
