<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { RouterLink } from 'vue-router'
</script>

<script>
export default{
    methods: {
        dayNight() {
            if (localStorage.getItem("user-theme") === "dark") {
                localStorage.setItem("user-theme", "light");
            } else {
                localStorage.setItem("user-theme", "dark");
            }
            document.documentElement.className = localStorage.getItem("user-theme");
            console.log(localStorage.getItem("user-theme"));
        }
    }
}
</script>

<template>
    <div id="menu">
        <div style="position:absolute; top: 8%; width: 100%; text-align: center;">
            
            <RouterLink to="/" class="menutext"> Home </RouterLink>
            <p class="menutext" onclick="location.href='../projects'"> Projects </p>
            <p class="menutext" onclick="location.href='../about'"> About </p>

        </div>

        <div style="position:absolute; bottom:3%; width: 100%; text-align: center;">
            <FontAwesomeIcon :icon="faGithub" href="https://github.com/josephinel6" size="lg"/>
            <!-- <a href="https://github.com/josephinel6" class="fa fa-github fa-2x" style="text-decoration: none;"></a> -->
        </div>
    </div>
    <div id="topbar">
        <FontAwesomeIcon :icon="faSun" @click="dayNight()" id="day-night" size="lg"/>
    </div>
</template>

<style scoped>

h1,
h2,
h3 {
    color: var(--color-gen-text);
}

#menu {
    height: 100%;
    width: 20%;
    position: absolute;
    z-index: 1;
    top: 0;
    bottom: 0;
    left: 0;
    background-color: var(--color-bg);
}

#topbar {
    width: 100%;
    height: 8%;
    background-color: var(--color-bg);
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    vertical-align:middle;
    justify-content: right;
    align-items: center;
}

.menutext {
    color: var(--color-menu-text);
    font-family: sans-serif;
    font-size: 20px;
}

.menutext:hover {
    cursor: pointer;
    color: var(--color-menu-hover);
}

.fa-github {
    color: var(--color-menu-text);
}

.fa-github:hover {
    color: var(--color-menu-hover);
    cursor: pointer;
}
#window {
    background-color: var(--color-page-bg);
    position: absolute;
    height: 92%;
    overflow: hidden;
    width: 80%;
    right: 0;
    bottom: 0;
}

.tabcontent {
    height: 100%;
    width: 78vw;
    position: relative;
    overflow-y: scroll;
    padding: 2.5%;
    /* margin-top: 2.5%;
    margin-left: 2.5%; */
}


#day-night {
    color: var(--color-menu-text);
    z-index: 2;
    margin-right: 1vw;
}

#day-night:hover {
    cursor: pointer;
    color: var(--color-menu-hover)
}
</style>