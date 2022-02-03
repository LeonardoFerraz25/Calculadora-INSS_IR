function calculo() {
let bruto = document.querySelector('input#s1'); 
let resultado = document.querySelector('div#p')
let salario = Number(bruto.value);
let inss = 0;
let ir = 0;

if(salario <= 1556.94){
    inss = salario*0.08;    
}else if(salario > 1556.94 && salario < 2594.92){
    inss = salario*0.09;
}else if(salario > 1594.92 && salario < 5189.82){
    inss = salario*0.11;
}else if(salario > 5189.82){
    inss = 570.88;
} 


let salarioReduzido = (salario - inss);

if(salarioReduzido <= 1903.98){
    ir = 0;    
}else if(salarioReduzido > 1903.99 && salarioReduzido < 2826.65){
    ir = (salarioReduzido*0.075) - 142.80;
}else if(salarioReduzido > 2826.66 && salarioReduzido < 3751.05){
    ir = (salarioReduzido*0.15) - 354.80;
}else if(salarioReduzido > 3751.06 && salarioReduzido < 4664.68){
    ir = (salarioReduzido*0.22) - 636.13;
}else if(salarioReduzido > 4664.68){
    ir = (salarioReduzido*0.27) - 869.36;
}

let salarioLiquido = (salarioReduzido - ir);



resultado.innerHTML = `<h2>Valor do INSS : ${inss} </h2>`;

resultado.innerHTML += `<h2>Valor do IR : ${ir}</h2>`;

resultado.innerHTML += `<h2>Salario Liquido : ${salarioLiquido}</h2>`;

}