class DataSource {
    static searchClub(keyword) {
        return fetch(`https://sports-api.dicoding.dev/teams/search?t=${keyword}`)
    }
 }
  
 export default DataSource;