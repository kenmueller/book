import { useCallback, useState } from 'react'
import { NextPage } from 'next'

import { getCurrent, setCurrent } from 'lib/current'
import Editor from 'components/Editor'
import Preview from 'components/Preview'

import styles from 'styles/Home.module.scss'

const Home: NextPage = () => {
	const [value, _setValue] = useState(getCurrent)
	
	const setValue = useCallback((value: string) => {
		_setValue(value)
		setCurrent(value)
	}, [_setValue])
	
	return (
		<div className={styles.root}>
			<Editor className={styles.editor} value={value} setValue={setValue} />
			<hr className={styles.divider} />
			<Preview className={styles.preview} value={value} />
		</div>
	)
}

export default Home
