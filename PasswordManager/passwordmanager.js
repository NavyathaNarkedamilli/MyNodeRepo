console.log('starting password manager');

var storage = require('node-persist');
storage.initSync();

storage.setItemSync('accounts',[{

    username: 'Navyatha',
    balance:100
}]);

var accounts = storage.getItemSync('accounts');

accounts.push({

    username:'Navs',
    balance:75
});

storage.setItemSync('accounts',accounts);
console.log(accounts);
