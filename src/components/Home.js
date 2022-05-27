import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Recipe from './Recipe';
import { useNavigate } from 'react-router-dom'

function Home(){
    var [recipes, setRecipes] = useState([]);
    let navigate = useNavigate();
    useEffect(()=>{
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
        });
        
        if(!localStorage.getItem('token')){
            navigate('/users/sign-in');
        }

    }, [recipes]);
    
    return(
        <div>
            <h2 className='mt-4'>All</h2>
            <div className='col d-flex flex-wrap justify-content-center'>
            { 
                // localStorage.getItem('token')
                recipes.map((recipe) => <Recipe recipe={recipe} key={recipe._id}></Recipe>)
                // : navigate('/users/sign-in')
            }
            </div>
        </div>
    )
}

export default Home;
