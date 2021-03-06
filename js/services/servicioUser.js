angular.module('abmapp')
.service('servicioUser', function($timeout,$http) {
    this.Nombre = "Servicio Usuario";
   this.Borrar = Borrar;
    this.Cargar = Cargar;
    this.Alta = Alta;
    this.Modificar =Modificar;

  

    function Cargar(){
      
      
    return $http.get('http://localhost:8080/DeSalvo.SPLab42016/ws/usuarios')
    .then(function(respuesta) {       
      
    return respuesta.data;
      


      },function errorCallback(response) {
           return response; 
          
          
                                 }
   
   )


    }
  

  

    function Alta(persona){
      
      
    return  $http.post('http://localhost:8080/DeSalvo.SPLab42016/ws/altaUser/' + JSON.stringify(persona))
    .then(function(respuesta) {       
      
    return respuesta.data;
      


      },function errorCallback(response) {
           return response; 
          
          
                                 }
   
   )


    }






    function Borrar(persona){
      
      
    return    $http.delete('http://localhost:8080/DeSalvo.SPLab42016/ws/usuario/' + JSON.stringify(persona.id))
    .then(function(respuesta) {       
      
    return respuesta.data;
      


      },function errorCallback(response) {
           return response; 
          
          
                                 }
   
   )


    }
  

    function Modificar(usuario){
      
      
    return    $http.put('http://localhost:8080/DeSalvo.SPLab42016/ws/modificarUser/' + JSON.stringify(usuario))
    .then(function(respuesta) {       
      
    return respuesta.data;
      


      },function errorCallback(response) {
           return response; 
          
          
                                 }
   
   )


    }

   







  })