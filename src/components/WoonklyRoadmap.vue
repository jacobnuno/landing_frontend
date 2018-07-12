<template>
    <section id="woonkly-roadmap" class="section">
        <div class="container">
            <img id="progress-bar" src="/img/sections/roadmap/progress.svg" alt="Roadmap">
            <div class="title is-uppercase is-size-1-desktop is-size-5-mobile has-text-centered">Logros y objetivos</div>

            <!-- Roadmap begins -->
            <div id="roadmap">
                <template v-for="(index, i) in (1, Math.ceil(roadmap.length/2))">
                    <div :key="index" class="columns">
                        <div class="column is-mobile is-half is-aligned-to-right" :class="{small: i%2 === 0}">
                            <img class="roadmap-circle" src="/img/sections/roadmap/done-circle.svg" alt="Done circle">
                            <img class="roadmap-line" src="/img/sections/roadmap/done-line.svg" alt="Done line">
                            <div class="data-container">
                                <h3 class="roadmap-title is-uppercase is-bold">
                                    {{ roadmap[i * 2].title }}
                                </h3>
                                <p class="roadmap-description">
                                    {{ roadmap[i * 2].description }}
                                </p>
                            </div>
                        </div>
                        <div v-if="roadmap[i * 2 + 1]" class="column is-mobile is-half is-aligned-to-left" :class="{small: i%2 === 0}">
                            <img class="roadmap-line" src="/img/sections/roadmap/done-line.svg" alt="Done line">
                            <img class="roadmap-circle" src="/img/sections/roadmap/done-circle.svg" alt="Done circle">
                            <div class="data-container">
                                <h3 class="roadmap-title is-uppercase is-bold">
                                    {{ roadmap[i * 2 + 1].title }}
                                </h3>
                                <p class="roadmap-description">
                                    {{ roadmap[i * 2 + 1].description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    data() {
        return {
            roadmap: [
                { title: "Enero 2017", description: "Entrada en la incubadora de Startups Fitec1 e inversión de 75,000USD" },
                { title: "Junio 2017", description: "Creación primer MVP" },
                { title: "Enero 2018", description: "Ganador aceleración mejor Startup Plug and Play Silicon Valley LATAM 2018" },
                { title: "Febrero 2018", description: "Aceleración en Tecnológico de Monterrey de Guadalajara" },
                { title: "Marzo 2018", description: "Preparación de ICO" },
                { title: "Abril 2018", description: "Creación de plataforma ICO, Token ERC20 y Smart contracts." },
                { title: "Mayo 2018", description: "Comienza la Pre-venta de tokens y se lanza la versión beta 1.0" },
                { title: "Julio 2018", description: "Comienza la venta privada a inversores y fondos de inversión de capital riesgo (VCs)" },
                { title: "Septiembre 2018", description: "Preparación de ICO" },
                { title: "Enero 2018", description: "Finaliza la ICO y el \"woonk\" es listado en exchanges" },
                { title: "Marzo 2019", description: "Comienza la Pre-venta de tokens y se lanza la versión beta 1.0" },
            ]
        }
    }
})
</script>


<style lang="scss">
    #woonkly-roadmap{
        background-color: #0a0830;
    }

    #progress-bar{
        width: 5px;
        position: absolute;
        margin: auto;
        left: 50%;
    }

    #progress-bar, #roadmap{
        margin-top: 75px;
    }

    .is-aligned-to-left{
        text-align: left;
        .roadmap-circle{
            margin-left: -25%;
        }
        .data-container{
            margin-right: auto;
        }
    }
    .is-aligned-to-right{
        text-align: right;
        .roadmap-circle{
            margin-right: -25%;
        }
        .data-container{
            margin-left: auto;
        }
    }

    .roadmap-line{
        width: 70%;
    }

    .roadmap-circle{
        width: 220px;
        margin: -132px;
    }

    .small{
        .roadmap-line{
            width: 55%;
        }
        &.is-aligned-to-right{
            .roadmap-circle{
                margin-right: -18%;
            }
        }
        &.is-aligned-to-left{
            .roadmap-circle{
                margin-left: -21%;
            }
        }
    }

    .data-container{
        max-width: 165px;
        padding: 25px;
    }

    .is-bold{
        font-weight: bolder;
    }
</style>
