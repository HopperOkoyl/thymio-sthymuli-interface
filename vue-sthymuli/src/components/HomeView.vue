<script lang="ts">
    // enum MenuNames {
    //     Home = 'Home',
    //     Teacher = 'Teacher',
    //     Challenges = 'Challenges',
    //     Sandbox = 'Sandbox',
    // }
    export default{
        data() {
            return {
                // MenuNames
                MenuNames: [
                    { name: "Home", value: 0 },
                    { name: "Teacher", value: 1 },
                    { name: "Challenges", value: 2 },
                    { name: "Sandbox", value: 3 }
                ],
            }
        },
        computed: {
            // allMenus() {
            //     return Object.values(MenuNames)
            // },
            secondaryMenus() {
                    return this.MenuNames.filter(m => m.name !== "Home")
            }
        }
    }
</script>

<template>
    <div>
        <!-- <h1>Home</h1> -->
        <nav>
        <!-- <RouterLink to="/">Home</RouterLink> -->
            <ul class="nav-menu">
                <li v-for="menu in secondaryMenus" :key="menu.name">
                    <RouterLink :to=menu.name.toLowerCase()>{{ menu.name }}</RouterLink>
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
        list-style-type: none;
        text-align: center;


        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    nav {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
    }

    /* .nav {
        list-style-type: none;
        padding: 0px;
        margin: 0px;
        text-align: center;
    } */
    /* .li {
        display: inline-block;
        padding: 20px;
    } */
    /* .li {
        display: inline-block;
        border: solid 1px;
        border-radius: 30%;
        background-color: lightgray;
        border-color: whitesmoke;
        padding: 20px;
    } */
    /* .nav li:hover {
        position: relative;
        background-color: whitesmoke;
        border-radius: 10%;
    } */
    /* .dropdown {
        position: relative;
        display: inline-block;
        padding: 20px;
    }
    .dropdown-content {
        position: absolute;
        display: none;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
    }
    .dropdown-content p {
        display: block;
        background-color: lightgray;
        background-color: white;
        padding: 12px 16px;
        text-decoration: none;
        margin: 0px;
    }
    .dropdown:hover .dropdown-content {
        display: block;
    }
    .dropdown:hover {
        background-color: whitesmoke;
    }
    .dropdown-content p:hover {
        background-color: whitesmoke;
    } */
</style>