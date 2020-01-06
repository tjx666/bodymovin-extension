import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import {baseStyles} from './alertStyles'

const styles = StyleSheet.create({
	...baseStyles
})

function RegularAlert(props) {
	const alertData = props.data;
	return (
		<div className={css(styles.alert_message)}>
			<div className={css(styles.alert_message_text)}>
				{alertData.message}
			</div>
			{!!alertData.layer &&
				<div className={css(styles.alert_message_label)}>
					Layer: {alertData.layer}
				</div>
			}
			{!!alertData.comp &&
				<div className={css(styles.alert_message_label)}>
					Composition: {alertData.comp}
				</div>
			}
		</div>
	)
}

export default RegularAlert