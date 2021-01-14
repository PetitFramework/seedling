import Vue from 'vue'
import ResizeObserver from 'resize-observer-polyfill'
import { debounce } from '@/utils'

let resizeObserver

const createInstance = (element, action) => {
    if (!resizeObserver) {
        resizeObserver = new ResizeObserver(debounce(500, function (entries) {
            for (const entry of entries) {
                if (element === entry.target) action(entry)
            }
        }))
    }
}

Vue.prototype.$resize = {
    observer: (element, action = () => {}) => {
        createInstance(element, action)
        if (resizeObserver) resizeObserver.observe(element)
    },
    unobserver: (element) => {
        if (resizeObserver) resizeObserver.unobserve(element)
    },
    disconnect: () => {
        if (resizeObserver) resizeObserver.disconnect()
    }
}
