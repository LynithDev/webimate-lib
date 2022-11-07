export const parseCSSTime = (value: string): number => (
    value.indexOf('ms') > -1
        ? parseFloat(value.replace('ms', ''))
        : parseFloat(value.replace('s', '')) * 1000
);

const getClassNameWithNumber = (classList: string, className: string): number => parseInt(classList.split(className)[1]) || 0;
export const getDelay = (classList: string): number => getClassNameWithNumber(classList, 'delay=');
export const getQueueIndex = (classList: string): number => getClassNameWithNumber(classList, 'queue=');
