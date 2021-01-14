import Vue from 'vue'
import tippy from 'tippy.js'

Vue.prototype.$tippy = {
    createTippy: (params) => {
        return tippy(params.element, params.options)
    }
}
