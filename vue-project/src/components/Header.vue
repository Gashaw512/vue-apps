<template>
<HeaderC/>

  <ul class="navLink w-full" >
    <!-- <li><router-link class="homes" to="/">Home</router-link></li>
          <li><router-link class="students" to="/student">Golden Students</router-link></li>
          <li><router-link class="calendars" to="/calendar">View Calendar</router-link></li> -->
     
    <li>
      <router-link
        v-for="item in list"
        :key="item.to"
        class="lists"
        :to="item.to"
        >{{ item.title }}</router-link
      >
    </li>
     <button class="mx-2 text-xl text-white " @click="$emit('openLoginModal')">Login</button>
  </ul>
  
  
</template>

<script>
import HeaderC from './HeaderC.vue'
export default {
  components:{
    HeaderC,
  },
  
  data() {
    return {
      list: [
        { title: "Home", to: "/" },
        { title: "Student", to: "/student" },
        { title: "View Calendar", to: "/calendar" },
        { title: "Markdown", to: "/markdown" },
        { title: "Slider", to: "/slider" },
      ],
    };
  },
};
</script>

<style scoped>
.navLink {
  float: left;
  margin: 0;
  padding: 0;
  display: flex;
  background-color: rgb(5, 29, 13);
  /* position: fixed; */
  /* position: top; */
  /* width: 100%; */
  list-style-type: none;
}
li {
  margin: 10px;
  padding: 10px;
}
.lists {
  margin: 10px;
  padding: 10px;
  text-decoration: none;
  color: white;
  text-transform: capitalize;
  font-size: 18px;
  font-family: "Times New Roman", Times, serif;
}
</style>