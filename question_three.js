const fs = require('fs');

function loadInovoiceData() {
    let dataJson = fs.readFileSync('data.json', 'utf-8');

    data = JSON.parse(dataJson);
    return data;
}


function calculateInvoicing() {
    const monthlyInvoice = loadInovoiceData();

    const billingDays = monthlyInvoice.filter(d => d.faturamento > 0);

    let lowerRevenueValue = Infinity;
    let lowerRevenueDay;
    let higherRevenueValue = 0;
    let higherRevenueDay;
    let sum = 0;

    for (let day of billingDays) {
        sum += day.faturamento;

        if (higherRevenueValue < day.faturamento) {
            higherRevenueValue = day.faturamento;
            higherRevenueDay = day.dia;
        }

        if (lowerRevenueValue > day.faturamento) {
            lowerRevenueValue = day.faturamento;
            lowerRevenueDay = day.dia;
        }
    }

    let averageRevenue = sum/billingDays.length;

    const daysAboveAverage = billingDays.filter(day => day.faturamento > averageRevenue).length;

    console.log(`Menor faturamento foi dia: ${higherRevenueDay} - R$ ${higherRevenueValue} `);
    console.log(`Maior faturamento foi dia: ${lowerRevenueDay} - R$ ${lowerRevenueValue} `);
    console.log(`Número de dias com faturamento acima da média: ${daysAboveAverage}`);
}

calculateInvoicing();