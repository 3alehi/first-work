let product = [
    {name:"apple" , price:5 , tedad:3,img:"./apple.jpg"},
    {name:"bnana" , price:56 , tedad:100 ,img:'./bnana.png'},
    {name:"orang" , price:15 , tedad:2, img:'./orang.jpg'},
    {name:'btc' , price:98 , tedad: 9 , img:'./btc.jpg' }
    
]
let pp = document.getElementById('pp')

let nn = []
let i = 0
let cardhome = document.getElementById('card-home')
let card = document.getElementById('card')
let productAsli = document.getElementById('product-asli') 
product.forEach(function(index){
    let div = document.createElement('div')
    div.setAttribute('id' , "product")
    let img = document.createElement('img')
    img.setAttribute('src' , index.img)
    let price = document.createElement('h3')
    price.innerText = "proice :" +index.price
    let name = document.createElement('h1')
    name.innerHTML = index.name
       
       let button = document.createElement('button');
       button.innerHTML = "add to card";
       button.setAttribute('id' , 'add-card')
       let p = document.createElement('p')
       if(index.tedad <1){
        p.innerHTML="not found"
        p.style.color="red"
       }
       else{
        p.innerText = index.tedad
       }
       button.addEventListener('click' , () =>{
         if(index.tedad > 0){
        
            index.tedad--
            p.innerHTML=index.tedad
            card.style.animation="card 0.3s"
            card.addEventListener('animationend' ,()=>{
                card.style.animation=""
                
                
            })
            
           
            let divcard = document.createElement('div')
            let imgcard = document.createElement('img')
            let tedadcard = document.createElement('h3')
            let name1 = document.createElement('h3')
            tedadcard.innerHTML = index.tedad
            imgcard.setAttribute('id' , 'img5')
            divcard.setAttribute('id' , 'm')
            imgcard.setAttribute('src' , index.img)
            divcard.append(imgcard,name1,tedadcard)
            cardhome.append(divcard)
            let jh = index.name
            nn.push(jh)
            i += index.price
            pp.innerHTML="price:$"+ i
            name1.innerText= index.name

        }
   
            




        if (index.tedad == 0) {
            alert("اخرین موجودی")
            p.innerHTML="not found"
            p.style.color="red"
        }
        
    })
    div.append(img,name , price ,p,button)
    
    productAsli.append(div)
})



