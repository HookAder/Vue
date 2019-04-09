<template>
  <div class="home">
    <My></My>
  </div>
</template>

<script>
// @ is an alias to /src
import My from '@/components/App/My/index.vue'

export default {
  name: 'app',
  components: {
    My
  }
}
</script>
