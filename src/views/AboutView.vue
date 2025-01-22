<template>
  <div class="about">
    <div class="pn-title">
      <h1>Sobre</h1>
    </div>
    <div class="pn-about">
      <p>
        Front-end desenvolvido com vue.js v3, baseado no teste para a Amo Sistemas, como um aprimoramento na interface gráfica e efeitos visuais.
      </p>
    </div>
  </div>
</template>

<style>
  .about {
    margin-top: 0.5rem;
    height: 45vh;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .pn-title {
    background-color: #de521f;
    height: 6vh;
    padding: 0 1rem;
    display: flex;
    align-items: center;
  }

  .pn-title h1 {
    padding: 0;
    margin: 0;
    color: #ffffff;
  }

  .pn-about {
    height: 100%;
    padding: 1rem;
  }

  .pn-about {
    color: #575757;
    font-size: 12pt;
  }
</style>
