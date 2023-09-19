<script setup lang="ts">
import Services from './ServiceBanner.vue';
</script>

<template>
    <div class="bannerTotal">
        <div class="banner">
            <div class="banner-content">
                <h1>Seja bem vindo ao nosso site</h1>
                <p>Conheça nossos produtos e serviços</p>
                <button>Conheça</button>
            </div>
        </div>
        <Services />
    </div>
</template>

<style>
.banner-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.banner-content h1 {
    font-size: 3em;
    font-weight: 700;
    color: #fff;
}

.banner-content p {
    font-size: 1.5em;
    font-weight: 400;
    color: #fff;
}

.banner-content button {
    padding: 0.5em 1em;
    border: none;
    border-radius: 5px;
    background-color: #646cff;
    color: #fff;
    font-size: 1.2em;
    font-weight: 700;
    cursor: pointer;
}

.banner-content button:hover {
    background-color: #42b883;
}

.banner {
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-image: url('/banner.jpg'); */
    background-size: cover;
    background-position: center;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1;
}

.bannerTotal {
    position: relative;
    background-color: darkgreen;
    height: 100vh;
}

@media (max-width: 860px) {
    .banner-content h1 {
        font-size: 2em;
    }

    .banner-content p {
        font-size: 1em;
    }

    .banner-content button {
        font-size: 1em;
    }

    .bannerTotal {
        height: 100%;
    }
}
</style>
