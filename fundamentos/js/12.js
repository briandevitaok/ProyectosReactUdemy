

// const IsLogin = true 


// IsLogin ? 
//     console.log('Usuario autenticado') : 
//     console.log('Usuario no autenticado')

const saldo = 700
const pagar = 800
const paypal = true

saldo > pagar ?
 console.log('Puede comprar el curso') :
 paypal ? console.log('Puedes pagar con paypal'):
 console.log('No puedes pagar con paypal')
 console.log('No puede comprar el curso')