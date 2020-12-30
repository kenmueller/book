import dynamic from 'next/dynamic'

import Spinner from 'components/Spinner'

import styles from 'styles/Editor.module.scss'

const EditorLoading = () => (
	<div className={styles.loading}>
		<Spinner className={styles.spinner} />
	</div>
)

export default dynamic(() => import('./Lazy'), {
	ssr: false,
	loading: EditorLoading
})
