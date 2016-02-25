angular.module('starter.controllers', [])

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
  $scope.rule = Rules.get($stateParams.ruleId);
})

//---------------------------modal------------------------------

  .controller('modalCtrl', function($scope, $ionicModal,$state) {
    $scope.code = [
      { text: '' }
    ];
    $ionicModal.fromTemplateUrl('templates/modal.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });
    $scope.closeModal = function(){
      $scope.modal.hide();
      $state.go('tab.verification');
    }
    $scope.openModal = function(newCode){
      $scope.modal.show();
      $scope.code.push({ text: newCode.text});
      console.log(newCode.text)
    }

  })
.controller('verificationCtrl', function($scope){


})

