// These will require express to be used for this server
const express=require('express')
// Anywhere express is needed we can call for app
const app= express()
// CORS will allow us to use this API on a non network (local) connection
const cors=require('cors')
const { response } = require('express')
// This will allow us to set the port number we want to use
const PORT=8000

// This will tell express that we want to use CORS
app.use(cors())


// This section will be used for populating our API with information
const leavers={
// ex.
//     '21 savage':{
//         'age': 29,
//     'birthName': 'Shéyaa Bin Abraham-Joseph',
//     'birthLocation': 'London, England',
//     }, 
    'unknown':{
        // 'xxx':'xxx',
        // 'xxx':'xxx',
        // 'xxx':'xxx',
    },
}


// This will find out when someone is trying to get to the index of the site URL
//  and respond by sending them the index.html file
app.get('/',(request,response)=>{
    response.sendFile(__dirname+'/index.html')
})

// This will find out when someone is trying to access the API URL
//  and respond by sending them the API information
app.get('/api/:name',(request,response)=>{
    const exSouls=request.params.name.toLocaleLowerCase()
    if(leavers[exSouls]){
        response.json(leavers[exSouls])
    }else{
        response.json(leavers['unknown'])
    }
})


// This last section will actually set up the server and allow it to listen on a port
app.listen(process.env.PORT || PORT, ()=>{
    console.log(`'The API server for people who abandoned me is running on port ${PORT}`)
})