var dayjs = require('dayjs')
var duration = require('dayjs/plugin/duration')
var localization = require('dayjs/locale/fr')

dayjs.extend(duration)
dayjs.locale(localization)

export default dayjs
