let phone_link = document.getElementById("phone_link");
let business_logo = document.querySelector(".business_logo");

phone_link.setAttribute("href","tel:+919451081812");

function getBase64(e)
{
    let file = e.target.files[0];

    let reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = function()
    {
        business_logo.src=reader.result;
    }

}
