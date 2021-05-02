import { SvelteComponent } from './shared';

interface StepperContentProps {
    /** Sets step to associate the content to */
    step: number | string;
}

declare class StepperContent extends SvelteComponent<StepperContentProps> {}

export default StepperContent;
