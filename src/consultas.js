/*Ventas realizadas por cada vendedor*/
db.ventainformática.aggregate([
    {
      $group: {
        _id: "$Vendedor",
        numberOfSale: {
          $count: {},
        }
      }
    },
    {
        $sort:{
            numberOfSale:-1
        }
    }
  ])
/*{ "_id" : "Miguel Reyes", "numVentas" : 2 }
{ "_id" : "Pepe Guerra", "numVentas" : 2 }
{ "_id" : "David Aragon", "numVentas" : 2 }
{ "_id" : "Dani García", "numVentas" : 1 }*/

/*El dinero medio generado por cada vendedor*/
db.ventainformática.aggregate([
    {
      $unwind: {
        path: "$elementos",
      },
    },
    {
      $group: {
        _id: "$Vendedor",
        averageSeller: {
          $avg: {
            $multiply: ["$elementos.precio_de_venta", "$elementos.unidades_vendidas"],
          },
        },
      },
    },
  ])
/*
{ "_id" : "Miguel Reyes", "averageSeller" : 6416.666666666667 }
{ "_id" : "Pepe Guerra", "averageSeller" : 137950 }
{ "_id" : "David Aragon", "averageSeller" : 40713.333333333336 }
{ "_id" : "Dani García", "averageSeller" : 100450 }
*/ 

/*Beneficios netos de cada vendedor de mayor a menor*/
db.ventainformática.aggregate([     
  {         
    $unwind:{             
      path:"$elementos"         
    }     
  },     
  {         
    $project:{             
      _id:0,             
      Vendedor:"$Vendedor",             
      dinerototal:{                 
        $multiply: ["$elementos.unidades_vendidas","$elementos.precio_de_venta"] }             
      }         
    },         
    {                 
      $group: {                     
        _id:"$Vendedor",                     
        dinerototal:{ $sum:"$dinerototal"}                 
      }         
    },         
    {             
      $sort: {                 
        dinerototal:-1             
      }         
    } 
  ])
/*
{ "_id" : "Pepe Guerra", "dinerototal" : 508840 }
{ "_id" : "Dani García", "dinerototal" : 325510 }
{ "_id" : "David Aragon", "dinerototal" : 146300 }
{ "_id" : "Miguel Reyes", "dinerototal" : 62920 } 
*/

/*Todos los articulos comprados por los diferentes clientes ordenados de mayor a menor*/
db.ventainformática.aggregate([
  {
      $unwind:{
          path:"$elementos"
      }
  },
  {
      $group:{
          _id:"$cliente",
          unidades_vendidas:{
              $sum:"$elementos.unidades_vendidas"
          }
      }
  },
  {
      $sort:{
          unidades_vendidas:-1
      }
  }
])
/*
{ "_id" : { "nombre" : "Antonio Recio", "telefono" : "654445687" }, "soldUnits" : 260 }
{ "_id" : { "nombre" : "Diego Carlos", "telefono" : "654852132" }, "soldUnits" : 235 }
{ "_id" : { "nombre" : "Enrique Pastor", "telefono" : "666656585" }, "soldUnits" : 125 }
{ "_id" : { "nombre" : "Pablo Jaramago", "telefono" : "672225697" }, "soldUnits" : 110 }
{ "_id" : { "nombre" : "Manuel Aguilar", "telefono" : "672589456" }, "soldUnits" : 60 }
{ "_id" : { "nombre" : "Alberto Brito", "telefono" : "677253645" }, "soldUnits" : 45 }
{ "_id" : { "nombre" : "Jesé Rodríguez", "telefono" : "675846824" }, "soldUnits" : 35 } 
*/


/*Beneficios netos realizados por cada vendedor*/
db.ventainformática.aggregate([
  {
    $unwind: {
      path: "$elementos",
    },
  },
  {
    $project: {
      Vendedor: 1,
      netIncome: {
        $subtract: [
          {
            $multiply: [
                "$elementos.precio_de_venta",
                "$elementos.unidades_vendidas"
            ],
          },
          {
            $multiply: [
                "$elementos.precio_de_coste",
                "$elementos.unidades_vendidas"
            ],
          },
        ],
      },
    },
  },
  {
    $group: {
      _id: "$Vendedor",
      total: {
        $sum: "$netIncome",
      },
    },
  },
])
/*
{ "_id" : "David Aragon", "total" : 103300 }
{ "_id" : "Dani García", "total" : 225510 }
{ "_id" : "Miguel Reyes", "total" : 39760 }
{ "_id" : "Pepe Guerra", "total" : 349990 } 
*/


/*Queremos saber cuanto han gastado nuestros cliente en cada año, 
ordenados de mayor a menor.*/ 
db.ventainformática.aggregate([
  
    {
      $unwind: {
        path: "$elementos",
      },
    },
    {
      $group: {
          _id: {
              año: {
                  $year: "$Fecha_venta"
              },
              cliente: "$cliente"
          },
          precio_de_coste: {
              $sum: {
                  $multiply: ["$unidades_vendidas", "$precio_de_venta"]
              }
          },
          total: {$sum: 1}
      }
  },
  {
      $project: {
          _id: 0,
          cliente: "$cliente",
          año: "$_id.año",
          precio_de_coste: {
              $round: ["$precio_de_coste", 1]
          },
      }
  },
  {
      $sort: {
          precio_de_coste: 1
      }
  }
  ])

  /*Los ingresos netos por mes ordenados de mayor a menor*/
  db.ventainformática.aggregate([
    {
        $unwind:{
            path:"$elementos"
        }
    },
    {
        $project:{
            month:{
                $month:"$Fecha_venta"
            },
            netIncome:{
                $subtract: [
                    {
                      $multiply: [
                          "$elementos.precio_de_venta",
                          "$elementos.unidades_vendidas"
                      ],
                    },
                    {
                      $multiply: [
                          "$elementos.precio_de_coste",
                          "$elementos.unidades_vendidas"
                      ],
                    },
                  ]
            }
        },   
    },
    {
        $group:{
            _id:"$month",
            avg:{
                $avg:"$netIncome" 
            }
        }
    },
    {
        $project:{
            month:"$_id",
            avgNetIncome:{
                $round:[
                    "$avg",
                    2
                ]
            },
            _id:0
        }
    },
    {
        $sort:{
            avgNetIncome:-1
        }
        
    }
])
/*
{ "month" : 1, "avgNetIncome" : 94450 }
{ "month" : 8, "avgNetIncome" : 45102 }
{ "month" : 2, "avgNetIncome" : 43870 }
{ "month" : 4, "avgNetIncome" : 15558.33 }
{ "month" : 6, "avgNetIncome" : 5186.67 }
{ "month" : 5, "avgNetIncome" : 4350 } 
*/