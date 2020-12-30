import { useCallback } from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2'
import cx from 'classnames'

import styles from 'styles/Editor.module.scss'

import 'codemirror/mode/markdown/markdown'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/darcula.css'

const OPTIONS = {
	mode: 'markdown',
	theme: 'darcula',
	lineNumbers: true
}

export interface EditorProps {
	className?: string
	value: string
	setValue(value: string): void
}

const Editor = ({ className, value, setValue }: EditorProps) => {
	const onBeforeChange = useCallback((_editor, _data, value) => {
		setValue(value)
	}, [setValue])
	
	const onEditorMount = useCallback(editor => {
		editor.focus()
	}, [])
	
	return (
		<CodeMirror
			className={cx(styles.root, className)}
			value={value}
			options={OPTIONS}
			onBeforeChange={onBeforeChange}
			editorDidMount={onEditorMount}
		/>
	)
}

export default Editor
