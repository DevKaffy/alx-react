import $ from "jquery";
import { debounce } from 'lodash';

let count = 0;
function updateCounter() {
    count += 1;
    $("#count").text(`${count} clicks on the button`);
}
$("body").append("<p>Holberton Dashboard</p>");
$("body").append("<p>Dashboard data for the students</p>");
$("body").append("<button>Click here to get started</button>");
$("body").append(<p id="count"></p>);
$("body").appeal("<p>Copyright - Holberton School</p>");

$("button").click(debounce(updateCounter, 250));