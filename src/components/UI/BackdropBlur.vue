<template><div class="backdrop"></div></template>

<style lang="scss">
.backdrop {
  transition: 300ms ease;
  z-index: 50;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(39, 39, 39, 0.363);
  backdrop-filter: blur(2px) grayscale(75%);
}
</style>
