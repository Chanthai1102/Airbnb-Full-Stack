// connection db
const db = require("../Util/db")
const {json} = require("express");

// function get list of category
const getlist = async (req,res) => {
    const list = await db.query("SELECT c.*, c1.name as parent_name FROM category c left join category c1 on c.parent_id = c1.category_id ")
    res.json({
        list: list,
        query: req.query
    })
}

const create = (req,res) =>{
    const {
        name,
        description,
        parent_id,
        status
    } = req.body
    var create_category = "INSERT INTO category(`name`, `description`, `parent_id`, `status`) VALUES (?,?,?,?)"
    var data_category = [name,description,parent_id,status]
    db.query(create_category,data_category,(error,row) => {
        if (error){
            res.json({
                error: true,
                message: error
            })
        }else {
            res.json({
                message: "create successfully",
                list: row
            })
        }
    })
}

const getone = (req,res) => {
    var {id} = req.params;
    var search_category = "SELECT * FROM category WHERE category_id = ?"
    db.query(search_category,[id],(error,row) => {
        if (error){
            res.json({
                error: true,
                message: error
            })
        }else {
            res.json({
                list : row
            })
        }
    })
}


const update = (req,res) => {
    const {
        category_id,
        name,
        description,
        parent_id,
        status
    } = req.body
    var update_category = "UPDATE category SET name = ?, description = ?, parent_id = ?, status =? WHERE category_id =?"
    var data_category = [name,description,parent_id,status,category_id]
    db.query(update_category,data_category,(error,row) => {
        if (error){
            res.json({
                error: true,
                message: error
            })
        }else {
            res.json({
                message: "Update Successfully",
                list: row
            })
        }
    })
}

const remove = (req,res) => {
    var {id} = req.params;
    var remove_category = "DELETE FROM category WHERE category_id = ?"
    db.query(remove_category,[id],(error,row) => {
        if (error){
            res.json({
                error: true,
                message: error
            })
        }else {
            res.json({
                message: "Remove Successfully",
                list: row
            })
        }
    })
}

module.exports = {
    getlist,
    create,
    getone,
    update,
    remove
}