const express = require('express');
const md5 = require('md5');
const router = express.Router()
const jwt = require('jsonwebtoken');
const mysql = require("mysql2");
const auth = require('../auth')

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "tablestructure_collegeexplore"
});

router.get('/', (req, res) => {
    res.send('Response from API route')
})

//getUsername
router.post('/getUsername', (req, res) => {
    user_id = req.body.data;
    // console.log("the input userid is: ")
    // console.log(user_id)
    sql = `SELECT user_name FROM users WHERE user_id = '${user_id}'`;

    con.query(sql, function (err, result) {
        if (err || Object.keys(result).length === 0) {
            //if there is no such result
            // console.log(res)
            res.send({ status: 0, data: 'No such result found' });
        } else {
            console.log(result)
            res.send({ status: 1, data: result });
        }
    })
})

/* GET users listing. */
router.post('/register', async function (req, res, next) {
    try {
        //req.body is json type, key-value pair
        let { username, email, password } = req.body;
        const hashed_password = md5(password.toString())


        const checkUserId = `Select user_id FROM users WHERE user_name = '${username}' and email='${email}'`;
        con.query(checkUserId, (err, result, fields) => {
            if (!(result.length)) {
                const sql1 = `Insert Into users (user_name, email, password) VALUES ('${username}','${email}','${hashed_password}')`
                con.query(sql1, (err, result) => {
                    if (err) {
                        res.send({ status: 0, data: err });
                    } else {
                        let token = jwt.sign({ data: result }, 'secretkey')
                        const sql2 = `select user_id from users where user_name='${username}'`
                        con.query(sql2, (err, result) => {
                            if (err) {
                                console.log(err);
                            } else {
                                res.send({ status: 1, user_id: result[0].user_id, token: token });
                            }
                        })
                    }

                })
            }
        });
    } catch (error) {
        res.send({ status: 0, error: error });
    }
});

router.post('/login', async function (req, res, next) {
    try {
        let { email, password } = req.body;

        const hashed_password = md5(password.toString())
        const sql = `SELECT * FROM users WHERE email = '${email}' AND password = '${hashed_password}'`
        con.query(sql, function (err, result) {
            if (err || Object.keys(result).length === 0) {
                res.send({ status: 0, data: 'log in with valid credantials' });
            } else {
                let token = jwt.sign({ data: result }, 'secretkey')
                res.send({ status: 1, data: result, token: token });
            }

        })
    } catch (error) {
        res.send({ status: 0, error: error });
    }
});

//we are going get the details of the searched college
router.post('/get-college', (req, res) => {
    college_name = req.body.collegeName;
    sql = `SELECT * FROM college_data WHERE college_name = '${college_name}'`;

    con.query(sql, function (err, result) {
        if (err || Object.keys(result).length === 0) {
            res.send({ status: 0, data: 'No such result found' });
        } else {
            res.send({ status: 1, data: result });
        }
    })
})

//we are going get the details of the searched college
router.get('/get-all-colleges', (req, res) => {
    sql = `SELECT college_name FROM college_data order by college_name`;
    con.query(sql, function (err, result) {
        if (err || Object.keys(result).length === 0) {
            res.send({ status: 0, data: 'No such result found' });
        } else {
            res.send({ status: 1, data: result });
        }
    })
})

router.post('/predict-college', (req, res) => {
    marks = req.body.marks;
    branch_name = req.body.branch;
    state_name = req.body.state;
    const sql = '';

    //no state given but the brach and cutoff are given
    if (state_name == "" && branch_name != "") {
        //sql
        console.log("only state is not given")
        this.sql = `select * from college_data  where college_id in (select college_id  from branch_cutoff where branch_name = '${branch_name}' and cutoff <= '${marks}');`
    }
    //no branch given but state and cutoff are given
    else if (branch_name == "" && state_name != "") {
        //sql
        console.log("no branch given but state and cutoff are given");
        this.sql = `select c.*, b.branch_name from college_data c, branch_cutoff b where c.college_id in ( select college_id from branch_cutoff where college_id in ( select college_id from college_data where state_id = (select state_id from state where state_name ='${state_name}')) and cutoff <= '${marks}')and c.college_id=b.college_id;`
    }
    //when all are given
    else if (state_name != "" && branch_name != "") {
        //sql
        console.log("when all are given");
        this.sql = `select * from college_data  where college_id in ( select college_id from branch_cutoff where college_id in ( select college_id from college_data where state_id = (select state_id from state where state_name ='${state_name}')) and branch_name ='${branch_name}' and cutoff <= '${marks}');`
    }
    //only cutoff given
    else {
        // sql
        console.log("Only cutoff given");
        this.sql = `select c.*,b.cutoff,b.branch_name from college_data as c,branch_cutoff as b where b.college_id = c.college_id and b.cutoff<= '${marks}';`
    }
    con.query(this.sql, function (err, result) {
        if (err || Object.keys(result).length === 0) {
            res.send({ status: 0, data: 'No such result found' });
        } else {
            res.send({ status: 1, data: result });
        }
    })
})


function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if (token === 'null') {
        return res.status(401).send('Unauthorized request')
    }

    let payload = jwt.verify(token, 'secretkey')
    if (!payload) {
        return res.status(401).send('Unauthorized request')
    }
    req.user = payload.data
    next()
}


module.exports = router