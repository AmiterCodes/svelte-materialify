<script>
  let klass = '';
  export { klass as class };
  export let style = null;
  /** Places the labels beneath the step */
  export let altLabels = false;
  /** Allow user to jump to any step */
  export let nonLinear = false;
  /** The designated model value for the component. */
  export let value;
  /** Display steps vertically */
  export let vertical = false;

  const isBooted = false;
</script>

<style lang="scss" src="./Stepper.scss">
</style>

<div
  class="s-stepper {klass}"
  {style}
  class:alt-labels={altLabels}
  class:non-linear={nonLinear}
  class:is-booted={isBooted}
  class:vertical>
  <slot />
</div>
