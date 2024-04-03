// Здесь будет описан весь скрипт проекта //

stat_page = document.querySelector('.statistics-page')
btn_stat = document.querySelector('.stat-top-row')
main_page = document.querySelector('.main-page')
btn_main = document.querySelector('.main-top-row')
game_page = document.querySelector('.your-game-page')
btn_game = document.querySelector('.game-top-row')
account_page = document.querySelector('.your-account-page')
btn_account = document.querySelector('.img-user-male')
modal_window = document.querySelector('#popup-window')
btn_showpopup = document.querySelector('#signup')
btn_hidepopup = document.querySelector('#signin')
close_btn_popup = document.querySelector('#closepopup')
signin_page_popup = document.querySelector('#signin-page')
btn_signin_popup = document.querySelector('#signin-popup')
signup_page_popup = document.querySelector('#signup-page')
btn_signup_popup = document.querySelector('#signup-popup')



function showPopup() {
    modal_window.style.display = 'flex'
    signin_page_popup.style.display = 'flex'
}
function hidePopup() {
    modal_window.style.display = 'none'
}
btn_showpopup.addEventListener('click', showPopup)
btn_hidepopup.addEventListener('click', showPopup)
close_btn_popup.addEventListener('click', hidePopup)

btn_signup_popup.addEventListener('click', function(){
    signin_page_popup.style.display = 'none'
    signup_page_popup.style.display = 'flex'
})
btn_signin_popup.addEventListener('click', function(){
    signin_page_popup.style.display = 'flex'
    signup_page_popup.style.display = 'none'
})



btn_stat.addEventListener('click', function(){
    stat_page.style.display = 'flex'
    main_page.style.display = 'none'
    game_page.style.display = 'none'
    account_page.style.display = 'none'
})

btn_main.addEventListener('click', function(){
    main_page.style.display = 'flex'
    stat_page.style.display = 'none'
    game_page.style.display = 'none'
    account_page.style.display = 'none'
})

btn_game.addEventListener('click', function(){
    game_page.style.display = 'flex'
    main_page.style.display = 'none'
    stat_page.style.display = 'none'
    account_page.style.display = 'none'
})

btn_account.addEventListener('click', function(){
    account_page.style.display = 'flex'
    game_page.style.display = 'none'
    main_page.style.display = 'none'
    stat_page.style.display = 'none'
})