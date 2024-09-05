const fs = require('fs');

function loadInovoiceData() {
    let dataJson = fs.readFileSync('data.json', 'utf-8');

    data = JSON.parse(dataJson);
    return data;
}


function calculateInvoicing() {
    const monthlyInvoice = loadInovoiceData();

    const billingDays = monthlyInvoice.filter(d => d.valor > 0);

    let lowerRevenueValue = Infinity;
    let lowerRevenueDay;
    let higherRevenueValue = 0;
    let higherRevenueDay;
    let sum = 0;

    for (let day of billingDays) {
        sum += day.valor;

        if (higherRevenueValue < day.valor) {
            higherRevenueValue = day.valor;
            higherRevenueDay = day.dia;
        }

        if (lowerRevenueValue > day.valor) {
            lowerRevenueValue = day.valor;
            lowerRevenueDay = day.dia;
        }
    }

    let averageRevenue = sum/billingDays.length;

    const daysAboveAverage = billingDays.filter(day => day.valor > averageRevenue).length;

    console.log(`Menor faturamento foi dia: ${higherRevenueDay} - R$ ${higherRevenueValue.toFixed(2)} `);
    console.log(`Maior faturamento foi dia: ${lowerRevenueDay} - R$ ${lowerRevenueValue.toFixed(2)} `);
    console.log(`Número de dias com faturamento acima da média: ${daysAboveAverage}`);
}

calculateInvoicing();