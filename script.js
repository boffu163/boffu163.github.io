// Здесь будет описан весь скрипт проекта //

stat_page = document.querySelector('.statistics-page')
btn_stat = document.querySelector('.stat-top-row')
main_page = document.querySelector('.main-page')
btn_main = document.querySelector('.main-top-row')
game_page = document.querySelector('.your-game-page')
btn_game = document.querySelector('.game-top-row')
account_page = document.querySelector('.your-account-page')
btn_account = document.querySelector('.img-user-male')



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