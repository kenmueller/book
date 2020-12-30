const KEY = 'current'
const DEFAULT = ''

export const getCurrent = () => {
	try {
		return typeof localStorage === 'undefined'
			? DEFAULT
			: localStorage.getItem(KEY) ?? DEFAULT
	} catch {
		return DEFAULT
	}
}

export const setCurrent = (value: string) => {
	try {
		if (typeof localStorage === 'undefined')
			return false
		
		localStorage.setItem(KEY, value)
		return true
	} catch {
		return false
	}
}
