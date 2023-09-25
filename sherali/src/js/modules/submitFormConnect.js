const inputName = document.querySelector('.input-name');
const inputPhone = document.querySelector('.input-phone');

function submitFormConnect() {

    const form = document.getElementById('connect');

    const errorName = document.querySelector('.error-name');
    const errorPhone = document.querySelector('.error-phone');
    const listSocials = document.querySelectorAll('.connect-list__checkbox');
    const errorSocial = document.querySelector('.error-social');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!checkInput(inputName, errorName, 'name')) {
            return;
        }
        if (!checkInput(inputPhone, errorPhone, 'phone')) {
            return;
        };
        if (!checkInputSocial(listSocials, errorSocial)) {
            return;
        }

        success();
    });

    [inputName, inputPhone].forEach(inp => {
        inp.addEventListener('input', () => {
            [errorName, errorPhone].forEach(err => {
                err.textContent = '';
            })
        })
    });
    listSocials.forEach(el => {
        el.addEventListener('click', () => {
            errorSocial.textContent = '';
            if (!Array.from(listSocials).some((el) => el.checked)) {
                errorSocial.textContent = 'Выберите предпочтительный способ связи!';
            }
        })
    })
};

function success() {
    const modal = document.querySelector('.modal');
    const btnClose = document.querySelector('.success__btn');
    const btnOpen = document.querySelector('.connect__btn');
    const modalContent = document.querySelector('.modal__content');
    modal.classList.add('d-flex');
    document.body.classList.add('overflowYHidden');
    inputName.value = ''
    inputPhone.value = ''

    btnClose.addEventListener('click', () => {
        modal.classList.remove('d-flex');
        document.body.classList.remove('overflowYHidden')
    })
    modalContent.addEventListener('click', e => e.stopPropagation());
    document.addEventListener('click', (e) => {
        if (e.target !== modalContent && e.target !== btnOpen) {
            modal.classList.remove('d-flex');
            document.body.classList.remove('overflowYHidden')
        }
    })

}


function checkInputSocial(list, error) {

    if (!Array.from(list).some((el) => el.checked)) {
        error.textContent = 'Выберите предпочтительный способ связи!';
        return false;
    }

    return true;
}

function checkInput(input, error, type) {
    switch (type) {
        case 'name':
            {
                if (input.value.length === 0) {
                    error.textContent = ' Имя не должно быть пустым';
                    return false;

                } else if (input.value.length <= 2) {
                    error.textContent = 'Имя долно быть длиннее 2х символов';
                    return false;
                } else {
                    return true;
                }
            }
        case 'phone':
            {
                if (input.value.length === 0) {
                    error.textContent = 'Телефон не должен быть пустым!';
                    return false;
                } else if (input.value.length !== 11) {
                    error.textContent = 'Телефон должен состоять из 11 цифр!';
                    return false;
                }

            }
        default:
            {
                return true;
            }
    }
}

export default submitFormConnect;