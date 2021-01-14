<template>
    <picture class="ve-picture" :class="{ 've-picture--has-overlay' : overlay, 've-picture--placeholder' : placeholder }">
        <img v-if="!placeholder" class="ve-picture__img" :src="src" alt="">
        <PlaceholderPicture v-else :ratio-height="22" />
    </picture>
</template>

<script>
    import PlaceholderPicture from '@/components/Placeholders/Picture'

    export default {
        components: {
            PlaceholderPicture
        },
        props: {
            src: {
                type: String,
                default: 'https://source.unsplash.com/random/100x100'
            },
            overlay: {
                type: Boolean,
                default: false
            },
            placeholder: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="scss">
  .ve-picture {
    position: relative;
    background-color: var(--picture-bg-color, var(--color-bg-three));
    overflow: hidden;

    &::before {
      content: "";
      display: block;
      width: 100%;
      padding-top: calc(var(--picture-height-ratio, 9) / var(--picture-width-ratio, 16) * 100%);
    }

    &--placeholder {
      &::before,
      &::after {
        display: none;
      }
    }

    &--has-overlay {
      &::after {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.65) 60%);
        width: 100%;
        height: 100%;
        z-index: 3;
      }
    }

    &__img {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: 2;
      opacity: var(--picture-img-opacity, 1);
    }
  }
</style>
