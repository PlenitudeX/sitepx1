<template>
    <div class="services">
        <div class="service-banner">
            <h2>Office 365</h2>
            <p>Com uma assinatura para Microsoft 365, você pode obter: Os aplicativos de produtividade mais recentes, como Microsoft Teams, Word, Excel, PowerPoint, Outlook, OneDrive e muito mais. A possibilidade de instalar em PCs, Macs, tablets e telefones. 1 TB de armazenamento em nuvem do OneDrive</p>
        </div>
        <div class="service-banner">
            <h2>E-commerce</h2>
            <p>E-commerce? O que é? Como Funiona? O que precisa para começar um e-commerce? Venha descobrir como um e-commerce pode melhorar seu negócio</p>
        </div>
        <div class="service-banner">
            <h2>Integração</h2>
            <p>E-commerce? O que é? Como Funiona? O que precisa para começar um e-commerce? Venha descobrir como um e-commerce pode melhorar seu negócio</p>
        </div>
    </div>

</template>

<style>
.services {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    width: 100%;
}

.service-banner {
    background-color: #fff;
    box-shadow: 0 0 2em #646cffaa;
    padding: 10px;
    border-radius: 20px;
    margin: 0 10px;
    width: 30%;
    height: 18rem;
}

.service-banner a {
    margin: 0 1em;
}

.service-banner a:hover {
    color: #646cff;
}

.service-banner h2 {
    font-size: 2em;
    font-weight: 700;
    display: inline;
}

.service-banner p {
    font-size: 17px;
    font-weight: 400;
}

@media screen and (max-width: 860px) {
    .services {
        flex-direction: column;
    }
    .service-banner {
        margin: 10px 50px;
        width: 73%;
        height: 100%;
    }
    .service-banner h2 {
        font-size: 2.5em;
        margin: 0px;
    }
    .service-banner p {
        font-size: 1em;
        margin: 0px;
        padding: 10px;
    }
}

</style>
