import React from 'react'
import Error from 'pages/_error'

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props)
		this.state = { error: null, errorInfo: null }
	}

	componentDidCatch(error, errorInfo) {
		window.Rollbar?.error(error)
		this.setState({
			error: error,
			errorInfo: errorInfo
		})
		console.error('📢', error, errorInfo)
	}

	render() {
		if (this.state.errorInfo) {
			return <Error />
		}

		return this.props.children
	}
}

export default ErrorBoundary
