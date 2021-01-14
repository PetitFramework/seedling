import { mount } from '@vue/test-utils'
import Text from '@/components/Text.vue'

describe('Text', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(Text)
        expect(wrapper.vm).toBeTruthy()
    })
})
