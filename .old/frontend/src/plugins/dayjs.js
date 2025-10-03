const dayjs = require('dayjs')
const duration = require('dayjs/plugin/duration')
const localization = require('dayjs/locale/fr')

dayjs.extend(duration)
dayjs.locale(localization)

export default dayjs
