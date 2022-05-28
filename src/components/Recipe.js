import { useEffect, useState } from "react";

function Recipe(props){

    var totalTime = function(timers){
        let total_time = 0;
        timers.forEach(x => total_time += x);
        return total_time;
    }
    
    return (
        <div className="card m-5" style={{width: "18rem"}}>
            <img src={props.recipe.imageURL} className="card-img-top my-4" alt="..."/>
            <div className="card-body">
                <h5 className="card-title" style={{color: 'black'}}>{props.recipe.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted" style={{color: 'black'}}>Total time: {totalTime(props.recipe.timers)} mins</h6>
                <a href={`/recipe/${props.recipe._id}`} className="btn btn-primary mt-2">Read Recipe</a>
            </div>
        </div>
    )
}

export default Recipe;