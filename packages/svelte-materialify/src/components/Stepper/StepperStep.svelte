<script>
  import Ripple from '../../actions/Ripple';
  import Icon from '../Icon';
  import completePath from '../../internal/Icons/complete';
  import errorPath from '../../internal/Icons/error';
  import editPath from '../../internal/Icons/editable';

  let klass = '';
  export { klass as class };
  export let style = null;
  export let step;
  export let complete = false;
  export let editable = false;
  export let rules = [];
  let hasError = false;

  const error = rules.reduce((acc, rule) => {
    if (!rule) return false;
    if (rule instanceof String) return rule;

    const result = rule();

    if (!result) return false;
    if (result instanceof String) return result;

    return acc;
  }, true);

  hasError = error === false || error instanceof String;
</script>

<style lang="scss" src="./StepperStep.scss">
</style>

<div class="s-stepper__step {klass}" {style} use:Ripple={editable}>
  {#if hasError}
    <slot name="errorIcon">
      <Icon path={errorPath} />
    </slot>
  {:else if complete}
    {#if editable}
      <slot name="editableIcon">
        <Icon path={editPath} />
      </slot>
    {:else}
      <slot name="completeIcon">
        <Icon path={completePath} />
      </slot>
    {/if}
  {:else}
    step
  {/if}
  <slot name="errorIcon" />
</div>
