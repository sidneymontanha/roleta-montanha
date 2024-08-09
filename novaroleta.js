const roleta = document.querySelector('img#roleta')
const wheel = document.querySelector('audio')
const inpt = document.querySelector('.valor')
const res = document.querySelector('.RES')
const video= document.querySelector('.esplo')
const sold = document.querySelector('#valor')
const acumulado = document.querySelector('#acumolo')

roleta.addEventListener('click', girar)




function girar(){

    if (sold.value < 1){
        res.innerHTML = 'não tem um valor de aposta, favor colocar credito'
    }else{

        let acum = Number(acumulado.value)
        acum = acum + 1
        //console.log(acum)
        acumulado.value = acum
        let rand = Math.random() * 7200
        //console.log(rand)
        calcular(rand)
        function calcular(rand){
            res.innerHTML = ''
            valor = rand/360
            valor = (valor - parseInt(valor.toString().split('.')[0])) * 360
            //console.log(valor)
 
            roleta.style.transform = 'rotate('+ rand+'deg)'
            
                wheel.play()
        
            setTimeout(() =>{
            
            if(valor > 0 && valor <= 22.5){
                res.innerHTML = 'PARABENS VOCE GANHOU MIL REAIS'    
            }else if(valor > 22.5 && valor <= 45){
                res.innerHTML = 'OPSS VOCE PERDEU TUDO'
                  
            }else if( valor > 45 && valor <=67.5){
                res.innerHTML = 'PARABENS VOCE GANHOU UM REAL'
                
            }else if(valor > 67.5 && valor <= 90){
                res.innerHTML = 'VOCE TEM MAIS UMA CHANCE GIRE NOVAMENTE'
                
            }else if(valor > 90 && valor <= 112.5){
                res.innerHTML = 'PARABENS VOCE GANHOU QUINHENTOS REAIS'
                
            }else if(valor > 112.5 && valor <= 135){
                res.innerHTML = 'O!OU VOCE NÃO GANHOU NADA ACERTOU O ZERO'
                
            }else if(valor > 135 && valor <= 157.5){
                res.innerHTML = 'PARABENS VOCE GANHOU DEZ REAIS'
                
            }else if(valor > 157.5 && valor <= 180){
                res.innerHTML = 'NÃO FOI DESSA VEZ MAIS NÃO DESISTA'
                
            }else if(valor > 180 && valor <= 202.8){
                res.innerHTML = 'VOCE GANHOU DUZENTOS E CINQUENTA REAIS'
                
            }else if(valor > 202.8 && valor <= 225){
                res.innerHTML = 'AQUI VOCE PODE DOBAR O VALOR DO SEU PREMIO'
                
            }else if(valor > 225 && valor <= 247.5){
                res.innerHTML = 'VOCE GANHOU CEM REAIS'
                
            }else if(valor > 247.5 && valor <= 270){
                res.innerHTML = 'QUE LEGAL VOCE PODE GIRAR NOVAMENTE'
                
            }else if(valor > 270 && valor <= 292.5){
                res.innerHTML = 'VOCE GANHOU VINTE RREAIS'
                
            }else if(valor > 292.5 && valor <= 315){
                res.innerHTML = 'ZERO, VOCE NÃO GANHOU NADA'
                
            }else if(valor > 315 && valor <= 337.5){
                res.innerHTML = 'VOCE GANHOU CINCO REAIS'
                
            }else if(valor > 337.5 && valor <= 360){
                res.innerHTML = 'OPSS!! VOCE PERDEU TUDO'
                
            }
          
            
        },15500)

      
    }
    

    }
    if(sold.value< 1){
       sold.value = ''
    }else{
        sold.value = sold.value - 1
    }
    
   
}

const loadGame = () =>{
    acumulado.value = 1000
}

loadGame()
 