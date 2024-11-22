import React, { useEffect, useState } from "react";
import './CocktailSet.css';
import axios from 'axios';
import {Link} from 'react-router-dom'


// importing bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';




const AllCocktails =()=>{

        const [filterData, setDrinks] = useState([]); 
        const[data, setData]= useState([])


        useEffect(()=>{
            fetchAllDrinks()
        }, [])

 
    
    const fetchAllDrinks=async()=>{
        try{
            const response = await axios.get('http://localhost:5000/api/cocktails');
            const MappingData = response.data.map(item => ({ 
                id:item.id,
                img: item.img, 
                name: item.name, 
                price: `$${item.price}`, 
                category: item.category // Assuming the category property exists 
            }));
            setDrinks(MappingData)  
            setData(MappingData)
        }
        catch(error){
            console.log('error: ', error)
        }
    }

  

 
    const fetchCategoryDrinks1=()=>{
        const fetchAlcohol = data.filter(item=>item.category==='alcoholic');
        setDrinks(fetchAlcohol)
    }

    const fetchCategoryDrinks2=()=>{
        const NonfetchAlcohol = data.filter(item=>item.category==='non-alcoholic');
        setDrinks(NonfetchAlcohol)
    }

    const fetchCategoryDrinks3=()=>{
        const fetchSmoothies = data.filter(item=>item.category==='smoothies');
        setDrinks(fetchSmoothies)
    }




    return(
        <>
        <div className="BackgroundImage-Boss">
        <div className="BackgroundImage-Shop">
            <div className="BackgroundShop-Cover">
                <h1>Our Shop</h1>
            </div>
        </div>
        </div>

        <div className="ContentShop">
            <div className="mb-3 ButtonsShop"> 
                <button onClick={fetchAllDrinks}>All</button> 
                <button onClick={fetchCategoryDrinks1}>alcoholic</button> 
                <button onClick={fetchCategoryDrinks2}>non-alcoholic</button> 
                <button onClick={fetchCategoryDrinks3}>smoothies</button> 
            </div>

            <div className="container ProductsAll"> 
            <div className="row"> 
                {Array.isArray(filterData) && filterData.map(cocktail => ( 
                    <div className="col-md-4" key={cocktail.id}> 
                    <div className="card"> 
                        <img src={cocktail.img} className="card-img-top" alt={cocktail.name}/>
                        <div className="card-body"> 
                            <h5 className="card-title">{cocktail.name}</h5> 
                            <p className="card-text">{cocktail.price}</p> 
                            <Link to={`/cocktails/${cocktail.id}`}><button className="ButtonShop-Each">View More</button></Link>
                        </div>
                    </div> 
                    </div> 
                ))}
                </div> 
            </div>
        </div>
        </>
    )
}


export default AllCocktails;