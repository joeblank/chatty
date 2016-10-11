'use strict';

angular.module('chattyApp')
  .factory('messageService', function ( $http ) {
    return {
      getMessages: function () {
        return $http.get('http://localhost:9000');
      },

      addMessage: function ( message , username, avatar) {
        return $http.post('http://localhost:9000', { message: message, username: username, avatar: avatar});
      }
    };
  });
