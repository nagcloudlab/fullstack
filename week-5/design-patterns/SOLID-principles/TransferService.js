import log4js from 'log4js';
import SQLAccountRepository from './SQLRepository.js'

var logger = log4js.getLogger('txr');
logger.level = "info";


/* 


    design & performance issues
    --------------------------------

    ==> dependent & dependency are tightly-coupled

            - maintanance issues

    ==> too many duplicate dependency instances created & destroyed

            - resource use high

    ==> unit testing not possible

            - dev & bug-fix slow

     
    why these issues ?

        => dependent-object creating it's own dependency-object in its 'home' ( class )


    solution :
    
        => Never create dependency in dependent's home , get from factory   ( factory design pattern )

    limitation with factory pattern :
    
        => factory-location tight-coupling i.e dependent should know which factory will provide dependency....


    best solution :

        => Never create / lookup dependency , inject by 'third-party/provider'  

             i.e Inversion Of Control  

    how to implement IOC ?

        => using 'dependency injection' / DI

            why we need ?

                => to wire multiple modules/components in effective

    ------------------------------------------------------------------------------------------------

    OO programming

        - OO concepts
        - OO principles

            SOLID principles

                S: Single-responsibility principle
                O: Open-closed principle
                L: Liskov substitution principle
                I: Interface segregation principle 
                D: Dependency inversion principle

        -  OO patterns
        
                1. creational
                2. structural
                3. behavioral

                
*/

class TransferService {

    // constructor DI
    constructor(accountRepository) {
        this.accountRepository = accountRepository
        logger.info("TransferService instance created...")
    }

    transfer(amount, fromAccNum, toAccNum) {
        logger.info("txr initiated..")
        // const accountRepository = new SQLAccountRepository(); // dependency

        // load accounts
        const fromAccount = this.accountRepository.loadAccount(fromAccNum);
        const toAccount = this.accountRepository.loadAccount(toAccNum);

        // debit & credit
        fromAccount.balance = fromAccount.balance - amount;
        toAccount.balance = toAccount.balance + amount;

        // update accounts
        this.accountRepository.updateAccount(fromAccount)
        this.accountRepository.updateAccount(toAccount)
        logger.info("txr completed..")
    }
}

export default TransferService;