import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from 'react'

function RecipeInfo(){
    const { id } = useParams();
    const [recipeInfo, setRecipeInfo] = useState({
        name: '',
        ingredients: [],
        steps: [],
        timers: []
    });
    const navigate = useNavigate();
    var i=0;
    useEffect(()=>{
        if(!localStorage.getItem('token')){
            return navigate('/users/sign-in');
        }
        axios({
            method: "get",
            url: `http://localhost:8000/api/get-recipe-info/${id}`,
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })
        .then((data) => {
            if(data.status == 200){
                setRecipeInfo(data.data.recipe);
                console.log(data);;
            }
            else{
                navigate('/');
            }
        })
        .catch(err => {
            navigate('/')
        });

    }, []);

    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-12">
                    <h2>{recipeInfo.name}</h2>
                </div>
                <div className="col-12 m-3">
                    <img src={`${recipeInfo.imageURL}`} alt={`${recipeInfo.name}`} className="mx-auto" style={{width: 400}}></img>
                </div>
                <div className="col-12 ingredients">
                    <h4 className="mt-4">Ingredients</h4>
                    {   
                        recipeInfo.ingredients.map(x => (
                            <div>
                                <span key={i++}>{x.name} </span>
                                <span key={i++}>({x.type}) </span>
                                <span key={i++}>Quantity: {x.quantity} </span>
                            </div>
                        ))
                    }
                </div>
                <div className="col-12 steps">
                    <h4 className="mt-4">Steps</h4>
                    <ol>
                    {   
                        recipeInfo.steps.map(x => (
                            
                            <li key={i++}>{x} </li>
                            
                        ))
                    }
                    </ol>
                </div>

                <div className="col-12 mt-5">
                    {
                        recipeInfo && 
                        <h5>Ta Da! Your dish is ready!</h5>
                    }
                </div>

            </div>
        </div>
    )
}

export default RecipeInfo;