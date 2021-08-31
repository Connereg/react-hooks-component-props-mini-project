import React from "react";

function emojiForMinutes(minutes){
    const interval = minutes < 30 ? 5 : 10;
    // If minutes is less than 30, interval is 5, else interval is 10
    const chosenEmoji = minutes < 30 ? "☕️" : "🍱"
    // If minutes is less than 30, chosen emoji is "☕️", else chosen emoji is "🍱"

    let emojis = "";
    // Empty variable to contain number of emoji icons
    for(let i = 0; i < minutes; i += interval) {
        emojis += chosenEmoji;
        // I starts as 0, for each time i is less than minutes value, add interval value to i
        // each time this happens, add another of the chosen emoji icons to the empty variable "emojis"
    }
    return emojis;
        // After the loop is finished, take the variable storing the added emoji icons from the above process and return it
}


function ArticleCompile({title, date = "January 1, 1970", preview, minutes}){
    const emojisUtilized = emojiForMinutes(minutes)

    return (
    <article>
        <h3>{title}</h3>
        <small>{date} • {emojisUtilized} {minutes} Minute Read</small>
        <p>{preview}</p>
    </article>
    )
}

export default ArticleCompile