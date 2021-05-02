<script>
    import {
    } from 'svelte-materialify';
import { Divider } from 'svelte-materialify/@types';
import StepperHeader from 'svelte-materialify/@types/StepperItems';
import Stepper from 'svelte-materialify/src/components/Stepper/Stepper.svelte';
import StepperItems from 'svelte-materialify/src/components/Stepper/StepperItems.svelte';
import StepperStep from 'svelte-materialify/src/components/Stepper/StepperStep.svelte';

    let selected = 1;
</script>
<Stepper>
    <StepperHeader>
        <StepperStep step={1} complete={selected > 1}>

        </StepperStep>
        <Divider />
        <StepperStep step={2} complete={selected > 2}>

        </StepperStep>
        <Divider />
        <StepperStep step={3} complete={selected > 3}>

        </StepperStep>
        <Divider />
    </StepperHeader>
    <StepperItems>

    </StepperItems>
</Stepper>