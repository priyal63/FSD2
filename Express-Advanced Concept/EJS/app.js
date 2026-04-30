var expr = require('express')
app = expr()

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('f',{name:'abc'})
})

app.listen(3000)