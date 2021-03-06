angular.module('starter.services', [])

.factory('Rules', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var rules = [{
    id: 0,
    title:'服务协议',
    text:'1、服务条款的确认和接纳　本APP的各项内容和服务的所有权归本公司拥有。用户在接受本服务之前，请务必仔细阅读本条款。用户使用服务，或通过完成注册程序，表示用户接受所有服务条款。　　2、用户同意：	(1) 提供及时、详尽及准确的个人资料。	(2) 不断更新注册资料、符合及时、详尽、准确的要求。	如果用户提供的资料不准确，本网站有结束服务的权利。	本网站及APP将不公开用户的姓名、地址、电子邮箱、帐号和电话号码等信息（请阅隐私保护条款）。	用户在本网站和APP的任何行为必须遵循：　	(1) 传输资料时必须符合中国有关法规。　	(2) 使用信息服务不作非法用途和不道德行为。　	(3) 不干扰或混乱网络服务。　	(4) 遵守所有使用服务的网络协议、规定、程序和惯例。用户的行为准则是以因特网法规，政策、程序和惯例为根据的。　　3、服务条款的修改	本APP有权在必要时修改条款，将会在页面公布。	如果不接受所改动的内容，用户可以取消自己的会员资格。	如果您不取消自己的会员资格，则视为接受服务条款的变动。　　4、 用户的帐号、密码和安全性	一旦成功注册成为会员，您将有一个密码和用户名。'
  }, {
    id: 1,
    title:'奖励规则',
    text:'1、服务条款的确认和接纳　本APP的各项内容和服务的所有权归本公司拥有。用户在接受本服务之前，请务必仔细阅读本条款。用户使用服务，或通过完成注册程序，表示用户接受所有服务条款。　　2、用户同意：	(1) 提供及时、详尽及准确的个人资料。	(2) 不断更新注册资料、符合及时、详尽、准确的要求。	如果用户提供的资料不准确，本网站有结束服务的权利。	本网站及APP将不公开用户的姓名、地址、电子邮箱、帐号和电话号码等信息（请阅隐私保护条款）。	用户在本网站和APP的任何行为必须遵循：　	(1) 传输资料时必须符合中国有关法规。　	(2) 使用信息服务不作非法用途和不道德行为。　	(3) 不干扰或混乱网络服务。　	(4) 遵守所有使用服务的网络协议、规定、程序和惯例。用户的行为准则是以因特网法规，政策、程序和惯例为根据的。　　3、服务条款的修改	本APP有权在必要时修改条款，将会在页面公布。	如果不接受所改动的内容，用户可以取消自己的会员资格。	如果您不取消自己的会员资格，则视为接受服务条款的变动。　　4、 用户的帐号、密码和安全性	一旦成功注册成为会员，您将有一个密码和用户名。'
  }, {
    id: 2,
    title:'关于我们',
    text:'1、服务条款的确认和接纳　本APP的各项内容和服务的所有权归本公司拥有。用户在接受本服务之前，请务必仔细阅读本条款。用户使用服务，或通过完成注册程序，表示用户接受所有服务条款。　　2、用户同意：	(1) 提供及时、详尽及准确的个人资料。	(2) 不断更新注册资料、符合及时、详尽、准确的要求。	如果用户提供的资料不准确，本网站有结束服务的权利。	本网站及APP将不公开用户的姓名、地址、电子邮箱、帐号和电话号码等信息（请阅隐私保护条款）。	用户在本网站和APP的任何行为必须遵循：　	(1) 传输资料时必须符合中国有关法规。　	(2) 使用信息服务不作非法用途和不道德行为。　	(3) 不干扰或混乱网络服务。　	(4) 遵守所有使用服务的网络协议、规定、程序和惯例。用户的行为准则是以因特网法规，政策、程序和惯例为根据的。　　3、服务条款的修改	本APP有权在必要时修改条款，将会在页面公布。	如果不接受所改动的内容，用户可以取消自己的会员资格。	如果您不取消自己的会员资格，则视为接受服务条款的变动。　　4、 用户的帐号、密码和安全性	一旦成功注册成为会员，您将有一个密码和用户名。'
  }];

  return {
    all: function() {
      return rules;
    },
    get: function(ruleId) {
      for (var i = 0; i < rules.length; i++) {
        if (rules[i].id === parseInt(ruleId)) {
          return rules[i];
        }
      }
      return null;
    }
  };
})
    .factory('Types', function() {
      // Might use a resource here that returns a JSON array

      // Some fake testing data
      var types = [{
        id: 0,
        value:'宝洁',
        content:'宝洁'
      }, {
        id: 1,
        value:'茅台',
        content:'茅台'
      }, {
        id: 2,
        value:'高洁',
        content:'高洁'
      }];

      return {
        all: function() {
          return types;
        }
      };
    })
    .factory('Codes', function() {
      // Might use a resource here that returns a JSON array

      // Some fake testing data
      var codes = [{
        text: ''
      }];

      return {
        all: function () {
          return codes;
        }
      }
    })

    .factory('Provinces', function() {
      // Might use a resource here that returns a JSON array

      // Some fake testing data
      var provinces = [{
        title: '北京'
      },{
        title: '河北'

        }]

      return {
        all: function () {
          return provinces;
        }
      }
    })

