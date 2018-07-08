<template>
    <section id="woonkly-ac-token" class="section">

        <div class="container-tkn">
            <img src="/img/icons/linea_luz.svg" width="40%" class="linealuz-tkn">
            <h3 class="title is-4 has-text-centered">ADQUIRIR TOKENS</h3>
        </div>
        
        <p class="text-tkn">
            Con el objetivo de premiar la atención de las
            personas cuando ven vídeos o interactúan con
            el contenido , hemos creado nuestra
            criptomoneda, llamada “woonk”. Los creadores
            de contenido y anunciantes pueden comprar
            woonks para repartirlos entre las personas que
            vean, compartan e interactuen con su
        </p>
        <br>
        <ul>
            <li v-for="(list, listIndex) in lists" :key="listIndex" class="list-tkn">
                <img src="/img/icons/group.svg" width="30px" class="img-tkn">
                <div class="des-tkn">
                    <h1 class="title is-5">{{list.title}}</h1>
                    {{list.content}}
                </div>
            </li>
        </ul>
        <img src="/img/icons/linea_luz.svg" width="45%" class="linealuzz-tkn">
        <img src="/img/icons/ilustracion.svg" width="40%" class="ilustracion-tkn">

    </section>
</template>

<script>
export default {
    data(){
        return{
            lists: [
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
                },
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
  background: #0a0830;
  .extended-brief {
    margin-top: 1.5em;
  }
}

.list-tkn {
    display: flex;
    align-items: center;
    margin: 20px;
  }

.img-tkn{
    margin: 10px;
}

.text-tkn{
    font-size: 1em;
    margin: 10px;
}

.des-tkn{
    font-size: 1.1em;
}

.container-tkn{
    align-items: center;
}

.linealuz-tkn{
    position: absolute;
    transform: translate(-35%, -50%);
    z-index: 1;
}

.ilustracion-tkn{
    position: absolute;
    transform: translate( 150%, -90%);
    z-index: 2;
}
.linealuzz-tkn{
    position: absolute;
    transform: translate(105%, -220%);
    z-index: 3;
}



</style>

