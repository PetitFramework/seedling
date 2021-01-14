<template>
    <TextDefault class="ve-date">
        {{ formatedDate }}
    </TextDefault>
</template>

<script>
    import 'dayjs/locale/es'
    import dayjs from 'dayjs'
    import calendar from 'dayjs/plugin/calendar'
    import relativeTime from 'dayjs/plugin/relativeTime'
    import updateLocale from 'dayjs/plugin/updateLocale'
    import TextDefault from '@/components/Text'

    export default {
        components: {
            TextDefault
        },
        props: {
            date: {
                type: [Number, Date, String],
                default: 0
            },
            showTime: {
                type: Boolean,
                default: false
            },
            format: {
                type: String,
                default: undefined
            }
        },
        computed: {
            formatedDate () {
                this.configDateJs()

                if (!this.format) {
                    const date = dayjs(this.date)

                    if (dayjs().diff(date, 'minute') < 60) {
                        return date.fromNow()
                    } if (dayjs().diff(date, 'hour') < 24) {
                        return date.calendar(dayjs(), {
                            sameDay: '[Hoy,] HH:mm',
                            nextDay: '[Mañana,] HH:mm',
                            nextWeek: 'dddd[,] HH:mm',
                            lastDay: '[Ayer,] HH:mm',
                            lastWeek: '[Último] dddd[,] HH:mm',
                            sameElse: 'DD/MM/YYYY'
                        })
                    } else {
                        return date.format(`DD MMM YY${this.showTime ? ', HH:mm' : ''}`)
                    }
                } else {
                    return dayjs(this.date).format(this.format)
                }
            }
        },
        methods: {
            configDateJs () {
                dayjs.locale('es')
                dayjs.extend(calendar)
                dayjs.extend(relativeTime, {
                    thresholds: [
                        { l: 's', r: 1 },
                        { l: 'ss', r: 59, d: 'second' },
                        { l: 'm', r: 1 },
                        { l: 'mm', r: 59, d: 'minute' },
                        { l: 'h', r: 1 },
                        { l: 'hh', r: 23, d: 'hour' },
                        { l: 'd', r: 1 },
                        { l: 'dd', r: 29, d: 'day' },
                        { l: 'M', r: 1 },
                        { l: 'MM', r: 11, d: 'month' },
                        { l: 'y' },
                        { l: 'yy', d: 'year' }
                    ]
                })
                dayjs.extend(updateLocale)
                dayjs.updateLocale('es', {
                    relativeTime: {
                        future: 'En %s',
                        past: 'Hace %s',
                        s: '%ds',
                        ss: '%ds',
                        m: '%dm',
                        mm: '%dm',
                        h: '%dh',
                        hh: '%dh',
                        d: 'a día',
                        dd: '%d días',
                        M: 'un mes',
                        MM: '%d meses',
                        y: 'un año',
                        yy: '%d años'
                    }
                })
            }
        }
    }
</script>

<style lang="scss">
  //
</style>
