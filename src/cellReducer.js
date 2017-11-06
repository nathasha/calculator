import * as actionTypes from './constants';

const cellReducer = (state = {}, action) => {

	switch (action.type) {
		case actionTypes.CHANGE_INTEREST_RATE:
			return Object.assign({}, state, {
				//rate: action.rate,
				annPrincipal: (action.rate / 12)
			});

		case actionTypes.CHANGE_PERIOD:
			return Object.assign({}, state, {
				period: action.period,
				annPrincipal: (state.rate / 12)
			});

		case actionTypes.CHANGE_PRESENT_VALUE:
			return Object.assign({}, state, {
				presentValue: action.presentValue
			});

		case actionTypes.CHANGE_NUMBER_OF_PERIODS:
			return Object.assign({}, state, {
				numberOfPeriods: action.numberOfPeriods
			});

		default:
			return state
	}

};

export default cellReducer;