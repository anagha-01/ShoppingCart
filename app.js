const Express=require('express')
var app=new Express()
var drs=[
    {
        'name':'Women A-line Blue Dress',
        'price':799,
        'des':'Blue,maxi-length,pure cotton dress',
        'pic':'/img/blue-vedic.jpeg'
    },
    {
        'name':'Women A-line Multicolor Dress',
        'price':722,
        'des':'Multi-color,knee-length,Poly Georgette dress',
        'pic':'/img/obshivka.jpeg'
    },
    {
        'name':'Skinny Women Light Blue Jeans',
        'price':555,
        'des':'Women,Western Wear,Printed Jeans',
        'pic':'/img/jeans.jpeg'
    },
    {
        'name':'Women Printed A-line Pink Skirt',
        'price':587,
        'des':'Peach,Women,Western Wear',
        'pic':'/img/skirt.jpeg'
    }
]
var ele=[
    {
        'name':'Realme 3',
        'price':'8,999',
        'des':'Dynamic Black,32 GB ROM,3 GB RAM',
        'pic':'/img/realme3.jpeg'
    },
    {
        'name':'Samsung Galaxy A10',
        'price':'7,999',
        'des':'Blue,32 GB ROM,3 GB RAM',
        'pic':'/img/samsung.jpeg'
    },
    {
        'name':'Oppo A83',
        'price':'8,990',
        'des':'Red,16 GB ROM,3 GB RAM',
        'pic':'/img/oppo.jpeg'
    },
    {
        'name':'Vivo Y91',
        'price':'9,990',
        'des':'Starry Black,32 GB ROM,3 GB RAM',
        'pic':'/img/vivo.jpeg'
    },
    {
        'name':'Honor 8C',
        'price':'8,990',
        'des':'Black,32 GB ROM,4 GB RAM',
        'pic':'/img/honor.jpeg'
    }
]
app.set('view engine','ejs')
app.use(Express.static(__dirname+"/public"))
app.get('/',(req,res)=>{       
    res.render('home',
{
    nav:[{link:'/',title:'Home'},{link:'/fashion',title:'Fashion'},{link:'/elect',title:'Phone'}],
    title:"Library"
}
) 
}
)
app.get('/fashion',(req,res)=>{       
    res.render('fashion',
    {
    nav:[{link:'/',title:'Home'},{link:'/fashion',title:'fashion'},{link:'/elect',title:'Phone'}],
    title:"Library",drs:drs
}
) 
}
)
app.get('/elect',(req,res)=>{       
    res.render('elect',
    {
    nav:[{link:'/',title:'Home'},{link:'/fashion',title:'fashion'},{link:'/elect',title:'Phone'}],
    title:"Library",ele:ele
}
) 
}
)
app.get('/readmore/:id',(req,res)=>{
    const x=req.params.id;       
    res.render('fas',{'drs': drs[x],
    nav:[{link:'/',title:'Home'},{link:'/fashion',title:'fashion'},{link:'/elect',title:'Phone'}],
    title:"Library"
}
) 
}
)
app.get('/more/:id',(req,res)=>{
    const y=req.params.id;       
    res.render('ele',{'ele': ele[y],
    nav:[{link:'/',title:'Home'},{link:'/fashion',title:'fashion'},{link:'/elect',title:'Phone'}],
    title:"Library"
}
) 
}
)
app.listen(process.env.PORT || 3000,()=>{
    console.log("Server is running on http://localhost:3000")
})  