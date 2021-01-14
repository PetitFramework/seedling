<template>
    <div v-click-outside="{ handler: closeGoTo }" class="ve-pagination">
        <template v-if="placeholder">
            <PlaceholderButton size="small" />
            <PlaceholderButton v-if="pagination" size="small" width="3.5em" />
            <PlaceholderButton size="small" />
        </template>
        <template v-else>
            <ButtonDefault
                class="ve-pagination__prev"
                tag="button"
                icon="angle-left"
                :variant="variant"
                :shadow="shadow"
                size="small"
                :class="{ 'is-hidden' : goToIsActive }"
                :disabled="page <= 1"
                @click.native="goTo(page - 1)"
            />
            <div v-if="pagination" class="ve-pagination__current-box">
                <ButtonDefault
                    class="ve-pagination__current"
                    tag="button"
                    :variant="variant"
                    :shadow="shadow"
                    size="small"
                    :text="`${page}/${format(pages)}`"
                    :class="{ 'is-hidden' : goToIsActive }"
                    @click.native="openGoTo"
                />
                <form class="ve-pagination__go-to" :class="{ 'is-active' : goToIsActive }" @submit.prevent="goTo(goToInput)">
                    <InputDefault
                        ref="goTo"
                        v-model="goToInput"
                        type="number"
                        :variant="variant"
                        size="small"
                        :focus="goToIsActive"
                        :shadow="shadow"
                        :min="1"
                        :max="pages"
                        :placeholder="page"
                    />
                    <InputDefault
                        class="ve-pagination__current"
                        tag="button"
                        :variant="variant"
                        :shadow="shadow"
                        size="small"
                        text="Ir"
                        type="submit"
                    />
                </form>
            </div>
            <ButtonDefault
                class="ve-pagination__next"
                tag="button"
                icon="angle-right"
                :variant="variant"
                size="small"
                :class="{ 'is-hidden' : goToIsActive }"
                :disabled="page >= pages"
                :shadow="shadow"
                @click.native="goTo(page + 1)"
            />
        </template>
    </div>
</template>

<script>
    import { nFormatter } from '@/utils'
    import ButtonDefault from '@/components/Button'
    import InputDefault from '@/components/Input'
    import PlaceholderButton from '@/components/Placeholders/Button'

    export default {
        components: {
            ButtonDefault,
            InputDefault,
            PlaceholderButton
        },
        props: {
            pagination: {
                type: Boolean,
                default: true
            },
            variant: {
                type: String,
                default: undefined
            },
            page: {
                type: [Number, String, Boolean],
                default: false
            },
            pages: {
                type: [Number, String, Boolean],
                default: false
            },
            placeholder: {
                type: Boolean,
                default: false
            },
            shadow: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                goToIsActive: false,
                goToInput: this.page
            }
        },
        watch: {
            page (newValue, oldValue) {
                this.goToInput = newValue
            }
        },
        methods: {
            closeGoTo () {
                this.goToIsActive = false
            },
            openGoTo () {
                this.goToIsActive = true
            },
            goTo (page) {
                this.$emit('goTo', page)
                if (this.goToIsActive) this.closeGoTo()
            },
            format (num) {
                return nFormatter(num, 1)
            }
        }
    }
</script>

<style lang="scss">
  .ve-pagination {
    display: grid;
    grid-auto-flow: column;
    grid-gap: em(8px);
    position: relative;

    &__current-box {
      //
    }

    &__current,
    &__next,
    &__prev {
      &.is-hidden {
        visibility: hidden;
      }
    }

    &__go-to {
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      display: grid;
      align-items: center;
      grid-template-columns: 1fr auto;
      grid-gap: em(8px);

      &:not(.is-active) {
        display: none;
      }
    }
  }
</style>
