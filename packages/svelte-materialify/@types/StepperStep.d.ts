import { SvelteComponent } from './shared';

interface StepperStepProps {
    /** class to pass onto step */
    class: string;
    /** style to pass onto step */
    style: string;
    /** Content to display inside step circle */
    step: number | string;
    /** Marks step as complete */
    complete: boolean;
    /** Marks step as editable */
    editable: boolean;
    /** Accepts a mixed array of types function, boolean and string. Functions pass an input value as an argument and must return either true / false or a string containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) false or is a string */
    rules: any[];
}

declare class StepperStep extends SvelteComponent<StepperStepProps> {}

export default StepperStep;
