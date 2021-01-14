import Vue from 'vue'
import PortalVue from 'portal-vue'

Vue.use(PortalVue, {
    portalName: 'teleport', // default: 'portal'
    portalTargetName: 'teleport-target' // default:'portal-target'
})
