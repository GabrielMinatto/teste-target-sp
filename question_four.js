const sp = 67836.43;
const rj = 36678.66;
const mg = 29229.88;
const es = 27165.48;
const outros = 19849.53;

const TotalRevenue = sp + rj + mg + es + outros;

const percentualSP = (sp / TotalRevenue) * 100;
const percentualRJ = (rj / TotalRevenue) * 100;
const percentualMG = (mg / TotalRevenue) * 100;
const percentualES = (es / TotalRevenue) * 100;
const percentualOutros = (outros / TotalRevenue) * 100;

console.log("SP: " + percentualSP.toFixed(2) + "%");
console.log("RJ: " + percentualRJ.toFixed(2) + "%");
console.log("MG: " + percentualMG.toFixed(2) + "%");
console.log("ES: " + percentualES.toFixed(2) + "%");
console.log("Outros: " + percentualOutros.toFixed(2) + "%");
