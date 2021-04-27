const tareas = [];

export const crearTarea=(req,res)=>{
    console.log(req.body);
    tareas.push(req.body);
    return res.json({
        content:tareas[tareas.length-1],
    });
};