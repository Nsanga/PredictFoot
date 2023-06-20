const localURL = "http://localhost:5000";
const liveURL = "http://45.92.111.13:5000";
console.log("::::",liveURL);

module.exports = {
    url:process.env.NODE_ENV ===  'production' ? liveURL : localURL
}