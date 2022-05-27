function Recipe(props){

    var total_time = 0;
    props.recipe.timers.forEach(x => total_time+= x);
    
    return (
        <div className="card m-5" style={{width: "18rem"}}>
            <img src={props.recipe.imageURL} className="card-img-top my-4" alt="..."/>
            <div className="card-body">
                <h5 className="card-title" style={{color: 'black'}}>{props.recipe.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted" style={{color: 'black'}}>Total time: {total_time}</h6>
                {/* <p className="card-text" style={{color: 'black'}}>${props.product.price}</p>
                <p className="card-text" style={{color: 'black'}}>{props.product.product_details}</p>
                <a href="/product/info/{product.asin}" className="btn btn-primary">Buy Now</a> */}
            </div>
        </div>
    )
}

export default Recipe;