/* El peso de cada producto es en gramos*/
/*El precio en euros*/
/*El espacio en GB*/

db.ventainformática.drop();
db.ventainformática.insertMany([
    {
        _id:01,
        elementos:[
            {
                producto: "móvil",
                marca: "iphone 12",
                precio_de_venta: 900,
                precio_de_coste: 313,
                unidades_vendidas: 20,
                disponible: true,
                otras_características:{
                    color:["negro","blanco","gris","rojo","morado"],
                    espacio: [512,128,64],
                    peso: 162,
                }
            },
            {
                producto:"portátil",
                marca:"hp",
                precio_de_venta: 800,
                precio_de_coste: 320,
                unidades_vendidas:10,
                disponible: true,
                otras_características:{
                    color:["gris","negro"],
                    espacio:[1000,512],
                    peso: 1500,
                }
            },
            {
                producto:"tablet",
                marca:"Apple iPad Pro",
                precio_de_venta: 1178,
                precio_de_coste: 500,
                unidades_vendidas:15,
                disponible: true,
                otras_características:{
                    color:["gris","negro","blanco"],
                    espacio: [512,128,],
                    peso: 500,
                } 
            },
        ],
        cliente:{
            nombre:"Alberto Brito",
            telefono:"677253645"
        },
        Fecha_venta:  new Date("2020-04-01"),
        Empresa_vendedora:"Hipercor",
        Vendedor: "Miguel Reyes"
        
    },
    {
        _id:02,
        elementos:[
            {
                producto:"impresora",
                marca:"HP Envy Inspire 7221e",
                precio_de_venta:139,
                precio_de_coste:50,
                unidades_vendidas:40,
                disponible:false,
                otras_características:{
                    color:["blanco","gris"],
                    espacio:256,
                    peso: 6900

                }
            },
            {
                producto:"eBooks",
                marca:"eReader",
                precio_de_venta:90,
                precio_de_coste:20,
                unidades_vendidas:60,
                disponible: true,
                otras_características:{
                    color:["blanco","negro"],
                    espacio:8,
                    peso:174
                }
            },
            {
                producto:"pc sobremesa",
                marca:"eReader",
                precio_de_venta:829,
                precio_de_coste:300,
                unidades_vendidas:10,
                disponible: true,
                otras_características:{
                    color:["negro","gris"],
                    espacio:[1000,512],
                    peso:12000
                }
            },
        ],
        cliente:{
            nombre:"Pablo Jaramago",
            telefono:"672225697"
        },
        Fecha_venta: new Date("2021-05-04"),
        Empresa_vendedora:"corte inglés",
        Vendedor: "Miguel Reyes"
    },
    {
        _id:03,
        elementos:[
            {
                producto:"eBooks",
                marca:"eReader Kobo",
                precio_de_venta:140,
                precio_de_coste:50,
                unidades_vendidas:10,
                disponible: true,
                otras_características:{
                    color:["blanco","negro"],
                    espacio:8,
                    peso: 6900

                }
            },
            {
                producto:"móvil",
                marca:"iphone 13 pro max",
                precio_de_venta:1500,
                precio_de_coste:500,
                unidades_vendidas:200,
                disponible: false,
                otras_características:{
                    color:["negro","blanco","gris","rojo","morado"],
                    espacio:[1000,512,256,128],
                    peso:238
                }
            },
            {
                producto:"portátil",
                marca:"MacBook Pro",
                precio_de_venta:2249,
                precio_de_coste:600,
                unidades_vendidas:50,
                disponible: false,
                otras_características:{
                    color:["negro","gris espacial","blanco"],
                    espacio:[1000,512],
                    peso:1600
                }
            },
        ],
        cliente:{
            nombre:"Antonio Recio",
            telefono:"654445687"
        },
        Fecha_venta: new Date("2022-01-07"),
        Empresa_vendedora:"App informática",
        Vendedor: "Pepe Guerra"
    },
    {
        _id:04,
        elementos:[
            {
                producto: "móvil",
                marca: "iphone 11",
                precio_de_venta: 859,
                precio_de_coste: 250,
                unidades_vendidas: 100,
                disponible: true,
                otras_características:{
                    color:["negro","blanco","gris","rojo","morado","amarillo","verde"],
                    espacio: [512,256,128],
                    peso: 194,
                }
            },
            {
                producto:"pc sobremesa",
                marca:"acer",
                precio_de_venta: 615,
                precio_de_coste: 200,
                unidades_vendidas:10,
                disponible: false,
                otras_características:{
                    color:["gris","negro"],
                    espacio:[2000,1000,512],
                    peso: 4800,
                }
            },
            {
                producto:"impresora",
                marca:"Brother MFC",
                precio_de_venta: 196,
                precio_de_coste: 90,
                unidades_vendidas:15,
                disponible: true,
                otras_características:{
                    color:["gris","negro"],
                    espacio: 64,
                    peso: 11800,
                } 
            },
        ],
        cliente:{
            nombre:"Enrique Pastor",
            telefono:"666656585"
        },
        Fecha_venta:  new Date("2020-04-01"),
        Empresa_vendedora:"Back Market",
        Vendedor: "Pepe Guerra"
        
    },
    {
        _id:05,
        elementos:[
            {
                producto: "pc sobremesa",
                marca: "lenovo",
                precio_de_venta: 649,
                precio_de_coste: 200,
                unidades_vendidas: 10,
                disponible: true,
                otras_características:{
                    color:["negro","blanco","gris"],
                    espacio: [2000,1000,512],
                    peso: 5400,
                }
            },
            {
                producto:"tablet",
                marca:"Apple iPad Pro",
                precio_de_venta: 1178,
                precio_de_coste: 500,
                unidades_vendidas:15,
                disponible: true,
                otras_características:{
                    color:["gris","negro","blanco"],
                    espacio: [512,128,],
                    peso: 500,
                } 
            },
            {
                producto:"eBooks",
                marca:"eReader Kobo",
                precio_de_venta:140,
                precio_de_coste:50,
                unidades_vendidas:10,
                disponible: true,
                otras_características:{
                    color:["blanco","negro"],
                    espacio:8,
                    peso: 6900

                } 
            },
        ],
        cliente:{
            nombre:"Jesé Rodríguez",
            telefono:"675846824"
        },
        Fecha_venta:  new Date("2020-06-15"),
        Empresa_vendedora:"Media Markt",
        Vendedor: "David Aragon"
        
    },
    {
        _id:06,
        elementos:[
            {
                producto:"pc sobremesa",
                marca:"eReader",
                precio_de_venta:829,
                precio_de_coste:300,
                unidades_vendidas:10,
                disponible: true,
                otras_características:{
                    color:["negro","gris"],
                    espacio:[2000,1000,512],
                    peso:12000
                }
            },
            {
                producto:"portátil",
                marca:"MacBook Pro",
                precio_de_venta:2249,
                precio_de_coste:600,
                unidades_vendidas:50,
                disponible: false,
                otras_características:{
                    color:["negro","gris espacial","blanco"],
                    espacio:[1000,512],
                    peso:1600
                } 
            },
        ],
        cliente:{
            nombre:"Manuel Aguilar",
            telefono:"672589456"
        },
        Fecha_venta:  new Date("2021-02-01"),
        Empresa_vendedora:"PcComponentes",
        Vendedor: "David Aragon"
        
    },
    {
        _id:07,
        elementos:[
            {
                producto:"móvil",
                marca:"iphone 13 pro",
                precio_de_venta:1250,
                precio_de_coste:400,
                unidades_vendidas:150,
                disponible: true,
                otras_características:{
                    color:["negro","blanco","gris","rojo","morado"],
                    espacio: [512,256,128],
                    peso:200
                }
            },
            {
                producto:"portátil",
                marca:"Predator",
                precio_de_venta:2249,
                precio_de_coste:600,
                unidades_vendidas:50,
                disponible: false,
                otras_características:{
                    color:["negro","gris espacial","blanco"],
                    espacio:[1000,512],
                    peso:1600
                } 
            },
            {
                producto: "pc sobremesa",
                marca: "lenovo",
                precio_de_venta: 649,
                precio_de_coste: 200,
                unidades_vendidas: 10,
                disponible: true,
                otras_características:{
                    color:["negro","blanco","gris"],
                    espacio: [2000,1000,512],
                    peso: 5400,
                }
            },
            {
                producto:"tablet",
                marca:"Apple iPad Pro",
                precio_de_venta: 1178,
                precio_de_coste: 500,
                unidades_vendidas:15,
                disponible: true,
                otras_características:{
                    color:["gris","negro","blanco"],
                    espacio: [512,128,],
                    peso: 500,
                } 
            },
            {
                producto:"eBooks",
                marca:"eReader Kobo",
                precio_de_venta:140,
                precio_de_coste:50,
                unidades_vendidas:10,
                disponible: true,
                otras_características:{
                    color:["blanco","negro"],
                    espacio:8,
                    peso: 6900

                } 
            },
        ],
        cliente:{
            nombre:"Diego Carlos",
            telefono:"654852132"
        },
        Fecha_venta:  new Date("2021-08-15"),
        Empresa_vendedora:"Media Markt",
        Vendedor: "Dani García"    
    },
])