myApp.service('srvPrueba',function($http) {

    this.servicioBusqueda = function(parametro,f1,f2,f3,f4,f5) {
      console.log('http://data.utpl.edu.ec/biows/search/busquedainicial?cadena='+parametro+'&paginado=5&page=1&f1='+f1+'&f2='+f2+'&f3='+f3+'&f4='+f4+'&f5='+f5+'');
      return $http.get('http://data.utpl.edu.ec/biows/search/busquedainicial?cadena='+parametro+'&paginado=5&page=1&f1='+f1+'&f2='+f2+'&f3='+f3+'&f4='+f4+'&f5='+f5+'');
    };
});
