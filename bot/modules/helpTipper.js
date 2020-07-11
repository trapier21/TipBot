'use strict';
let config = require('config');
let stoneFee = config.get('stone').paytxfee;
let prefix = config.get('bot').prefix;
exports.commands = ['help'];
exports.help = {
  usage: '<subcommand>',
  description: 'This commands has been changed to currency specific commands!',
  process: function(bot, message) {
    message.author.send(
      '__**:bank: Coins :bank:**__\n' +
      '  **Stonecoin (STONE) Tipper**\n    Transaction Fees: **' + stoneFee + '**\n' +    
      '__**Commands**__\n' +
      '  **' + prefix + '<CoinSymbol>** : Displays This Message\n' +
      '  **' + prefix + '<CoinSymbol> balance** : get your balance\n' +
      '  **' + prefix + '<CoinSymbol> deposit** : get address for your deposits\n' +
      '  **' + prefix + '<CoinSymbol> withdraw <ADDRESS> <AMOUNT>** : withdraw coins to specified address\n' +
      '  **' + prefix + '<CoinSymbol> <@user> <amount>** :mention a user with @ and then the amount to tip them\n' +
      '  **' + prefix + '<CoinSymbol> private <user> <amount>** : put private before Mentioning a user to tip them privately\n' +
      '**<> : Replace carrot <> symbole with appropriate value.**\n' +
      '__**Examples**__\n' +
      '  **' + prefix + 'stone @FreakHouse 10**\n' +
      '  **' + prefix + 'stone withdraw STONEaddressHERE 10**\n' +
      '  **' + prefix + 'stone private @FreakHouse 10**\n' +
      '  **' + prefix + 'stone balance**\n' +
      '  **' + prefix + 'stone deposit**\n'
    );
  }
};
