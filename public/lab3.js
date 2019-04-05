class Data {
    constructor(subject, msg, name, phone, email) {
        this.subject = subject;
        this.msg = msg;
        this.name = name;
        this.phone = phone;
        this.email = email;
    }
}

class UI {
    static displayData() {
        const datas = Store.getData();
        datas.forEach((Data) => UI.addDataToList(Data));
    }

    static addDataToList(Data) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
      <td>${Data.subject.value}</td>
      <td>${Data.msg.value}</td>
      <td>${Data.name.value}</td>
      <td>${Data.phone.value}</td>
      <td>${Data.email.value}</td>
      <td><a href="#" class="btn btn-danger btn-sm delete"> ลบ </a></td>
    `;

        list.appendChild(row);
    }

    static deleteData(el) {
        // if element contains .delete class
        if (el.classList.contains('delete')) {
            // remove <a> -> <td> -> <tr>       
            el.parentElement.parentElement.remove();
        }
    }

    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#here');
        container.insertBefore(div,form);
        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }

    static clearFields() {
        document.querySelector('#subject').value ='';
        document.querySelector('#msg').value='';
        document.querySelector('#name').value='';
        document.querySelector('#phone').value='';
        document.querySelector('#email').value='';
    }
}


class Store {
    static getData() {
        let datas;
        if (localStorage.getItem('datas') === null) {
            datas = [];
        } else {
            datas = JSON.parse(localStorage.getItem('datas'));
        }

        return datas;
    }


    static addData(data) {
        const datas = Store.getData();
        datas.push(data);
        localStorage.setItem('datas', JSON.stringify(datas));
    }

    static removeData(email) {
        const datas = Store.getData();

        datas.forEach((data, index) => {
            if (data.email.value === email.value) {
                datas.splice(index, 1);
            }
        });

        localStorage.setItem('datas', JSON.stringify(datas));
    }
}

document.addEventListener('DOMContentLoaded', UI.displayData);
const myForm = document.querySelector('#my-form');
myForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const subjectInput = document.querySelector('#subject');
    const msgInput = document.querySelector('#msg');
    const nameInput = document.querySelector('#name');
    const phoneInput = document.querySelector('#phone');
    const emailInput = document.querySelector('#email');
    const userList = document.querySelector('#users');
    if (nameInput.value === '' || emailInput.value === '' || subjectInput.value === '' || msgInput.value === '' || phoneInput.value === '') {
        UI.showAlert('PLEASE FILL IN ALL FIELD', 'danger');
    } else {
        const data = new Data(subjectInput, msgInput, nameInput, phoneInput, emailInput);
        UI.addDataToList(data);
        Store.addData(data);
        UI.showAlert('DATA ADDED', 'success')
        UI.clearFields();
    }
});
const list = document.querySelector('#book-list');
list.addEventListener('click', (e) => {
    e.preventDefault();
    UI.deleteData(e.target);
    Store.removeData(e.target.parentElement.previousElementSibling.textContent);
    UI.showAlert('DATA REMOVED', 'success');
});




