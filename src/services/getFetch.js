// Defino array con los diferentes productos
const items = [
    {id: '1', marca: 'Ford', modelo: 'Fiesta', año:'2014', precio: '$1.000.000', categoria: 'autos', imagen:'https://www.km77.com/images/medium/7/7/3/5/100.307735.jpg'},
    {id: '2', marca: 'Ford', modelo: 'Focus', año:'2020', precio: '$2.000.000', categoria: 'autos', imagen:'https://www.ukcarline.co.uk/uploads/pages/Ford%20Focus%20Header.png'},
    {id: '3', marca: 'Volkswagen', modelo: 'Golf', año:'2003', precio: '$1.200.000', categoria: 'autos', imagen:'https://volkswagen.carone.com.ar/wp-content/uploads/sites/3/2018/03/NUEVO-GOLF-1.jpg'},
    {id: '4', marca: 'Volkswagen', modelo: 'Fox', año:'2004', precio: '$950.000', categoria: 'autos', imagen:'https://pictures.topspeed.com/IMG/crop/201611/volkswagen-e-golf-un-3_800x0w.jpg'},
    {id: '5', marca: 'Dodge', modelo: 'Ram', año:'2011', precio: '$2.800.000', categoria: 'camionetas', imagen:'https://di-uploads-pod28.dealerinspire.com/melloydodgeram/uploads/2020/11/2021-Ram-3500x800sub100k-1.jpg'},
    {id: '6', marca: 'Ford', modelo: 'Ranger', año:'2020', precio: '$3.900.000', categoria: 'camionetas', imagen:'https://teflteslmexico.com/wp-content/uploads/2019/03/Ford-Ranger-2022-siguiente-generacion.jpg'}    
]

// Cargo los valores del array
export const getFetch = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve(items)
    },2000)                 //Quiero que tarde 2 segundos
})
