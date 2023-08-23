import con from "./db.js"
import express from "express"

const Router = express.Router();

Router.get("/",(req,res)=>{
    con.query('select * from player_stats',(err,results)=>{
        if(err){
            console.error(err);
        }
        //console.log(results);
        res.send(results);
  });
});

Router.get("/:id",(req,res)=>{
    con.query('select * from player_stats where id= ?',[req.params.id],(err,results)=>{
        if(err){
            console.error(err);
        }
        //res.send(results)
        console.log(results);
  });
});

Router.get("/",(req,res)=>{
    con.query('select * from player_stats where games= ?,minutes= ?,goals= ? and birth_year= ?',[req.params.id],(err,results)=>{
        if(err){
            console.error(err);
        }
        //res.send(results)
        console.log(results);
  });
});