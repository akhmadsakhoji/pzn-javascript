import express from "express";

const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.send("Hello World!");
});

app.get('/akhmadsakhoji', (req, res)=>{
    res.send("Akhmad Sakhoji Jamaludin");
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

