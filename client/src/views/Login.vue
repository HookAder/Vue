<template>
  <div class="home">
    <Login></Login>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login/index.vue'

export default {
  name: 'login',
  components: {
    Login
  }
}
</script>
