/**
 * @Author: harsha
 * @Date:   2018-09-13T14:45:50+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2018-09-13T22:11:06+05:30
 */
import _ from 'lodash';
import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

const columns = _.times(16, i => (
	<Grid.Column key={i}>
		<Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
	</Grid.Column>
));

const GridExampleGrid = () => <Grid>{columns}</Grid>;

export default GridExampleGrid;
