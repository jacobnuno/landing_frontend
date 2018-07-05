<template>
  <section id="woonkly-faq" class="section">

    <h3 class="title is-4">Preguntas Frecuentes</h3>

    <div class="line">

    </div>

    <p class="is-small">
        Si tienes dudas aquí te las intentaremos resolver, y si no encuentras la solución a tu pregunta siempre puedes contactarnos a contacto@woonkly.com
    </p>

    <button type="button" class="button" id="users">USUARIOS</button>
    <button type="button" class="button" id="advertisers">ANUNCIANTES</button>
    <button type="button" class="button" id="ico">PRE-ICO & ICO</button>

    <div class="wrap-collabsible">
        <input id="singUp" class="toggle" type="checkbox">
        <label for="singUp" class="lbl-toggle">¿Comó puedo registrarme en Woonkly?</label>
        <div class="collapsible-content">
            <div class="content-inner">
                <p>
                    Some text
                </p>
            </div>
        </div>
    </div>

    <div class="wrap-collabsible">
        <input id="cost" class="toggle" type="checkbox">
        <label for="cost" class="lbl-toggle">¿Tendrá algún costo acceder a Woonkly?</label>
        <div class="collapsible-content">
            <div class="content-inner">
                <p>
                    Second text
                </p>
            </div>
        </div>
    </div>

    <div class="wrap-collabsible">
        <input id="questions" class="toggle" type="checkbox">
        <label for="questions" class="lbl-toggle">¿Qué hago si tengo preguntas?</label>
        <div class="collapsible-content">
            <div class="content-inner">
                <p>
                    Puedes contactarnos en cualquier momento por redes sociales o por correo a contacto@woonkly.com
                </p>
            </div>
        </div>
    </div>

  </section>
</template>

<style lang="scss">
#woonkly-faq {
  background: #0a0830;
  text-align: center;
}

.line {
    height: 30px;
    width: 1px;
    background-color: #00ffff;
    margin: auto;
    margin-bottom: 10px;
}


button {
    font-weight: bold;
    //border-radius: .1em;

    //color: white;
    //display: inline-block;
    width:150px;

}

#users {
    margin: 7px;
    //padding-left: 30px;
    //padding-right: 30px;
    color: white;
    background: linear-gradient(to right, #93e9b8 30%, #20b7bc);
    background: 'USERS';
}

#advertisers {
    margin: 7px;
    color: white;
    background: linear-gradient(to right, #df51ca 30%, #f08d3b);
}

#ico {
    margin: 7px;
    color: white;
    background: linear-gradient(to right, #4582fd 30%, #ab23fa);
}

.wrap-collabsible {
  //margin-bottom: 1.2rem 0;
}

input[type='checkbox'] {
  display: none;
}

.lbl-toggle {
  display: block;

  font-weight: bold;
  font-family: monospace;
  font-size: .7rem;
  text-align: center;

  padding: 1rem;

  color: white;
  background: #14123d;

  cursor: pointer;

  transition: all 0.25s ease-out;
  border-bottom: 1px solid #00d2ff;
}

.lbl-toggle:hover {
  color: white;
}

.lbl-toggle::before {
  content: ' ';
  display: inline-block;

  // border-top: 5px solid transparent;
  // border-bottom: 5px solid transparent;
  // border-left: 5px solid currentColor;
  vertical-align: middle;
  margin-right: .7rem;
  transform: translateY(-2px);

  transition: transform .2s ease-out;
  // border-bottom: 1px solid #00d2ff;
}

.toggle:checked + .lbl-toggle::before {
  transform: rotate(90deg) translateX(-3px);
}

.collapsible-content {
  max-height: 0px;
  overflow: hidden;
  transition: max-height .25s ease-in-out;
}

.toggle:checked + .lbl-toggle + .collapsible-content {
  max-height: 350px;
}

.toggle:checked + .lbl-toggle {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.collapsible-content .content-inner {
  background: #0e0c36;
  // border-bottom-left-radius: 7px;
  // border-bottom-right-radius: 7px;
  padding: .5rem 1rem;
}
</style>
