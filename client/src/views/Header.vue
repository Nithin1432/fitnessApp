<template>
  <div class="headerContainer">
    <div class="row">
      <div class="ml-5">
        <h1>UziFit</h1>
      </div>
      <div class="ml-auto mr-5 row">
        <router-link class="mr-3 mt-3" v-if="isLogin!='true'" to="/login">Log in</router-link>
        <router-link class="mr-3 mt-3" v-if="isLogin!='true'" to="/signup">Sign up</router-link>
        <ul v-if="isLogin=='true'" id="right-side">
          <li>
            <!-- <a href> -->
              <img src="../assets/images/profile.jpg" id="profilepic" />
              <span>{{user.Name}}</span>
            <!-- </a> -->
            <a class="mr-3 mt-3 text-primary" @click="logout" >Log out</a>
          </li>
        </ul>
        
      </div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/suggestion">Suggestion</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/home">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/exercise-logs">Exercise</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/diet-logs">Diet</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isLogin: localStorage.getItem("isLogin"),
      user:JSON.parse(localStorage.getItem("user"))
    };
  },
  props: {
    msg: String
  },
  methods: {
    logout() {
      localStorage.clear();
      this.isLogin = false;
      this.$router.push("/login");
    }
  },
  created() {
    console.log(this.isLogin);
  }
};
</script>

<style scoped>
.headerContainer {
  overflow-x: hidden;
}

#right-side {
  display: inline;
  float: right;
  text-align: right;
}

#right-side li {
  list-style-type: none;
}

#right-side li span {
  font-style: italic;
  font-size: 24px;
  color: #0062cc;
}

#right-side a {
  display: flex;
  align-items: center;
}

#right-side a img {
  margin-right: 10px;
}

#profilepic {
  height:50px; 
  width: 50px; 
  border-radius:50px;
}
</style>