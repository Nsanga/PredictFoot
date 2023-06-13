const localURL = "http://localhost:5000";
const liveURL = "";
console.log("::::",localURL);

module.exports = {
    url:process.env.NODE_ENV ===  'production' ? liveURL : localURL
}