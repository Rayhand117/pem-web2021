// popupnya
document.querySelector("#show-login").addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active");
});
document.querySelector(".popup .close-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
});

//selamat datang
document.querySelector('.form-element button').addEventListener('click',function()
{
    if (document.querySelector('#email').value.length > 0 && document.querySelector('#password').value.length > 0)
        document.cookie = 'yes'
    if (document.querySelector('#email').value.length > 0 && document.querySelector('#password').value.length > 0)
        location.reload();
});
if (document.cookie == 'yes')
    {
        document.querySelector ('a#show-login').textContent = "Selamat Datang"
    };
    document.querySelector('.tombol').addEventListener('click',function()
    {
        document.cookie = 'no'
        location.reload();
    });