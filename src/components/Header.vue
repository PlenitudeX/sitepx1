<template>
    <div class="header">
        <div class="options">
            <a href="/" >
            <img src="/vite.svg" class="logo" alt="Vite logo" />
            </a>
        </div>
        <div class="options">
            <ul class="nav">
                <li>Office 365</li>
                <li>E-commerce</li>
                <li>
                    <span>Integração</span>
                    <submenu-utils>
                        <template #trigger>
                            <ArrowDownIcon class="icons" />
                        </template>
                        <template #content>
                            <ul>
                                <li>Integração</li>
                                <li>Integração</li>
                                <li>Integração</li>
                            </ul>
                        </template>
                    </submenu-utils>
                </li>
            </ul>
        </div>
        <div class="options">
            <a href="/search" >
            <MagnifyingGlassIcon class="icons" />
            </a>
            <a href="/login" >Login</a>
            <button>Cadastrar</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { MagnifyingGlassIcon, ArrowDownIcon } from "@heroicons/vue/20/solid";
</script>

<style>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 0 2em #646cffaa;
    height: 4em;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
}

.icons {
    height: 2em;
    will-change: filter;
    transition: filter 300ms;
}

.options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 10px;
}

.options a {
    margin: 0 1em;
}

.options a:hover {
    color: #646cff;
}

.options button {
    margin: 0 1em;
    padding: 0.5em 1em;
    border: none;
    border-radius: 5px;
    background-color: #646cff;
    color: #fff;
    font-size: 1.2em;
    font-weight: 700;
    cursor: pointer;
}

.options button:hover {
    background-color: #42b883;
}

.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
}

.nav li {
    margin: 0 1em;
    font-size: 1.2em;
    font-weight: 700;
    cursor: pointer;
}

.nav li:hover {
    color: #646cff;
}

</style>
