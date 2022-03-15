<template>
  <Header @open-login-modal="isLoginOpen = true" />
  <div class="w-full"><router-view></router-view></div>

  <LoginModal v-if="isLoginOpen" @close-modal="isLoginOpen = false" />
</template>

<script>
import Header from "./components/Header.vue";
import LoginModal from "./components/LoginModal.vue";
export default {
  data() {
    return {
      isLoginOpen: false,
    };
  },
  components: {
    Header,
    LoginModal,
  },
};
</script>
