<template>
  <h1  class="title" v-if="numberOfStudent == 1">{{ numberOfStudent }} Golden Student</h1>
    <h1 v-else-if="numberOfStudent > 1" class="title">
      {{ numberOfStudent }} Golden students
    </h1>
    <h1 v-else class="title">No Golden students List</h1>
    <ul>
      <li v-for="(student, index) in students" v-bind:key="index" >
        <div class="list">
          {{ student.name }} <button @click="removeStudent(index)">x</button>
          <!-- <h3>{{ studentDescription }}</h3>
          <div>
            <input
              
              placeholder="Add description"
            />
            <button @click="addDescription">+</button> -->
          <!-- </div> -->
        </div>
      </li>
    </ul>
    <form @submit.prevent="addStudent" class="form">
      <input v-model.lazy="newStudent" placeholder="Enter new student name" />
      <button type="submit">Add new student</button>
    </form>
</template>

<script>
export default {
computed: {
    numberOfStudent() {
      return this.students.length;
    },
  },
  methods: {
    addStudent() {
      if (this.newStudent != "") {
        this.students.push({ name: this.newStudent });
        this.newStudent = "";
      }
    },
    addDescription() {
    //  this.studentDescription =this.description;
    // this.studentDescription=''
    },
    removeStudent(index) {
      this.students = this.students.filter((name, i) => i != index);
    },
  },
  data() {
    return {
      students: [{ name: "Gashaw" }, { name: "Endale" }, { name: "Fasica" }],
      newStudent: "",
      description: "",
      studentDescription:''
    };
  },
}
</script>

<style scoped>
.list{
    justify-content: space-between;
    width: 100%;
    height:100%;
    display: flex;
    text-align:center;
    margin:auto;
    background-color: darkkhaki;
   font-family: "Times New Roman";
    font-size: 20px;
    text-transform: capitalize;
}
.title{
 font-family: "Times New Roman";
    font-size: 40px;
}
.form{
    justify-content: space-around;
    display:flex;
    background-color: darkorange;
    align-items: center;
}
</style>>

