 export function successSubmit(container, text = 'Ваш запрос отправлен с Вами свяжется менеджер в течении 15 минут') {
     const div = document.createElement('div');
     div.classList.add('submit');
     const title = document.createElement('p');
     title.classList.add('submit__title');
     title.textContent = text;

     div.append(title);
     container.innerHTML = '';
     container.append(div);
 }
