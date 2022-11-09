// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import "bootstrap"

import jquery from "jqeury"
window.jQuery = jquery
window.$ = jquery

$(function(){
  console.log("hello world")
})
