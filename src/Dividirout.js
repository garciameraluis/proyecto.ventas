db.ventainformática.aggregate([
    {
        $project: {
            _id: 0,
            elementos: 0,
        }
    },

    { 
      $out: "ventasinfo" 
  }
  ])

  db.ventainformática.aggregate([
    {
        $unwind: {
          path: "$elementos",
        },
      },

    {
        $project: {
            _id: 0,
            id: 1,
            producto:"$elementos.producto",
            marca:"$elementos.marca",
            precio_de_venta:"$elementos.precio_de_venta",
            precio_de_coste:"$elementos.precio_de_coste",
            unidades_vendidas:"$elementos.unidades_vendidas",
            disponible:"$elementos.disponible",
            otras_características:"$elementos.otras_características"
    },
},
    { 
      $out:"ventainfo2" 
       
  }
  ])