import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './SingleCocktail.css'

// importing bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const DrinkDetails = () => {
    const { id } = useParams();
    const [cocktail, setCocktail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => { 
        const fetchDrink = async () => { 
            try { const response = await axios.get(`http://localhost:5000/api/cocktails/${id}`); 
            setCocktail(response.data); 
            setLoading(false); 
            } catch (error) { 
                console.error('Error fetching drink details:', error); // Log the error to the console 
                setError('Error fetching drink details'); 
                setLoading(false); } }; 
        fetchDrink(); 
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
        <div className='singleCocktail-Background'>
            <div>
               <h1>Our Shop</h1> 
            </div>
        </div>
        
        <div class="container bootdey">
                <div class="col-md-12">
                <section class="panel">
                    <div class="row panel-body">
                        <div class="col-md-6">
                            <div class="pro-img-details">
                                <img src={cocktail.img} alt=""/>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <h4 class="pro-d-title">
                               {cocktail.name}
                            </h4>
                               
                            <div class="product_meta">
                                <span class="posted_in"> <strong>Category: </strong>{cocktail.category}</span>
                                <span><p><strong>Ingredients:</strong> {cocktail.ingredients}</p></span>
                                <span><p><strong>Instructions: </strong>{cocktail.instructions}</p></span>
                            </div>
                            <div class="m-bot15"> 
                                <strong>Price : </strong> <span class="amount-old">$544</span>  
                                <span class="pro-price"> ${cocktail.price}</span>
                            </div>
                            <div class="form-group">
                                <label>Quantity</label>
                                <input type="quantiy" placeholder="1" class="form-control quantity"/>
                            </div>
                            <p>
                                <button class="btn btn-round btn-danger" type="button"><i class="fa fa-shopping-cart"></i> Add to Cart</button>
                            </p>
                        </div>
                    </div>
                </section>
                </div>
                </div>
          </>
    );
};

export default DrinkDetails;
