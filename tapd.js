const open = require('open')
const schedule = require('node-schedule')

const [hour, minute] = process.argv.slice(2)

const rule = new schedule.RecurrenceRule()
rule.dayOfWeek = [0, new schedule.Range(1, 5)]
rule.hour = parseInt(hour) || 19
rule.minute = parseInt(minute) || 0
rule.tz = 'Asia/Shanghai'

const job = schedule.scheduleJob(rule, function () {
	open('https://www.tapd.bilibili.co/35612194/prong/stories/stories_list')
})
