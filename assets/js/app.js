// alert("hiiiiiiiiiiiiiii");

// let cl = console.log()

let moviesoptionrow = document.getElementById("moviesoption");
let searchInput = document.getElementById("search");


function moviearray(array){
	let result = "";
	
	array.forEach(function (ele){
		result += `<div class="col-md-3">
					<div class="card">
					<figure class="imgFig">
						<img src= '${IMG_PATH}${ele.poster_path}' alt='${ele.title}' title= '${ele.title}'
						class="img-fluid cardImg">
						<figcaption class="p-2">
							<div class="row align-items-center">
							<div class="col-sm-9">
							<p class="imgTitle text-white">
							${ele.title}
							</p>
							</div>
							<div class="col-sm-3 ">
							<p class="ratValue font-weight-bold ${ratingColor(ele.vote_average)} text-success text-center">
              ${ele.vote_average}
							</p>
							</div>	
							</div>
						</figcaption>
						<div class="overview p-4">
						
						<h4>Overview</h4>
						<p>${ele.overview}</p>
						
						</div>
					</figure>
				
					</div>
				</div>
		`
		
	})
	return result;
}

moviesoptionrow.innerHTML = moviearray(results);




searchInput.addEventListener("keyup", searchMovie);

function searchMovie(event){
  let inputVal = event.target.value;
  let moviearray1 = [];

   if(inputVal.length){
    
     if(event.keyCode === 13){
      //console.log(inputVal);

    results.forEach(function (ele){
       if(ele.title.toLowerCase() === inputVal.toLowerCase())){
        console.log(ele);
		
        moviearray1.push(ele);
         console.log(moviearray1);

       moviesoptionrow.innerHTML = moviearray(moviearray1);
       }
     })

   }} else{
     moviesoptionrow.innerHTML = moviearray(results);
   }
  
}



function ratingColor (ele){
		if(ele >= 8){
			return 'text-success';
		}else if(ele >= 4){
			return 'text-warning';
		}else{
			return 'text-danger';
		}
	
	}
























// function searchMovie(event){
//   // console.log("keyup triggered");
// 	let search1 = this.value;
//   let movieList = [];

 
// 	if(search1.length){

// 	if(event.keyCode === 13){
		
// 		results.forEach(function(ele){
// 			if(ele.title.toLowerCase().includes(search1.toLowerCase())){
// 				console.log(ele);
// 				movieList.push(ele);

// 				moviesoptionrow.innerHTML=moviearray(movieList);
// 			}
			
// 		});
// 		console.log(moviesoptionrow);
// 	}}

//   else{
//     moviesoptionrow.innerHTML=moviearray(results);
//   }

	
// }














