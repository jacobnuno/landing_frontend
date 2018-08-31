<template>
  <div class="columns is-mobile">
    <div class="woonkly-input column is-12-mobile is-6-desktop is-offset-3-desktop">
      <input
        v-if="!isTextarea"
        class="w-input is-size-6-mobile is-size-4-tablet"
        type="text"
        :placeholder="wPlaceholder"
        v-model="localValue"
        @input="$emit('input', localValue)">
      <textarea v-else class="w-input is-size-6-mobile is-size-4-tablet" :placeholder="wPlaceholder" rows="8" cols="80"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      placeholder: null,
      localValue: ''
    }
  },
  props: {
    wPlaceholder: String,
    value: String,
    isTextarea: {
      default: false
    }
  },
  mounted () {
    this.localValue = this.value
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
      transition: opacity 500ms ease;
    }
    &::-moz-placeholder { /* Firefox 19+ */
      color: white;
      text-align: center;
      transition: opacity 500ms ease;
    }
    &:-ms-input-placeholder { /* IE 10+ */
      color: white;
      text-align: center;
      transition: opacity 500ms ease;
    }
    &:-moz-placeholder { /* Firefox 18- */
      color: white;
      text-align: center;
      transition: opacity 500ms ease;
    }

    &:focus, &:active {
      &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        opacity: 0;
      }
      &::-moz-placeholder { /* Firefox 19+ */
        opacity: 0;
      }
      &:-ms-input-placeholder { /* IE 10+ */
        opacity: 0;
      }
      &:-moz-placeholder { /* Firefox 18- */
        opacity: 0;
      }
    }
  }
</style>
