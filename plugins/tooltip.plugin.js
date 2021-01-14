import Vue from 'vue'
import tippy from 'tippy.js'

Vue.directive('tooltip', {
    bind (el) {
        el.tooltip = null
    },
    inserted (el, binding) {
        const content = binding.value.content
        const placement = binding.value.placement || 'top'
        const delay = binding.value.delay || 0

        if (content) {
            el.tooltip = tippy(el, {
                content,
                placement,
                delay,
                animation: 'shift-toward-extreme'
            })
        }
    },
    unbind (el) {
        if (el.tooltip) el.tooltip.destroy()
    }
})
