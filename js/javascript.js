function get_number(element_id) {
    const number = document.getElementById(element_id).value;

    return parseFloat(number);
}

function validate_number(number_a, number_b) {
    return number_b > number_a;
}

const alert_box = document.querySelector(".alert");
const button = document.querySelector("button");
const success_message = `Sucesso! O número B é maior que o número A`;
const failure_message = `Falha! O número A é maior que o número B`

button.addEventListener("click", function(event) {
    const number_a = get_number("number-a");
    const number_b = get_number("number-b");

    if (validate_number(number_a, number_b)) {
        alert_box.innerHTML = success_message;
        alert_box.style.backgroundColor = "#67f567";
        alert_box.style.display = 'block';
    } else {
        alert_box.innerHTML = failure_message;
        alert_box.style.backgroundColor = "#f56767";
        alert_box.style.display = 'block';
    }

    event.preventDefault();
})
