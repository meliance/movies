import { Routes, Route } from "react-router-dom";
import {MovieList, MovieDetail, Search, PageNotFound} from "../pages"

export const AllRoutes = () => {
  return (
    <div className="bg-slate-800">
      <Routes>
      <Route path="/" element={<MovieList apiPath="movie/now_playing" title = "Home" />}/>
      <Route path="movie/:id" element={<MovieDetail />} />
      <Route path="movies/popular" element={<MovieList apiPath="movie/popular" title = "Popular" />}/>
      <Route path="movies/top" element={<MovieList apiPath="movie/top_rated" title = "TOp Rated" />}/>
      <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcomig" title = "Upcoming" />}/>
      <Route path="search" element={<Search apiPath="search/movie" />}/>
      <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </div>
  )
}
