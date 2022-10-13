import React, {Component} from 'react';

class form extends Component {
    state = {
        values : {
        userName: '',
        password: '',
        isLoggedIn: false,
        displayUserLoggedInMessage: false
        },
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('SUCCCESS');
        // we will change this behavior to display a log in prompt
        // and then will add validation
    }

    handleInputChange = (e) => {
        this.setState ({
            values: { [e.target.name]: e.target.value },
        });
    };

    render() {
    const { values } = this.state;
    return (
        <form onSubmit={this.hanndleSubmit}>
            <input 
                type="text"
                name="userName"
                value={values.userName}
                onChange={this.handleInputChange}
                required="true"

            />
            <input
                type="text"
                name="password"
                value={values.password}
                onChange={this.handleInputChange}
                required="true"
            />

        </form>
    );
    }
 }