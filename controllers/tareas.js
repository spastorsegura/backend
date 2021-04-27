const tareas = [
    {
        nombre:"Hacer el foro",
        estado:true,
    },
    {
        nombre:"Hacer el ejercicio de Flask",
        estado:false,
    }
];

export const crearTarea=(req,res)=>{
    console.log(req.body);
    tareas.push(req.body);
    return res.json({
        content:tareas[tareas.length-1],
    });
};

export const listarTareas=(req,res)=>{
    return res.json({
        content:tareas,
    });
};

export const listarTareaPorId=(req,res)=>{
    console.log(req.params);
    const {id}=req.params;
    if(tareas[id-1]){
        return res.json({
            content:tareas[id-1]
        })
    }else{
        return res.status(404).json({
            message:"Not found",
        });
    }
}