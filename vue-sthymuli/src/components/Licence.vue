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
                    // {url: "https://www.flaticon.com/free-icons/crown", title: "crown icons", attribText: 'Crown icons created by Freepik - Flaticon'},
                ],
                nounprojectIcons: [
                    {attribText: 'setting by SuperNdre from', url: "https://thenounproject.com/icon/setting-4547794/", target: "_blank", title: "setting Icons", licence: '(CC BY 3.0)'},
                    {attribText: 'House by Ashok from', url: "https://thenounproject.com/icon/house-6718391/", target: "_blank", title: "House Icons", licence: '(CC BY 3.0)'},
                    {attribText: 'House by Suryaman from', url: "https://thenounproject.com/icon/house-5431675/", target: "_blank", title:"House Icons", licence: '(CC BY 3.0)'},
                    {attribText: 'play by Numero Uno from', url: "https://thenounproject.com/browse/icons/term/play/", target: "_blank", title: "play Icons", licence: '(CC BY 3.0)'},
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
                    <p></p>
                <h3>Other</h3>
                    <p>...</p>
    </div>
</template>


<style scoped>
    .external-container {
        background-color: color-mix(#fcfcfc, transparent 10%);
    }
</style>