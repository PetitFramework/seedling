<template>
    <div class="details-icon">
        <VeIcon class="details-icon__icon" :symbol="icon" /><div>{{ value }}{{ unity }}</div>
    </div>
</template>

<script>
    import VeIcon from '@/components/IconDefault'
    export default {
        components: {
            VeIcon
        },
        props: {
            value: {
                type: [Number, String],
                default: ''
            },
            unity: {
                type: String,
                default: 'cm'
            },
            icon: {
                type: String,
                default: ''
            }
        }
    }
</script>
<style lang="scss">
  .details-icon {
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
    grid-gap: 2px;

    &__icon {
      width: 100%;
      margin: 0 auto;
    }
  }
</style>
