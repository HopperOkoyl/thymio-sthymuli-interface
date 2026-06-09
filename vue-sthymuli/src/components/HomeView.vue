<script lang="ts">
    import { COLOR } from '../constants';
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
                firstColor: 'red',
                secondColor: 'blue',
                thirdColor: 'green',
                currentPalette: 0,
                firstPalette: {name: "pastel", first: COLOR.HexCodeSapphire, second: COLOR.HexCodeSandyBrown, third: COLOR.HexCodeSageGreen, bonus: COLOR.HexCodeAshGrey},
                colorPalette: [
                    {name: "pastel", first: COLOR.HexCodeSapphire, second: COLOR.HexCodeSandyBrown, third: COLOR.HexCodeSageGreen, bonus: COLOR.HexCodeAshGrey},
                    {name: "dark-pastel", first: COLOR.HexCodeSapphire, second: COLOR.HexCodeSandyBrown, third: COLOR.HexCodeJungleGreen, bonus: COLOR.HexCodeLavenderGrey,},
                    {name: "contrast", first: COLOR.HexCodeSapphire, second: COLOR.HexCodeMintLeaf, third: COLOR.HexCodeDustyMauve},
                    {name: "bright-contrast", first: COLOR.HexCodeSapphire, second: COLOR.HexCodeAmberGlow, third: COLOR.HexCodeBrightFern}

                ]
                // currentPalette: firstPalette,
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
    <button @click="currentPalette = (currentPalette + 1) % 4">Change palette: {{ currentPalette }}</button>
    <nav>
        <ul class="nav-menu">
            <li v-for="menu in secondaryMenus" :key="menu.name" :class="menu.name">
                <RouterLink :to=menu.name.toLowerCase() class="router-link">
                    <p class="place-holder-images" :class="menu.name"><!--PlaceHolder image--></p>
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
        background-position: top;
        background-size: contain;
        background-repeat: no-repeat;

        /* padding: 120px 20px 120px 20px; */
    }
    /* Menu style */
    li.Teacher, li.Challenges, li.Sandbox {
        display: flex;
        flex-direction: column;
        border-radius: 7vmin;
        justify-content: space-evenly;
        height: 90%;
    }
    li.Teacher {
        /* background-color: rgba(200, 0, 0, 0.9);  */
        /* --red: #c80000e6;
        background-color: color-mix(in srgb, var(--red), transparent 10%); */
        background-color: color-mix(v-bind('colorPalette[currentPalette]?.first'), transparent 10%);
        /* flex: 1; */ /*not compatible with space-evenly etc*/
        width: 20%;
    }
    li.Challenges {
        /* background-color: rgba(0,0,200,0.9); */
        background-color: color-mix(v-bind('colorPalette[currentPalette]?.second'), transparent 10%);
        /* flex: 2 2 0; */ /*not compatible with space-evenly etc*/
        width: 30%;
    }
    li.Sandbox {
        /* background-color: rgba(0,200,0,0.9); */
        background-color: color-mix(v-bind('colorPalette[currentPalette]?.third'), transparent 10%);
        /* flex : 1; */ /*not compatible with space-evenly etc*/
        width: 20%;
    }
    .router-link {
        margin: 30% 10% 30% 10%;
        transition-duration: 0.2s;
    }
    .router-link:not(:hover):not(:visited) {
        color:rgb(252, 252, 252);
    }
    .router-link:visited {
        color:rgb(102, 252, 252);
    }
    .router-link:hover {
        color:rgb(202, 202, 202);
        background-color: rgb(76, 175, 80); /* Green */
    }

    p.Teacher {
        background-image: url(src/assets/graduation-hat.png);
    }
    p.Challenges {
        background-image: url(src/assets/online-course.png);
    }
    p.Sandbox {
        background-image: url(src/assets/student-bag.png);
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