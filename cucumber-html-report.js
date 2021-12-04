const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: 'cypress/cucumber-json',
	reportPath: './reports/cucumber-htmlreport.html',
	metadata:{
        browser: {
            name: 'chrome',
            version: '96'
        },
        device: 'Local test machine',
        platform: {
            name: 'win',
            version: '11'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Cypress Automation Testing'},
            {label: 'Release', value: '1.2.3'},
            {label: 'Cycle', value: 'B11221.34321'},
            {label: 'Execution Start Time', value: 'Dec 04th 2021, 05:40 PM IST'},
            {label: 'Execution End Time', value: 'Dec 04th 2021, 05:56 PM IST'}
        ]
    }
});