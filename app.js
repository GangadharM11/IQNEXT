import express, { query } from "express"
import { con} from "./db.js"
import { Console } from "console"


const app= express()
// const Router = express.Router();

app.listen(5000,()=>{
    console.log("hiii")
})

app.get("/fifa/api/v1/statistics/get-all-details",(req,res)=>{
    con.query('select * from player_stats',(err,results)=>{
        if(err){
            console.error(err);
        }
        //console.log(results);
        res.send(results);
  });
});

app.get("/fifa/api/v1/statistics/get-by-id/:id",(req,res)=>{
    con.query('select * from player_stats where id= ?',[req.params.id],(err,results)=>{
        if(err){
            console.error(err);
        }
        res.send(results)
        //console.log(results);
  });
});

app.get("/fifa/api/v1/statistics/apply-filter",(req,res)=>{

    const {games,minutes,goals,birth_year} = req.query
    console.log(req.query);
    con.query(`select * from player_stats where games= ${parseInt(games)} and minutes = ${parseInt(minutes)} and goals = ${parseInt(goals)} and birth_year = ${parseInt(birth_year)}`,[parseInt(games), parseInt(minutes),parseInt(goals),parseInt(birth_year)],(err,result)=>{
        if(err){
            console.log(err)
        }
        res.send(result)
    })
})

app.get("/fifa/api/v1/defense/get-all-details",(req,res)=>{
    con.query('select * from player_defence',(err,results)=>{
        if(err){
            console.error(err);
        }
        //console.log(results);
        res.send(results);
  });
});

app.get("/fifa/api/v1/defense/get-by-id/:id",(req,res)=>{
    con.query('select * from player_defence where id= ?',[req.params.id],(err,results)=>{
        if(err){
            console.error(err);
        }
        res.send(results)
        //console.log(results);
  });
});

app.get("/fifa/api/v1/defense/apply-filter",(req,res)=>{
    // parseInt(games), parseInt(minutes),parseInt(goals),parseInt(birth_year
    const {position,team,tackles,tackles_won} = req.query
    console.log(req.query);
    con.query(`select * from player_defence where position= ? and team = ? and tackles = ${parseInt(tackles)} and tackles_won = ${parseInt(tackles_won)}`,[position,team,parseInt(tackles),parseInt(tackles_won)],(err,result)=>{
        if(err){
            console.log(err)
        }
        res.send(result)
    })
})