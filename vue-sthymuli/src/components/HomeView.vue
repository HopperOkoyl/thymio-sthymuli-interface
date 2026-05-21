<script lang="ts">
    enum MenuNames {
        Home = 'Home',
        Teacher = 'Teacher',
        Challenges = 'Challenges',
        Sandbox = 'Sandbox',
    }
    export default{
        data() {
            return {
                MenuNames
            }
        },
        computed: {
            allMenus() {
                return Object.values(MenuNames)
            },
            secondaryMenus() {
                    return this.allMenus.filter(m => m !== MenuNames.Home)
            }
        }
    }
</script>

<template>
    <div>
        <h1>Home</h1>
        <nav>
        <!-- <RouterLink to="/">Home</RouterLink> -->
            <ul class="nav-menu">
                <li v-for="name in secondaryMenus" :key="name">
                    <RouterLink :to=name.toLowerCase()>{{ name }}</RouterLink>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style scoped>
    .nav-menu {
    list-style: none;
    padding: 0;
    margin: 0;
    }
</style>