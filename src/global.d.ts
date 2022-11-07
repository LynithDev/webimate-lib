export {};

declare global {
    interface Window {
        webimate: {
            observe: (...entries: HTMLElement[]) => void;
            unobserve: (...entries: HTMLElement[]) => void;
            getElementsByAnimation: (animation: string) => HTMLElement[];
            getQueue: () => [number, Element][];
            getObserver: () => IntersectionObserver;
        }
    }
}
