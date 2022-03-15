<template>
  <section
    class="h-screen w-screen bg-gray-500 fixed top-0 opacity-50 z-20"
    @click="$emit('closeModal')"
  ></section>
  <div class="absolute inset-0 margin-auto">
    <div class="flex h-full">
      <div class="m-auto bg-white shadow rounded p-4 z-30">
        <div class="p-2 border rounded m-2">
          <h1 class="text-2xl text-center">Login</h1>
          <form action="" class="m-4 py-2" @submit="auth">
            <div class="my-4">
              <label for="name" class="p-2">Email or User Name</label>
              <input
                type="text"
                placeholder="Enter your user name or password"
                id="name"
                class="rounded w-full shadow p-4"
          
              />
            </div>
            <div>
              <label for="password" class="p-2 my-3">Password</label>
              <input
                type="password"
                placeholder="Enter your upassword"
                name="password"
                id="password"
                class="rounded w-full shadow p-4"
      
              />
            </div>
            <div>
              <button
                type="submit"
                class="
                  text-white
                  my-8
                  p-2
                  bg-gradient-to-r
                  from-red-800
                  to-pink-400
                  w-full
                  rounded-md
                  text-xl
                "
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  data(){
    return{
inputs:{
  password:"",
  email:""
}
    }
  },
  methods:{
    auth(){
      console.log("Hi Every One")
    }
  }
}

</script>

<style>

</style>
