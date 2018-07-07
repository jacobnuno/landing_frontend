<template>
  <div class="columns is-mobile">
    <div class="woonkly-input column is-12">
      <input type="text" class="w-input" :placeholder="wPlaceholder">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      placeholder: null
    }
  },
  props: {
    wPlaceholder: String
  }
}
</script>

<style lang="scss" >
  .woonkly-input {
    text-align: center;
    padding: 1em;
    background: #09072e;
    border-bottom: 1px #00d2ff solid;
  }

  input.w-input {
    background: none;
    border: none;
    color: white;
    text-align: center;

    &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
      color: white;
      text-align: center;
    }
    &::-moz-placeholder { /* Firefox 19+ */
      color: white;
      text-align: center;
    }
    &:-ms-input-placeholder { /* IE 10+ */
      color: white;
      text-align: center;
    }
    &:-moz-placeholder { /* Firefox 18- */
      color: white;
      text-align: center;
    }
  }
</style>
