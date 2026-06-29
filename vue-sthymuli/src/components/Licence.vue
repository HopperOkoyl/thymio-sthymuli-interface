<script lang="ts">
    export default {
        data() {
            return {
                flaticons: [
                    {url: "https://www.flaticon.com/free-icons/france", title: "france icons", attribText: 'France icons created by Freepik - Flaticon'},
                    {url: "https://www.flaticon.com/free-icons/united-kingdom", title:"united kingdom icons", attribText: 'United kingdom icons created by Freepik - Flaticon'},
                    {url: "https://www.flaticon.com/free-icons/spain", title: "spain icons", attribText: 'Spain icons created by Freepik - Flaticon'},
                    {url: "https://www.flaticon.com/free-icons/germany", title: "germany icons", attribText: 'Germany icons created by Freepik - Flaticon'},
                    {url: "https://www.flaticon.com/free-icons/italy", title: "italy icons", attribText: 'Italy icons created by Freepik - Flaticon'},
                    {url: "https://www.flaticon.com/free-icons/dropdown-arrow", title: "dropdown arrow icons", attribText: 'Dropdown arrow icons created by Catalin Fertu - Flaticon'},
                    {url: "https://www.flaticon.com/free-icons/italian", title: "italian icons", attribText: 'Italian icons created by Freepik - Flaticon'},
                    {url: "https://www.flaticon.com/free-icons/crown", title: "crown icons", attribText: 'Crown icons created by Freepik - Flaticon'},
                    {url: "https://www.flaticon.com/free-icons/collaboration", title: "collaboration icons", attribText: 'Collaboration icons created by Freepik - Flaticon'},
                    {url: "https://www.flaticon.com/free-icons/sandbox", title: "sandbox icons", attribText: 'Sandbox icons created by juicy_fish - Flaticon'},
                    {url: "https://www.flaticon.com/free-icons/crown", title: "crown icons", attribText: 'Crown icons created by Freepik - Flaticon'},
                    {url: "https://www.flaticon.com/free-icons/sparkle", title:"sparkle icons", attribText: 'Sparkle icons created by Muhammad_Usman - Flaticon'},
                ],
                nounprojectIcons: [
                    {attribText: 'setting by SuperNdre from', url: "https://thenounproject.com/icon/setting-4547794/", target: "_blank", title: "setting Icons", licence: '(CC BY 3.0)'},
                    {attribText: 'House by Ashok from', url: "https://thenounproject.com/icon/house-6718391/", target: "_blank", title: "House Icons", licence: '(CC BY 3.0)'},
                    {attribText: 'House by Suryaman from', url: "https://thenounproject.com/icon/house-5431675/", target: "_blank", title:"House Icons", licence: '(CC BY 3.0)'},
                    {attribText: 'play by Numero Uno from', url: "https://thenounproject.com/browse/icons/term/play/", target: "_blank", title: "play Icons", licence: '(CC BY 3.0)'},
                    {attribText: 'more by Funky from', url: "https://thenounproject.com/browse/icons/term/more/", target: "_blank", title: "more Icons", licence: '(CC BY 3.0)'},
                    {attribText: 'led light by gravisio from', url: "https://thenounproject.com/browse/icons/term/led-light/", target: "_blank", title: "led light Icons", licence: '(CC BY 3.0)'},
                    {attribText: '5x tap by Saeful Muslim from', url: "https://thenounproject.com/browse/icons/term/5x-tap/", target: "_blank", title: "5x tap Icons", licence: '(CC BY 3.0)'},
                    {attribText: 'tap by ridhobadal from', url: "https://thenounproject.com/browse/icons/term/tap/", target: "_blank", title: "tap Icons", licence: '(CC BY 3.0)'},
                    {attribText: 'change by Tithy from', url: "https://thenounproject.com/browse/icons/term/change/", target: "_blank", title: "change Icons", licence: '(CC BY 3.0)'},
                ],
                pexels: [
                    {name: 'Abstract colorful paint', author: 'Steve'},
                    {name: 'Building blocks', author: 'Julia Bataeva'},
                    {name: 'Drawing white on black, school math', author: 'Chenspec'},
                    {name: 'Imperfect drawing plants', author: 'Anhl202'},
                    {name: 'Repeated grey and orange pattern', author: 'jimette'},
                    {name: 'Repeated black and white flower pattern', author: 'jimette'},
                    {name: 'Mandala flower', author: 'Mandala world'},
                    {name: 'Puzzle', author: 'Alexas Fotos'},


                ]
            }
        }
    }
</script>

<template>
    <div class="external-container">
        <h1>Licence & Credits</h1>
            <h2>Licence</h2>
                <p>...</p>
            <h2>Credits</h2>
                <h3>Icons</h3>
                    <h4>The Noun Project</h4>
                        <p>
                            <ul>
                                <li v-for="nounpIcon in nounprojectIcons">{{nounpIcon.attribText}} <a :href="nounpIcon.url" :target="nounpIcon.target" :title="nounpIcon.title">Noun Project</a> {{ nounpIcon.licence }} </li>
                            </ul>
                            </p>
                    <h4>Flaticons</h4>
                        <p>
                            <ul>
                                <li v-for="flaticon in flaticons"><a :href="flaticon.url" :title="flaticon.title">{{ flaticon.attribText }}</a></li>
                            </ul>
                        </p>
                <h3>Background images</h3>
                    <h4>Pexels</h4>
                    <p>
                        <ul>
                            <li v-for="bg in pexels"> {{ bg.name }} by {{ bg.author }} <a href="https://www.pexels.com/license/">(Free from Pexels)</a></li>
                        </ul>
                    </p>
                <h3>Other</h3>
                    <p>...</p>
    </div>
</template>


<style scoped>
    .external-container {
        background-color: color-mix(#fcfcfc, transparent 10%);
    }
</style>