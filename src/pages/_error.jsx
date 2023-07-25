import Rollbar from 'rollbar'
import dynamic from 'next/dynamic'
const ErrorPage = dynamic(() => import('pages/404'))

const Error = (error) => {
	const status = error.statusCode
	return <ErrorPage statusCode={status} />
}

Error.getInitialProps = ({ req, res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404
	// Only require Rollbar and report error if we're on the server

	// eslint-disable-next-line no-constant-condition
	if (!typeof window) {
		const rollbar = new Rollbar(process.env.ROLLBAR_SERVER_TOKEN)
		rollbar.error(err, req, (rollbarError) => {
			if (rollbarError) {
				console.error('Rollbar error reporting failed:')
				console.error(rollbarError)
				return
			}
			console.log('Reported error to Rollbar')
		})
	}
	return { statusCode }
}

export default Error
