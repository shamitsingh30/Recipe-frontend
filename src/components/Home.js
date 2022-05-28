import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Recipe from './Recipe';
import { BrowserRouter as Navigate, useNavigate } from 'react-router-dom';

function Home(){
    var [recipes, setRecipes] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem('token')){
            return navigate('/users/sign-in');
        }
        axios({
            method: "get",
            url: "http://localhost:8000/api",
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })
        .then((data) => {
            setRecipes(data.data.recipes);
            console.log(data);
        })
        .catch(err => {
            navigate('/users/sign-in')
        });

    }, []);
    
    return(
        
        <div>
                <h2 className='mt-4'>All</h2>
                <div className='col d-flex flex-wrap justify-content-center'>
                    { 
                        recipes.map((recipe) => <Recipe recipe={recipe} key={recipe._id}></Recipe>)
                    }
                </div>
            </div>
    )
}

export default Home;
