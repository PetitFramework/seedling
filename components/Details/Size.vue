<template>
    <div class="details-size">
        <DetailsMeasure :value="width" icon="arrows-alt-h" />
        <DetailsMeasure :value="height" icon="arrows-alt-v" />
        <DetailsMeasure :value="thickness" icon="grip-lines" />
    </div>
</template>

<script>
    import DetailsMeasure from '@/components/Details/Measure'
    export default {
        components: {
            DetailsMeasure
        },
        props: {
            width: {
                type: [Number, String],
                default: 0
            },
            height: {
                type: [Number, String],
                default: 0
            },
            thickness: {
                type: [Number, String],
                default: 0
            }
        }
    }
</script>

<style lang="scss">
  .details-size {
    background-color: black;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    padding: 10px 0;
    color: white;
  }
</style>
