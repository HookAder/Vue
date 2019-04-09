<template>
  <div class="home">
    <Cart></Cart>
  </div>
</template>

<script>
// @ is an alias to /src
import Cart from '@/components/App/Cart/index.vue'

export default {
  name: 'app',
  components: {
    Cart
  }
}
</script>
