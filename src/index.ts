import './sass/index.scss';
import { observer, queue } from './script/observer';

(() => {
    document.querySelectorAll('.animate').forEach((element) => {
        observer.observe(element);
    });

    window.webimate = {
        getObserver: () => observer,
        getQueue: () => queue,
        getElementsByAnimation: (animation) => Array.prototype.slice.call(document.querySelectorAll(`.animation.${animation}`)),
        observe: (...entries) => entries.forEach((entry) => observer.observe(entry)),
        unobserve: (...entries) => entries.forEach((entry) => observer.unobserve(entry)),
    };
})();
