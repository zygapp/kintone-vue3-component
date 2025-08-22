interface SpinnerOptions {
    text?: string;
}
export declare class Spinner {
    private options;
    constructor(options?: SpinnerOptions);
    open(text?: string): void;
    close(): void;
    update(text: string): void;
    isOpen(): boolean;
}
export declare const useSpinner: () => {
    spinnerState: {
        readonly isVisible: boolean;
        readonly text: string;
    };
    createSpinner: (options?: SpinnerOptions) => Spinner;
};
export declare const defaultSpinner: Spinner;
export declare const showSpinner: (text?: string) => Spinner;
export declare const hideSpinner: () => void;
export {};
