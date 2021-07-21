export const movieData = async(search) => {
    const url = "https://api.themoviedb.org/3/search/movie?api_key="
    const key = "3a2e6149719a4ae90316535ebd4217bc";
    const res = await fetch(`${url}${key}&query=${search}`);
    const data = await res.json();
    console.log(data['results'][0]);
    return data['results'][0];
}