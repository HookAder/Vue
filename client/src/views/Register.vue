<template>
  <div class="home">
    <Register></Register>
  </div>
</template>

<script>
// @ is an alias to /src
import Register from '@/components/Register/index.vue'

export default {
  name: 'register',
  components: {
    Register
  }
}
</script>
