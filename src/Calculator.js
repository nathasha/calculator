import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { changeRate, changePeriod} from './actions'

class Calculator extends Component {
	render() {
		const {changeRate, changePeriod, numberOfPeriods, presentValue, annPrincipal = 1, cumPrincipal =1 } = this.props;
		return (
			<form>
				<table>
					<tbody>
						{/* Row 1 */}
						<tr>
							<td>
								<input
									name="interest-rate"
									type="text"
									placeholder="Add Interest Rate"
									onChange={changeRate}
								/>
							</td>
							<td>Interest Rate</td>
							<td>Year 1</td>
							<td>Annual principal</td>
							<td>Cumulative principal</td>
						</tr>

						{/* Row 2 */}
						<tr>
							<td>
								<input
									name="mortgage-period"
									type="text"
									placeholder="Mortgage Period"
									onClick={changePeriod}
								/>
							</td>
							<td> Mortgage Term (years)</td>
							<td>Year 2</td>
							<td>{annPrincipal}</td>
							<td>{cumPrincipal}</td>
						</tr>

						{/* Row 3 */}
						<tr>
							<td>
								<input
									name="down-payment"
									type="text"
									placeholder="Down Payment"
									//onClick={changePeriod}
								/>
							</td>
							<td>mortgage term (years)</td>
						</tr>
						{/* Row 4*/}
						<tr>
							<td>
								<button type="submit">Submit</button>
							</td>
							<td>
								<button type="button">Clear Values</button>
							</td>
						</tr>

					</tbody>
				</table>
			</form>
		);
	}
}

function mapStateToProps(state) {
	const { numberOfPeriods, presentValue, annPrincipal, cumPrincipal } = state;
	return {
		//rate,
		numberOfPeriods,
		presentValue,
		annPrincipal,
		cumPrincipal
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		changeRate,
		changePeriod
	}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Calculator)
