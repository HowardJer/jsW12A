class KanyeTweet {
    content = "";

    getNetTweet() {
        // console.log("in the class");
        let ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
                let tweetObject = JSON.parse(this.responseText);
                console.log(tweetObject)
                document.getElementById("quote").innerHTML = tweetObject.quote;
                
            }else if(this.readyState !=4) {
                document.getElementById("quote").innerHTML = "Loading";
            }
            // else {
            //     document.getElementById("quote").innerHTML = "Error";
            // }
        }
        ajax.open("GET", "https://api.kanye.rest/", true);
        ajax.send();

    }

}

document.getElementById("button").addEventListener("click", function() {
    let anotherTweet = new KanyeTweet()
    anotherTweet.getNetTweet();
});