<template>
  <div class="page">
    <div class="home">
      <Converter/>
    </div>
  </div>
</template>

<script>
import Converter from '../components/ConverterForm.vue'

export default {
  name: 'PageIndex',
  data(){
    return {}
  },

  components: {
    Converter,
  },
}

</script>

<style lang="scss" scoped>
.home {
  padding-top: 40px;
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
