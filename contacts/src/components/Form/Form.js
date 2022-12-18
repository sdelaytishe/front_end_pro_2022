import React from 'react';

function Form({onSave, contact}) {
    function onFormSubmit(e) {
        e.preventDefault();
        const form = e.target.elements;
        onSave({
            id: form.id.value,
            name: form.name.value,
            surname: form.surname.value,
            email: form.email.value,
        });

        e.target.reset();

    }
    return (
        <div className={"row"}>
            <form onSubmit={onFormSubmit}>
                <div className={"three columns"}>
                    <input name={"name"}
                           type={"text"}
                           placeholder={"name"}
                           defaultValue={contact.name}/>
                </div>

            <div className={"three columns"}>
                <input name={"id"}
                       type={"hidden"}
                       defaultValue={contact.id}/>
            </div>
            <div className={"three columns"}>
                <input name={"surname"}
                       type="text"
                       placeholder={"surname"}
                       defaultValue={contact.surname}/>
            </div>
            <div className={"three columns"}>
                <input name={"email"}
                       type="text"
                       placeholder={"email"}
                        defaultValue={contact.email}/>
            </div>
            <div className={"three columns"}>
                <button>Save</button>
            </div>
            </form>
        </div>
    );
}

export default Form;