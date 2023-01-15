<template>
  <div class="home">
    <Login />
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/LoginName.vue';


export default {
  name: 'HomeView',
  components: {
    Login,
  },
};
</script>
