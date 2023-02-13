import { Button, Paper, TextField } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import SuperTextField from '../../common/components/form/SuperTextField';
import useUser from '../hooks/useUser';

const EMAIL_VALIDATION_REGEXP =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

function UserForm() {
    const { id } = useParams();
    const { user, saveUser } = useUser(id);

    const navigate = useNavigate();

    function validate(values) {
        const errors = {};

        if (values.name === '') {
            errors.name = 'Name is Required';
        }
        if (values.surname === '') {
            errors.surname = 'Surname is Required';
        }

        if (!EMAIL_VALIDATION_REGEXP.test(values.email)) {
            errors.email = 'Email is invalid';
        }

        if (values.email === '') {
            errors.email = 'Email is Required';
        }

        return errors;
    }

    return (
        <Paper>
            <Formik
                initialValues={user}
                enableReinitialize
                onSubmit={(values) => {
                    saveUser(values).then(() => navigate('..'));
                }}
                validate={validate}
                validateOnMount
            >
                <Form>
                    <SuperTextField
                        sx={{ marginBottom: 2 }}
                        fullWidth
                        name="name"
                        label="Name"
                    />
                    <SuperTextField
                        sx={{ marginBottom: 2 }}
                        fullWidth
                        name="surname"
                        label="Surname"
                    />
                    <SuperTextField
                        sx={{ marginBottom: 2 }}
                        fullWidth
                        name="email"
                        label="Email"
                    />
                    <Button variant="contained" type="submit" color="primary">
                        Save
                    </Button>
                    <Button
                        variant="text"
                        color="error"
                        to=".."
                        component={NavLink}
                    >
                        Cancel
                    </Button>
                </Form>
            </Formik>
        </Paper>
    );
}

export default UserForm;