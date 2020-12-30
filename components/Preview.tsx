import Markdown from 'react-markdown'
import cx from 'classnames'

import Code from './Code'

import styles from 'styles/Preview.module.scss'

import 'github-markdown-css/github-markdown.css'

const RENDERERS = {
	code: Code
}

export interface PreviewProps {
	className?: string
	value: string
}

const Preview = ({ className, value }: PreviewProps) => (
	<Markdown className={cx(styles.root, 'markdown-body', className)} renderers={RENDERERS}>
		{value}
	</Markdown>
)

export default Preview
