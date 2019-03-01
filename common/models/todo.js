'use strict';

module.exports = function(Todo) {
    Todo.beforeRemote('create', function(context, user, next) {
        context.args.data.usuarioId = context.req.accessToken.userId;
        var hoy =  new Date();
        console.log(hoy);
        var fecha = context.args.data.date;
        console.log(fecha);
        if(fecha < hoy){
            next(new Error("No es posible generar un evento pasado"));
        }else{
            next();
        }
        
      });

};
