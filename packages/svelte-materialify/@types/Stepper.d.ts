import { SvelteComponent } from './shared';

interface StepperProps {
    altLabels: boolean;
    /** Allow user to jump to any step */
    nonLinear: boolean;
    /** The designated model value for the component. */
    value: any;
    /** Display steps vertically */
    vertical: boolean;
    /** class added to the stepper */
    class?: string;
    /** styles added to the stepper */
    style?: string; 
}

declare class Stepper extends SvelteComponent<StepperProps> {}

export default Stepper;
