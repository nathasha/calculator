import * as actionTypes from './constants'

/*
 * action creators
 */

export function changeRate(evt) {
	return {
		type: actionTypes.CHANGE_INTEREST_RATE,
		rate: evt.target.value
	}
}

export function changePeriod(period) {
	return {
		type: actionTypes.CHANGE_PERIOD,
		period
	}
}

export function changeNumOfPeriod(periodNumber) {
	return {
		type: actionTypes.CHANGE_NUMBER_OF_PERIODS,
		periodNumber
	}
}

export function changePresentValue(presentValue) {
	return {
		type: actionTypes.CHANGE_PRESENT_VALUE,
		presentValue
	}
}

