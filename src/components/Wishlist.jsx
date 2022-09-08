import { useEffect , useState } from "react";
import AnimesList from "./Animeslist";
import useFetch from "./useFetch";

const Wishlist = () => {

   let {data : animes , error , pending } = useFetch("https://api.jikan.moe/v4/anime");
   let [wish, setwish] = useState(null);

   useEffect(()=>{
    var w = localStorage.getItem("wish");
    w = JSON.parse(w);
    setwish(w);
    } , [])


    return ( 
        <div>
            {pending &&<div class="spinner-border text-danger" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>}

            {animes && <AnimesList animes={animes.filter((anime)=>{return wish.includes(anime.mal_id) })} /> }


        </div>
    );
}
 
export default Wishlist;