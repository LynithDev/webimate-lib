import { getDelay, getQueueIndex, parseCSSTime } from './utils';

export const queue: [number, Element][] = [];

export const observer = new IntersectionObserver((entries) => {
    entries.sort((a, b) => getQueueIndex(a.target.className) - getQueueIndex(b.target.className));

    console.log(entries.map((entry) => getQueueIndex(entry.target.className)).join('\n'));

    let queueIndex = 0;
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            if (entry.target.className.indexOf('queue') > -1) {
                queue.push([
                    parseCSSTime(window.getComputedStyle(entry.target).getPropertyValue('transition-duration').split(',')[0]),
                    entry.target,
                ]);

                const duplicatedElements = entries[index - 1] == undefined ? false : getQueueIndex(entry.target.className) == getQueueIndex(entries[index - 1].target.className);
                queueIndex = duplicatedElements ? queueIndex : queueIndex + 1;

                const delay = getDelay(entry.target.className) + getDelay(entry.target.parentElement.className);
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, ((queue[queueIndex - 1][0] * queueIndex) - queue[queueIndex - 1][0]) + delay * (queueIndex - 1));
                return;
            }
            observer.unobserve(entry.target);
            entry.target.classList.add('visible');
        }
    });
});
