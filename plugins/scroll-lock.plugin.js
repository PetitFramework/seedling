import Vue from 'vue'

let pile = []

const lockScroll = (el, pile = [], elementToRemove) => {
    if (pile.length === 0) return
    unlockScroll(el, elementToRemove)
    el.documentBody.classList.add(pile[pile.length - 1].class)
}

const unlockScroll = (el, elementToRemove = {}) => {
    el.documentBody.classList.remove(elementToRemove.class)
}

Vue.directive('scroll-lock', {
    bind (el) {
        el.documentBody = document.body
    },
    inserted (el, binding) {
        if (binding.value.lock) {
            lockScroll(el)
        }
    },
    componentUpdated (el, binding) {
        if (binding.value.lock) {
            el.elementId = binding.value.id
            pile.push({
                id: binding.value.id,
                class: binding.modifiers.mobile
                    ? 'is-scroll-locked-mobile'
                    : binding.modifiers.desktop
                        ? 'is-scroll-locked-desktop'
                        : 'is-scroll-locked'
            })
        }

        if (!binding.value.lock) {
            el.elementToRemove = pile.find(lock => lock.id === binding.value.id)
            pile = pile.filter(lock => lock.id !== binding.value.id)
        }

        if (pile.length > 0) {
            lockScroll(el, pile, el.elementToRemove)
        } else {
            unlockScroll(el, el.elementToRemove)
        }
    },
    unbind (el) {
        el.documentBody.classList.remove('is-scroll-locked-mobile', 'is-scroll-locked-desktop', 'is-scroll-locked')
        pile = pile.filter(item => item.id !== el.elementId)
    }
})
