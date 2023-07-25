import { Fragment } from 'react'
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { Error } from 'templates/Error'

const NotFound: NextPage = () => {
	return (
		<Fragment>
			<NextSeo title='Manu Coutinho | Not found ' />
			<Error />
		</Fragment>
	)
}
export default NotFound
