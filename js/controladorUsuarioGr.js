angular.module('abmapp.filtrosUsuarioGrilla', []) 
  app.filter('tipo', function () {
   var perfil = {
      'administrador': 'Administrador',
      'vendedor': 'Vendedor',
      'comprador': 'Comprador'
    }
   return function (input) {
        if (!input)
        return '';
    return perfil[input];
    }

});
app.filter('sexo', function () {
   var sex = {
      'f': 'Femenino',
      'm': 'Masculino'
      
    }
   return function (input) {
        if (!input)
        return '';
    return sex[input];
    };





  });
