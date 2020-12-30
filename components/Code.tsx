import { Prism } from 'react-syntax-highlighter'
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

export interface CodeProps {
	value?: string
	language?: string
}

const Code = ({ value = '', language }: CodeProps) => (
	<Prism language={language} style={materialDark}>
		{value}
	</Prism>
)

export default Code
