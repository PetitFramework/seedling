import Vue from 'vue'

Vue.directive('click-outside', {
    bind (el, binding) {
        el.clickOutsideEvent = function (event) {
            const { handler, exclude } = binding.value
            if (exclude && exclude.length) {
                for (const className of exclude) {
                    if (event.target.closest(className)) {
                        return
                    }
                }
            }

            if (!(el === event.target || el.contains(event.target))) {
                handler()
            }
        }
        document.body.addEventListener('click', el.clickOutsideEvent)
    },
    unbind (el) {
        document.body.removeEventListener('click', el.clickOutsideEvent)
    }
})
