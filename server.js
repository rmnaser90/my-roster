const express = require('express')
const app = express()
const path = require('path')
const APImanager = require('./APImanager')

const apiManager = new APImanager


setInterval(() => {
apiManager.getPlayers()
}, 1000*60*60*24);

apiManager.getPlayers()


app.use(express.static(path.join(__dirname,'dist')))
app.use(express.static(path.join(__dirname,'node_modules')))



app.get('/teams/:teamName',function (req,res) {
const teamName=req.params.teamName
res.send(apiManager.loadTeamPlayers(teamName))
  
})





const port=3001
app.listen(port,function () {
console.log(`server is up and running at port: ${port}`);

})
