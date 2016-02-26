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
  $scope.rul = Rules.get($stateParams.ruleId);
})

//---------------------------modal------------------------------

  .controller('modalCtrl', function($scope, $ionicPopup, $timeout,$state) {
    $scope.code = [
      { text: '' }
    ];
    // An alert dialog
    $scope.showAlert = function(newCode) {
      var alertPopup = $ionicPopup.alert({
        title: '',
        template: '保存成功 !'
      });
        //提交数据
      $scope.code.push({ text: newCode.text});
      alertPopup.then(function() {
        //输出数据
        console.log(newCode.text);
        //跳转到验证首页
        $state.go('tab.verification');
      });
    };
  })
.controller('verificationCtrl', function($scope){


})


