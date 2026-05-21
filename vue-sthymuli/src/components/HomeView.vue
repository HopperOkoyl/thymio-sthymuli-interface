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
            <div v-for="name in secondaryMenus" :key="name">
                <RouterLink :to=name.toLowerCase()>{{ name }}</RouterLink>
            </div>
        </nav>
    </div>
</template>