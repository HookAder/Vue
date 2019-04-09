<template>
  <div class="home">
    <Home></Home>
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/App/Home/index.vue'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>
