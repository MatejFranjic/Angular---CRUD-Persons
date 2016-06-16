var myApp = angular.module('myApp', ['ngMessages']);

myApp.factory('Data', function () {
    var personsArray = [];
    return {
        personsArray
    }
});
myApp.controller('showController', ['$scope', '$log', '$filter', 'Data', function ($scope, $log, $filter, Data) {    
    /*--------------*/
    $scope.Person1 = new Object;
    $scope.Person1.id = Data.personsArray.length+1;
    $scope.Person1.firstName = 'Pero';
    $scope.Person1.lastName = 'Peric';
    $scope.Person1.streetAddress = 'Kotoripska';
    $scope.Person1.streetNumber = '29';
    $scope.Person1.city = 'Zagreb';
    $scope.Person1.emails = ['pero@gmail.com', 'martin@gmail.com', 'peric@gmail.com'];
    $scope.Person1.phones = ['01 2850 290', '098 654 3215'];
    $scope.Person1.tags = ['friend', 'highschool', 'senior', 'work', 'college'];

    Data.personsArray.push($scope.Person1);
    $log.info('Ovo je Data',Data);

    /*-------*/
    $scope.Person2 = new Object;
    $scope.Person2.id = Data.personsArray.length+1;
    $scope.Person2.firstName = 'Josip';
    $scope.Person2.lastName = 'Jopic';
    $scope.Person2.streetAddress = 'Ilica';
    $scope.Person2.streetNumber = '29';
    $scope.Person2.city = 'London';
    $scope.Person2.emails = ['pero2@gmail.com', 'martin2@gmail.com', 'peric2@gmail.com'];
    $scope.Person2.phones = ['01 2850 290', '098 654 3215'];
    $scope.Person2.tags = ['friend', 'highschool', 'senior', 'work', 'college'];
    
    Data.personsArray.push($scope.Person2);
    $log.info('Ovo je Data 2', Data);
    $log.info(Data.personsArray);
    
    /*-------*/
    $scope.Person3 = new Object;
    $scope.Person3.id = Data.personsArray.length+1;
    $scope.Person3.firstName = 'Marko';
    $scope.Person3.lastName = 'Ilic';
    $scope.Person3.streetAddress = 'Retkovec';
    $scope.Person3.streetNumber = '29';
    $scope.Person3.city = 'Tokio';
    $scope.Person3.emails = ['pero@gmail.com', 'martin@gmail.com', 'peric@gmail.com'];
    $scope.Person3.phones = ['01 2850 290', '098 654 3215'];
    $scope.Person3.tags = ['friend', 'highschool', 'senior', 'work', 'college'];

    Data.personsArray.push($scope.Person3);
    /*-------*/
    $scope.Person4 = new Object;
    $scope.Person4.id = Data.personsArray.length+1;
    $scope.Person4.firstName = 'Ante';
    $scope.Person4.lastName = 'Antic';
    $scope.Person4.streetAddress = 'Poljanice';
    $scope.Person4.streetNumber = '29';
    $scope.Person4.city = 'Zagreb';
    $scope.Person4.emails = ['pero@gmail.com', 'martin@gmail.com', 'peric@gmail.com'];
    $scope.Person4.phones = ['01 2850 290', '098 654 3215'];
    $scope.Person4.tags = ['friend', 'highschool', 'senior', 'work', 'college'];

    Data.personsArray.push($scope.Person4);
    /*-------*/
    $scope.Person5 = new Object;
    $scope.Person5.id = Data.personsArray.length+1;
    $scope.Person5.firstName = 'Marko';
    $scope.Person5.lastName = 'Darkic';
    $scope.Person5.streetAddress = 'Kotoripska';
    $scope.Person5.streetNumber = '30';
    $scope.Person5.city = 'London';
    $scope.Person5.emails = ['pero@gmail.com', 'martin@gmail.com', 'peric@gmail.com'];
    $scope.Person5.phones = ['01 2850 290', '098 654 3215'];
    $scope.Person5.tags = ['friend', 'highschool', 'senior', 'work', 'college'];

    Data.personsArray.push($scope.Person5);
    /*-------*/
    $scope.Person6 = new Object;
    $scope.Person6.id = Data.personsArray.length+1;
    $scope.Person6.firstName = 'Pero';
    $scope.Person6.lastName = 'Maric';
    $scope.Person6.streetAddress = 'Dubrava';
    $scope.Person6.streetNumber = '29';
    $scope.Person6.city = 'Vukovar';
    $scope.Person6.emails = ['pero@gmail.com', 'martin@gmail.com', 'peric@gmail.com'];
    $scope.Person6.phones = ['01 2850 290', '098 654 3215'];
    $scope.Person6.tags = ['friend', 'highschool', 'senior', 'work', 'college'];

    Data.personsArray.push($scope.Person6);
    
    /*------------------------------*/
    /*Testing data*/
    $scope.dataArray = Data.personsArray;
    $log.log($scope.dataArray);

}]);
myApp.controller('insertController', ['$scope', 'Data', function ($scope, Data) {

    $scope.save = () => {
        var entryPerson = new Object;
        entryPerson.id = Data.personsArray.length+1;
        entryPerson.firstName = $scope.firstName;
        entryPerson.lastName = $scope.lastName;
        entryPerson.streetAddress = $scope.sa;
        entryPerson.streetNumber = $scope.sn;
        entryPerson.city = $scope.city;
        
        var emails = [];
        var emailInput = document.getElementsByClassName('email-input');
        for (var i = 0; i < emailInput.length; i++) {
            emails.push(emailInput[i].value);
        }
        entryPerson.emails = emails;

        var phones = [];
        var phoneInput = document.getElementsByClassName('phone-input');
        for (var i = 0; i < phoneInput.length; i++) {
            phones.push(phoneInput[i].value);
        }
        entryPerson.phones = phones;

        var tags = [];
        var tagInput = document.getElementsByClassName('tags-input');
        for (var i = 0; i < tagInput.length; i++) {
            tags.push(tagInput[i].value);
        }
        entryPerson.tags = tags;
        Data.personsArray.push(entryPerson);
        console.log('Nakon okidanja dodavanja',Data.personsArray);

        //probaj napraviti for petlju koja æe izbrisati sva input polja ^^ i staviti ih na value = ""
        //PITATI ZVONARA ZA POMOÆ - NIKAD NISAM KUŽIO TO :S
        var containers = document.getElementsByClassName('form-group');
        var parent = containers.getElementsByTagName('div');
        var inputs = getElementsByTagName('input');
        for (var i = 0; i < inputs.length; i++) {
            parent[i].inputs[i].value = "";
        }
        
    }

}]);

myApp.controller('delUpdController', ['$scope', 'Data', function ($scope, Data) {

    $scope.counterEmail = 0;
    $scope.counterPhone = 0;
    $scope.counterTags = 0;    

    $scope.update = function (id) {

        var persons = Data.personsArray;
        var ID = id;

        for (var i = 0; i < persons.length; i++) {
            if (id == persons[i].id) {
                $scope.firstNameU = persons[i].firstName;
                $scope.lastNameU = persons[i].lastName;
                $scope.saU = persons[i].streetAddress;
                $scope.snU = persons[i].streetNumber;
                $scope.cityU = persons[i].city;
                $scope.emailsU = persons[i].emails;
                $scope.phonesU = persons[i].phones;
                $scope.tagsU = persons[i].tags;
            }
        }

        $('.modal-content form').on('submit', function (event) {
            event.preventDefault();
            console.log('Serialize', $(this).serialize());
            console.log('ovo nije undefined', Data.personsArray);
            for (var i = 0; i < Data.personsArray.length; i++) {
                if (ID == Data.personsArray[i].id) {
                    $scope.$apply(function (scope) {
                        Data.personsArray[i].firstName = document.getElementById('updateFirstName').value;
                        Data.personsArray[i].lastName = document.getElementById('updateLastName').value;
                        Data.personsArray[i].streetAddress = document.getElementById('updateSA').value;
                        Data.personsArray[i].streetNumber = document.getElementById('updateSN').value;
                        Data.personsArray[i].city = document.getElementById('updateCity').value;

                        var arrayOfEmails = [];
                        for (var j = 0; j < Data.personsArray[i].emails.length; j++) {
                           var emailInput = document.getElementsByClassName('email-updated');                            
                           console.log(emailInput);
                           arrayOfEmails.push(emailInput[j].value);
                        }
                        Data.personsArray[i].emails = arrayOfEmails;

                        var arrayOfPhones = [];
                        for (var j = 0; j < Data.personsArray[i].phones.length; j++) {
                            var phoneInput = document.getElementsByClassName('phone-updated');
                            console.log(phoneInput);
                            arrayOfPhones.push(phoneInput[j].value);
                        }
                        Data.personsArray[i].phones = arrayOfPhones;

                        var arrayOfTags = [];
                        for (var j = 0; j < Data.personsArray[i].tags.length; j++) {
                            var tagInput = document.getElementsByClassName('tags-updated');
                            console.log(tagInput);
                            arrayOfTags.push(tagInput[j].value);
                        }
                        Data.personsArray[i].tags = arrayOfTags;
                        console.log(Data.personsArray[i].tags);


                    })

                }
            }
            $('#modalWindow').modal('hide');
            $('li[value=' + id + ']').append('<div class="alert alert-success" role="alert"><strong>Well done!</strong> You have successfully updated selected person.</div>');
        });



        $scope.delete = function (id) {
            console.log(id);
            Data.personsArray.splice(Data.personsArray[id - 1], 1);
        }

    }

}]);
myApp.directive("addbuttons", function ($compile) {
    return function (scope, element, attrs) {
        console.log('Scope', scope);                
        element.bind("click", function () {
            scope.counterEmail++;
            var alert = "<div ng-messages='userForm.email" + scope.counterEmail + ".$error' ng-if='userForm.email" + scope.counterEmail + ".$touched'><div ng-message='required' class='alert alert-danger'>This field is required.</div></div>";
            angular.element(document.getElementsByClassName('email-container'))
                .append($compile("<div id=E" + scope.counterEmail + "><label>E-mail:</label> <input type='email' ng-model='email"+scope.counterEmail+"' value='' name='email" + scope.counterEmail + "' class='email-input' required/> <i id=ED" + scope.counterEmail + " class='fa fa-times' aria-hidden='true' deleteemail></i></div>"+alert)(scope));            
        });
    }
});
myApp.directive('deleteemail', function ($compile) {
    return function (scope, element, attrs) {
        element.bind('click', function () {                       
            var array = element[0].id.split("");            
            var idDiv = array[0] + array[array.length - 1];

            document.getElementById(idDiv).remove();
        })
    }        
});
myApp.directive('addphone', function ($compile) {
    return function (scope, element, attrs) {
        element.bind('click', function () {
            scope.counterPhone++;
            angular.element(document.getElementsByClassName('phones-container')).append($compile("<div id=P" + scope.counterPhone + "><label>Phone:</label>  <input type='tel' class='phone-input' name='phone' required /> <i id=PD" + scope.counterPhone + " class='fa fa-times' aria-hidden='true' deletephone></i></div>")(scope));
        });
    }
});
myApp.directive('deletephone', function ($compile) {
    return function (scope, element, attrs) {
        element.bind('click', function () {
            var array = element[0].id.split("");            
            var idDiv = array[0] + array[array.length - 1];            

            document.getElementById(idDiv).remove();            
        });
    }
});
myApp.directive('addtags', function ($compile) {
    return function (scope, element, attrs) {
        element.bind('click', function () {
            scope.counterTags++;
            angular.element(document.getElementsByClassName('tags-container')).append($compile('<div id="T'+scope.counterTags+'"><label for="phone">Tags:</label> <input type="text" id="tag" name="tag" class="tags-input" required/> <i id="TD'+scope.counterTags+'" class="fa fa-times" aria-hidden="true" deletetags></i></div>')(scope));
        });
    }
});
myApp.directive('deletetags', function ($compile) {
    return function (scope, element, attrs) {
        element.bind('click', function () {
            var array = element[0].id.split("");
            var idDiv = array[0] + array[array.length - 1];

            document.getElementById(idDiv).remove();
        });
    }
});
