



import TransferService from './TransferService.js'
import SQLRepository from './SQLRepository.js'
import NoSQLRepository from './NoSQLRepository.js'

// dependency
const sqlRepository = new SQLRepository()
const noSqlRepository = new NoSQLRepository()

// dependent
const transferService = new TransferService(noSqlRepository)


transferService.transfer(300, "1", "2")
console.log()
transferService.transfer(300, "2", "1")
