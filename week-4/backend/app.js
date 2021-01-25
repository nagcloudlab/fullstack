const express = require('express')
const app = express()
const router = express.Router()

router.get('/fetch-paginated-data', (req, res) => {
    var pageNo = parseInt(req.query.pageNo)
    var pageSize = parseInt(req.query.pageSize)
    //checking if page number is invalid
    if (pageNo <= 0) {
        var response = {
            success: false,
            message: 'Invalid Page Number'
        };
        return res.status(200).json(response);
    } else {
        //fetch data from database based on given page no and page size
        var index = (parseInt(pageNo - 1) * parseInt(pageSize)) + 1;
        var list = [];
        for (var i = 0; i < pageSize - 1; i++) {
            list.push({
                index: index,
                data: 'Data ' + index
            });
            index++;
        }
        var response = {
            success: true,
            list: list
        };
        return res.status(200).json(response);
    }

});

app.use('/', router)

app.listen(3000);