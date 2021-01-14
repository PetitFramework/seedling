<template>
    <div class="ve-gallery">
        <div class="ve-gallery__main">
            <PictureDefault
                class="ve-gallery__image"
                :src="images && images[index] ? images[index].src : ''"
            />
        </div>
        <div v-if="images.length && images.length > 1" class="ve-gallery__selector">
            <div
                v-for="(image, i) in images"
                :key="i"
                class="ve-gallery__thumbnail"
                :class="{'is-active' : i === index}"
                @click="setIndex(i)"
            >
                <PictureDefault
                    :src="image.src"
                />
                <div class="ve-gallery__overlay"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import PictureDefault from '@/components/Picture'

    export default {
        components: {
            PictureDefault
        },
        props: {

            images: {
                type: Array,
                default: () => ([])
            }
        },
        data () {
            return {
                index: 0
            }
        },
        methods: {
            setIndex (index) {
                this.index = index
            }
        }
    }
</script>

<style lang="scss">
  .ve-gallery {
    display: grid;

    &__image {
      height: 40vh;
      width: 100%;
      border: none;
    }

    &__image img,
    &__image.ve-picture {
      width: 100%;
      background: white;
      object-fit: contain;
    }

    &__selector {
      padding: 0 5px;
      display: flex;
    }

    &__thumbnail picture,
    &__thumbnail img {
      height: 75px;
      width: 75px;
    }

    &__overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
      background-color: black;
      opacity: 0.5;
      transition: opacity 0.3s ease-in;
    }

    &__thumbnail {
      position: relative;
      border-radius: 5px;
      margin: 0 5px;
      overflow: hidden;

      &.is-active {
        .ve-gallery__overlay {
          opacity: 0;
        }
      }
    }
  }
</style>
