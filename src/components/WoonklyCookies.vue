<template>
    <div>
        <h1>{{$t('message.cookiesLink.title')}}</h1>
    </div>
</template>

<template>
    <div class="text-cookies">
        <div class="font-size-control">
            <label for="fontSizeControl">Tamaño de fuente </label>
            <input type="range" name="fontSizeControl" id="fontSizeControl" v-model="fontSize" min="4" max="64">
        </div>

        <div class="content-wrapper" :style="{fontSize: `${fontSize}px`}" style="font-size:16px">
            <p>
                <h1>Política de cookies</h1><br>

                <b>Descargo de responsabilidad de cookies (el cartelito pequeño)</b><br><br>

                Woonkly utiliza cookies. Esto nos ayuda a proporcionarle una buena experiencia al navegar por nuestro sitio, así como a mejorarlo. Si continúa navegando, presta su consentimiento para usar nuestras cookies. Nuestra política de privacidad explica cómo cuidamos sus datos personales cuando visita nuestro sitio web y le informa sobre sus derechos de privacidad y cómo la ley lo protege. Para obtener más información, lea nuestra Política sobre cookies. Leer más...<br><br>


                <b>Descargo de responsabilidad y cookies.</b><br><br>

                las cookies son pequeños archivos de números y letras que transferimos al disco duro de su computadora. Algunas cookies utilizadas en este sitio son esenciales y son necesarias para garantizar que el sitio funcione correctamente, como mantener la imagen de fondo que ve en cada página web.<br><br>

                Los servicios contenidos en esta sección permiten al controlador de datos para supervisar y analizar los datos de tráfico y se utilizan para realizar un seguimiento del comportamiento del usuario.<br><br>

                Esta página web utiliza Google Analytics y Yandex como una herramienta de seguimiento de visitas y comportamiento de los usuarios en el sitio web. Ambos, son servicios de análisis web. utilizan la información personal recopilada con el fin de evaluar el uso de la página web y elaborar informes con el fin de mejorar la experiencia del usuario.<br><br>

                Al acceder y usar nuestro sitio web, usted acepta nuestro uso de cookies. Si no está satisfecho con el uso de cookies, se pueden desactivar cambiando la configuración de su navegador. Sin embargo, si desactiva las cookies, ciertas partes de nuestro sitio no estarán disponibles para usted.<br><br>

            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PrivacyPolicy',
        data () {
            return {
                fontSize: 16
            }
        }
    }
</script>

<style>

    h1{
        text-align: center
    }
    .text-cookies{
        padding:            4em 5em;
        margin-top: 4em;
        background-color:   var(--woonkly-black-blue);
        color:              white;
        text-align:         justify;
    }

    .content-wrapper {
        padding: 0 1em;
    }
    .content-wrapper > p {
        max-width: 500px;
        margin: 0 auto;
        margin-bottom: 4em;
    }
</style>
