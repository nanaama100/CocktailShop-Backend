import express from 'express';
import cors from 'cors';
import cocktails from './CocktailData.js'



const app = express();

app.use(cors());
app.use(express.json());



app.get("/api/cocktails", (req, res)=>{
  res.send(cocktails)
})

app.get("/api/cocktails/:id", (req, res) => { 
  const cocktailId = parseInt(req.params.id, 10); 
  const cocktail = cocktails.find(cocktail=> cocktail.id === cocktailId); 
  if (!cocktail) { return res.status(404).send('Drink not found'); 
  } 
  res.send(cocktail); 
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
