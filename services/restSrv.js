angular.module('restService', [])//Declaramos el modulo
    .factory('apiRequest', function ($http) { //declaramos la factory
        // var path = "http://jsonplaceholder.typicode.com/";//API path
        var path = "http://localhost:8000/";//API path
        return {
            add_user: function (informacion) { 
                global = $http.post(path + 'usuarios/', informacion);
                return global;
            },
            add_post: function (informacion) { //retornara el post por el id
                console.log(informacion);
                global = $http.post(path + 'programas/', informacion);
                return global;
            },
            post_pylint: function (informacion) { //retornara el post por el id
                console.log(informacion);
                global = $http.post(path + 'programas/pylint/', informacion);
                return global;
            },
            usuario: function (nick) { //retornara el post por el id
                global = $http.get(path + 'usuarios/' + nick);
                return global;
            },
            get_autores : function(){ //Retornara la lista de posts
				global = $http.get(path+'autores/');
				return global;
			},
            get_urls : function(id){ //Retornara la lista de posts
				global = $http.get(path+'autores/'+id);
				return global;
			},
            get_autor : function(id){ //Retornara la lista de posts
				global = $http.get(path+'autores/info/'+id);
				return global;
			}

        }
    });