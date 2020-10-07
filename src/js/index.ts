import { resolve } from "../../webpack.config"

new Vue({
    // TypeScript compiler complains about Vue because the CDN link to Vue is in the html file.
    // Before the application runs this TypeScript file will be compiled into bundle.js
    // which is included at the bottom of the html file.
    el: "#app",
    data: {
        text: "",
        methodType: "",
        resolvedText: ""
    },
    methods: {
        resolveTextManip() {
            this.resolveText = ""
            if (this.methodType == "") {
                this.resolvedText = "Please pick a way to manipulate the input"
            }
            else if (this.methodType == "toUpper") {
                this.resolvedText = this.text.toUpperCase()
            }
            else if (this.methodType == "toLower") {
                this.resolvedText = this.text.toLowerCase()
            }
            else if (this.methodType == "scramble") {
                this.resolvedText = scrambleString(this.text)
            }
        }
    }
})
 function randomTrueFalse() : boolean{
     return Math.floor(Math.random() * (2)) == 1 ? true : false;
 }
 function scrambleString(input : string) : string{
    var scrabledString : string = ""
    for (let index = 0; index < input.length; index++) {
        scrabledString += randomTrueFalse() ? input.charAt(index).toUpperCase() : input.charAt(index).toLowerCase()
    }
    return scrabledString
 }