db.ventainformática.aggregate([
    {
        $lookup:{
            from:"ventasinfo",
            localField:"id",
            foreignField:"id",
            as:"test"
        }
    },
    {
        $project:{
            _id:0,
            vendedores:{$arrayElemAt:["$test",0]},
            Vendedor:"$Vendedor"
        }
    },
    {
        $project:{
            vendedor:1,
            dinero:{$multiply:["$Vendedor.unidades_vendidas","$Vendedor.precio_de_venta"]}
        }
    },
    {
        $group:{
            _id:"$Vendedor",
            dinero:{$sum:"$dinero"}
        }
    },
    {
        $sort:{
            dinero:-1
        }
    }
])

// Número de artículos distintos que ha vendido cada
// vendedor
db.ventainformática.aggregate([
    {
        $lookup: {
        from: 'ventasinfo',
        localField: 'id',
        foreignField: 'id',
        as: 'test'
       }
    }, 
    {
        $addFields: {
        Vendedor: {
         $arrayElemAt: [
          '$test',
          0
         ]
        }
       }
    }, 
    {
        $project: {
        venta: 0
       }
    }, 
    {
        $project: {
            _id: 0,
            name: 1,
            seller: '$Vendedor.Vendedor'
       }
    },
    {
        $group:{
            _id: {
                name: "$name",
                Vendedor: "$Vendedor"
            },
            cantidad: {$sum: 1}
        }
    },
    {
        $sort: {
            "_id.Vendedor": 1
        }
    },
    {
        $group: {
            _id: "$_id.Vendedor",
            cantidad: {$sum: 1}
        }
    }
])