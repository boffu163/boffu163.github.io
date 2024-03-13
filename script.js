// Здесь будет описан весь скрипт проекта //

stat_page = document.querySelector('.statistics-page')
btn_stat = document.querySelector('.stat-top-row')
btn_stat.addEventListener('click', function(){
    stat_page.style.display = 'flex'
    main_page.style.display = 'none'
})



main_page = document.querySelector('.main-page')
btn_main = document.querySelector('.main-top-row')
btn_main.addEventListener('click', function(){
    main_page.style.display = 'block'
    stat_page.style.display = 'none'
    your_game_page.style.display = 'none'
})
btn_main1 = document.querySelector('.main-top-row-link')
btn_main1.addEventListener('click', function(){
    main_page.style.display = 'block'
    stat_page.style.display = 'none'
})



your_game_page = document.querySelector('.your-game-page')
btn_your_game = document.querySelector('.game-top-row')
btn_your_game.addEventListener('click', function(){
    main_page.style.display = 'none'
    stat_page.style.display = 'none'
    your_game_page.style.display = 'flex'
})
btn_main2 = document.querySelector('.main-top-row-link2')
btn_main2.addEventListener('click', function(){
    main_page.style.display = 'block'
    your_game_page.style.game = 'none'
})
btn_your_game1 = document.querySelector('.game-top-row-link')
btn_your_game1.addEventListener('click', function(){
    stat_page.style.display = 'none'
    your_game_page.style.display = 'flex'
})
btn_stat1 = document.querySelector('.stat-top-row-link')
btn_stat1.addEventListener('click', function(){
    stat_page.style.display = 'flex'
    your_game_page.style.display = 'none'
})
btn_your_account_page1 = document.querySelector('.game-top-row-link2')
btn_your_account_page.addEventListener('click', function(){
    your_game_page.style.display = 'none'
    your_account_page.style.display = 'flex'
})



your_account_page = document.querySelector('.your-account-page')
btn_your_account_page = document.querySelector('.img-user-male')
btn_your_account_page.addEventListener('click', function(){
    main_page.style.display = 'none'
    stat_page.style.display = 'none'
    your_game_page.style.display = 'none'
    your_account_page.style.display = 'flex'
})
btn_main3 = document.querySelector('.main-top-row-link3')
btn_main3.addEventListener('click', function(){
    main_page.style.display = 'block'
    your_account_page.style.game = 'none'
})
btn_stat2 = document.querySelector('.stat-top-row-link1')
btn_stat2.addEventListener('click', function(){
    stat_page.style.display = 'flex'
    your_account_page.style.display = 'none'
})