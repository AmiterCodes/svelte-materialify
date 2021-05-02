<script>
  let klass = '';
  export { klass as class };
  export let style = null;
</script>

<style lang="scss" src="./StepperContent.scss">
</style>

<div class="s-stepper__content {klass}" {style}>
  <div class="s-stepper__wrapper">
    <slot />
  </div>
</div>
