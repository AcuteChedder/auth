<script>
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";
export default {
    name: 'login',

    data() {
      return {
        username: '',
        password: '',
      }
    },

    methods: {
      async login() {
        try {
          const response = await axios.post('/login', {
            username: this.username,
            password: this.password
          })

          localStorage.setItem('isAuth', true)
          localStorage.setItem('username', response.data.username)

          this.$router.push({path: '/profile'})
        } catch (error) {
          alert(error.response.data.error);
        }
      }
    }
}
</script>

<template>
  <div class="welcome">
    <div class="container">
      <form class="form" @submit.prevent="login">
        <h1 class="form-title">Welcome</h1>
        <input placeholder="username" v-model="username" class="input-form" required>
        <input placeholder="password" v-model="password" class="input-form" type="password" required>
        <button type="submit" class="form-btn">Login</button>
        <p class="form-desc">Don't have an account? <router-link to="/register" class="link">Register</router-link></p>
      </form>
    </div>
  </div>
</template>

<style scoped>
  .welcome {
    background-color: #000;
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    width: 100%;
    font-family: "Bebas Neue";
  }

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 80px;
    background-color: #131313;
  }

  .container {
    margin: 0 120px;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
  }

  .form-title {
    color: #fff;
    margin-bottom: 20px;
    font-size: 40px;
  }

  .input-form {
    padding: 10px 24px;
    margin-bottom: 15px;
    border-radius: 10px;
    border: none;
  }

  .form-btn {
    padding: 10px 90px;
    margin-top: 14px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }

  .form-desc {
    margin-top: 20px;
    color: #fff;
    font-size: 20px;
  }

  .link {
    text-decoration: none;
    color: #ff9e70;

  }

</style>
