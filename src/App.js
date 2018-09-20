/**
 * @Author: harsha
 * @Date:   2018-09-13T13:58:38+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2018-09-20T11:45:35+05:30
 */

import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import SubmitDynamicForms from './components/DynamicForms/DynamicForms';
import { reduxForm, Field } from 'redux-form';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<Container>
						<h1 className="App-title">Dynamic Forms</h1>
					</Container>
				</header>
				<Container>
					<SubmitDynamicForms />
				</Container>
			</div>
		);
	}
}

export default App;
