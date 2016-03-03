angular.module('starter.controllers', ['ionic','ngCordova'])

.controller('getList1',function($scope){
  $scope.lists = [
    {
      "title":"石家庄惠民批发市场",
      "subTitle":"卖的洗发水价格便宜，但是好像是假的，用后去屑效果特别不好",
      "time":"2015-12-11",
      "editor":"李晓丽"
    },
    {
      "title":"石家庄惠民批发市场",
      "subTitle":"卖的洗发水价格便宜，但是好像是假的，用后去屑效果特别不好",
      "time":"2015-11-05",
      "editor":"张华"
    },{
      "title":"石家庄惠民批发市场",
      "subTitle":"卖的洗发水价格便宜，但是好像是假的，用后去屑效果特别不好",
      "time":"2015-10-18",
      "editor":"王佳佳"
    }
  ]
})

.controller('getList2',function($scope){
  $scope.lists = [
    {
      "title":"石家庄惠民批发市场",
      "time":"2015-12-11",
      "editor":"李晓丽"
    },
    {
      "title":"石家庄惠民批发市场",
      "time":"2015-11-05",
      "editor":"张华"
    },{
      "title":"石家庄惠民批发市场",
      "time":"2015-10-18",
      "editor":"王佳佳"
    }
  ]
})
.controller('getList3',function($scope){
  $scope.lists = [
    {
      "money":"1000",
      "time":"2015-12-11",
      "name":"李晓丽",
      "des":"假冒茅台"
    },
    {
      "money":"100",
      "time":"2015-11-05",
      "name":"张华",
      "des":"假冒茅台"
    },{
      "money":"200",
      "time":"2015-10-18",
      "name":"王佳佳",
      "des":"假冒茅台"
    }
  ]
})

.controller('RulesCtrl', function($scope, Rules) {
  $scope.rules = Rules.all();
})
.controller('RulesDetailCtrl', function($scope, $stateParams, Rules) {
  $scope.rul = Rules.get($stateParams.ruleId);
})

//---------------------------alert------------------------------

  .controller('modalCtrl', function($scope, $ionicPopup, $timeout,$state,Codes) {
    $scope.codes = Codes.all();
    // An alert dialog
    $scope.showAlert = function(newCode) {
      var alertPopup = $ionicPopup.alert({
        title: '',
        template: '保存成功 !'
      });
        //提交数据
      $scope.codes.push({ text: newCode.text});
      alertPopup.then(function() {
        //输出数据
        console.log(newCode.text);
        //跳转到验证首页
        $state.go('tab.verification');

      });
    };
  })
.controller('verificationCtrl', function($scope,Codes){
  $scope.codes = Codes.all();


})

.controller('reportCtrl', function($scope, $ionicModal) {
  $ionicModal.fromTemplateUrl('templates/modal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

})
.controller('typeCtrl', function($scope, Types) {
  $scope.types = Types.all();
})

//--------扫码插件 有bug未试通------------
.controller('scansCodeCtrl',function($scope, $cordovaBarcodeScanner ){
  $scope.scanBarcode = function() {
    $cordovaBarcodeScanner.scan().then(function(imageData) {
      alert(imageData.text);
      console.log("Barcode Format -> " + imageData.format);
      console.log("Cancelled -> " + imageData.cancelled);
    }, function(error) {
      console.log("An error happened -> " + error);
    });
  };

})





    .controller('myCtrl', ['$scope', '$ionicModal',
      function($scope, $ionicModal) {
        $scope.verCons = [
          {
            date:'2016-03-11',
            con:'飘柔洗发水',
            result:'true'
          },
          {
            date:'2015-11-01',
            con:'茅台酒',
            result:'false'
          },
          {
            date:'2014-02-23',
            con:'周大福钻戒',
            result:'untested'
          },
          {
            date:'2014-01-22',
            con:'周大福钻戒',
            result:'true'
          }

        ],
            $scope.reportCons = [
              {
                name:'张丽',
                date: '2016-03-11',
                con: '飘柔洗发水',
                num: '1',
                reward:'已奖励'
              },
              {
                name:'错过车的站台',
                date: '2016-03-11',
                con: '茅台',
                num: '1',
                reward:'未奖励'
              },
              {
                name:'错过车的站台',
                date: '2016-03-11',
                con: '飘柔洗发水',
                num: '2',
                reward:'已奖励'
              }
            ],
        // Modal 1
        $ionicModal.fromTemplateUrl('templates/my-modal/my-verification-modal.html', {
          id: '1', // We need to use and ID to identify the modal that is firing the event!
          scope: $scope,
          backdropClickToClose: false,
          animation: 'slide-in-up'
        }).then(function(modal) {
          $scope.oModal1 = modal;
        });

        // Modal 2
        $ionicModal.fromTemplateUrl('templates/my-modal/my-report-modal.html', {
          id: '2', // We need to use and ID to identify the modal that is firing the event!
          scope: $scope,
          backdropClickToClose: false,
          animation: 'slide-in-up'
        }).then(function(modal) {
          $scope.oModal2 = modal;
        });
        // Modal 3
        $ionicModal.fromTemplateUrl('templates/my-modal/my-bindBankCard-modal.html', {
          id: '3', // We need to use and ID to identify the modal that is firing the event!
          scope: $scope,
          backdropClickToClose: false,
          animation: 'slide-in-up'
        }).then(function(modal) {
          $scope.oModal3 = modal;
        });

        // Modal 4
        $ionicModal.fromTemplateUrl('templates/my-modal/my-changePassword-modal.html', {
          id: '4', // We need to use and ID to identify the modal that is firing the event!
          scope: $scope,
          backdropClickToClose: false,
          animation: 'slide-in-up'
        }).then(function(modal) {
          $scope.oModal4 = modal;
        });
        // Modal 5
        $ionicModal.fromTemplateUrl('templates/my-modal/my-changeName-modal.html', {
          id: '5', // We need to use and ID to identify the modal that is firing the event!
          scope: $scope,
          backdropClickToClose: false,
          animation: 'slide-in-up'
        }).then(function(modal) {
          $scope.oModal5 = modal;
        });
        // Modal 6
        $ionicModal.fromTemplateUrl('templates/my-modal/my-reward-modal.html', {
          id: '6', // We need to use and ID to identify the modal that is firing the event!
          scope: $scope,
          backdropClickToClose: false,
          animation: 'slide-in-up'
        }).then(function(modal) {
          $scope.oModal6 = modal;
        });


        //----------------------------------
        $scope.openModal = function(index) {
          if (index){
            var oModal = 'oModal'+index
            $scope[oModal].show();
          }
        };

        $scope.closeModal = function(index) {
          if (index){
            var oModal = 'oModal'+index
            $scope[oModal].hide();
          }
        };

        /* Listen for broadcasted messages */
        //==============================================




        $scope.$on('modal.hidden', function(event, modal) {
          console.log('Modal ' + modal.id + ' is hidden!');
        });

        // Cleanup the modals when we're done with them (i.e: state change)
        // Angular will broadcast a $destroy event just before tearing down a scope
        // and removing the scope from its parent.
        $scope.$on('$destroy', function() {
          console.log('Destroying modals...');
          $scope.oModal1.remove();
          $scope.oModal2.remove();
          $scope.oModal3.remove();
          $scope.oModal4.remove();
        });
      }

    ])








