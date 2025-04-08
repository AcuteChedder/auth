<script>
export default {
    name: 'profile',

    data() {
        return {
            username: ''
        }
    },

    mounted() {
        this.username = localStorage.getItem('username')
    },

    methods: {
        logout() {
            localStorage.removeItem('username')
            this.$router.push('/login')
        }
    }
}
</script>

<template>
    <div class="welcome">
        <h1>Welcome to your profile {{ username }}</h1>
        <button @click="logout">Log out</button>
    </div>
</template>

<style scoped>
    .welcome {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: "Bebas Neue";
        min-height: 100vh;
        margin: 0;
        background-color: #000;
    }

    h1 {
        font-size: 46px;
        color: #fff;
    }

    button {
        font-family: "Bebas Neue";
        font-size: 24px;
        padding: 14px 46px;
        border-radius: 26px;
        border: none;   
        cursor: pointer;
    }

    
</style>
