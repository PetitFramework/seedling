import Vue from 'vue'
import { createPopper } from '@popperjs/core'
import { isMobile } from '@/services/device.service'

Vue.prototype.$popper = {
    createPopper: (popper, { enableMobile = true, enableDesktop = true } = {}) => {
        const isMobileActive = isMobile(document.body)
        if ((!isMobileActive && enableDesktop) || (enableMobile && isMobileActive)) {
            const gap = isMobileActive ? 0 : 64

            return createPopper(popper.parent, popper.child, Object.assign({
                modifiers: [
                    {
                        name: 'offset',
                        options: {
                            offset: [gap, 0]
                        }
                    }
                ]
            }, popper.options))
        }
    }
}
