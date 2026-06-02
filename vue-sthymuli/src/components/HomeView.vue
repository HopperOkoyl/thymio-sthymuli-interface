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
    <nav>
        <ul class="nav-menu">
            <li v-for="menu in secondaryMenus" :key="menu.name" :class="menu.name">
                <RouterLink :to=menu.name.toLowerCase() class="router-link">
                    <p class="place-holder-images">PlaceHolder image</p>
                    {{ menu.name }}
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
    .nav-menu {
        list-style: none;
        padding: 0;
        margin: 0;
        list-style-type: none;
        text-align: center;


        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        /* background-color: aqua; */
    }
    nav {
        height: 100%;
        width: 100%;
        /* display: flex;
        flex-direction: column; */
    }

    .place-holder-images {
        background-color: lightgray;
        border-radius: 1vmin;
        padding: 30% 10% 30% 10%;
        /* padding: 120px 20px 120px 20px; */
    }
    /* Menu style */
    .Teacher, .Challenges, .Sandbox {
        display: flex;
        flex-direction: column;
        border-radius: 7vmin;
        justify-content: space-evenly;
        height: 90%;
    }
    .Teacher {
        background-color: rgba(200, 0, 0, 0.9); 
        /* flex: 1; */ /*not compatible with space-evenly etc*/
        width: 20%;
    }
    .Challenges {
        background-color: rgba(0,0,200,0.9);
        /* flex: 2 2 0; */ /*not compatible with space-evenly etc*/
        width: 30%;
    }
    .Sandbox {
        background-color: rgba(0,200,0,0.9);
        /* flex : 1; */ /*not compatible with space-evenly etc*/
        width: 20%;
    }
    .router-link {
        margin: 30% 10% 30% 10%;
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