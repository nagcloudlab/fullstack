import log4js from 'log4js';

var logger = log4js.getLogger('txr');
logger.level = "info";

class SQLAccountRepository {

    constructor() {
        logger.info("SQLAccountRepository instance created");
    }
    loadAccount(num) {
        logger.info("loading account", num);

        //...
        return { num, balance: 1000.00 }
    }

    updateAccount(account) {
        logger.info("updating account", account.num);
        //..
        return account;
    }

}

export default SQLAccountRepository;