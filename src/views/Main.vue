<script>
export default {
    name: 'home'
}
</script>

<template>
  <div class="welcome">
    <div class="container">
      <h1 class="welcome-title">WELCOME TO MY PROJECT</h1>
      <div class="routers">
        <router-link to="/login" class="welcome-button">Login</router-link>
        <router-link to="/register" class="welcome-button">Register</router-link>
      </div>
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

  .container {
    margin: 0 120px;
  }

  .welcome-title {
    font-size: 78px;
    margin-top: 350px;
    margin-bottom: 40px;
    color: #fff;
  }

  .welcome-button {
    padding: 20px 60px;
    text-decoration: none;
    color: rgb(255, 255, 255);
    font-size: 32px;
    border: 3px solid rgb(121, 32, 204);
    border-radius: 10px;
  }

  .welcome .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .routers {
    display: flex;
    gap: 100px;
  }

</style>
