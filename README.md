# ttochka frondEndTest
# Server ngnix: http://tochka.kekcheburek.ru/

bootstrap, less  <br>
JSON array => myTest/src/app/mock-data  <br>
First and second page components => myTest/src/app/routing <br>
Tabs components => myTest/src/app/tabs <br>
Character service => myTest/src/app/characters.service <br>

```
Написать AngularJS приложение

Должно быть две страницы
Первая: страница со списком объектов вида
[
{
label: ‘События’, 
content: ‘Все события тут’
}, 
{
label: ‘Аналитика’, 
content: ‘Аналитика тут’
}
]

Можно выбрать несколько элементов из списка (обычные чекбоксы)
После выбора элементов можно перейти на вторую страницу, где находится компонент табов из выбранных элементов на первой странице. По переключению между табами меняем контент и показываем активный таб.

Должно быть два компонента, tabs и tab
Tab ребёнок tabs 
Вёрстка на своё усмотрение, должно быть просто симпатично.

Что обязательно использовать:
github/bitbucket или любой репозиторий, который мы сможем склонировать
https://github.com/angular-ui/ui-router
https://docs.angularjs.org/guide/component
https://docs.angularjs.org/api/ng/directive/ngTransclude
ES2015+ (но лучше TypeScript)
CSS препроцессор

Проект должен быть не просто написан и работать, он должен быть поддерживаемым, расширяемым, он должен соответствовать современным реалиям frontend приложений

```
