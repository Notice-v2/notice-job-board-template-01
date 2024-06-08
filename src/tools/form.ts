export interface IFormData {
	firstName: string
	lastName: string
	email: string
	phoneNumber: string
	message: string
	file: File | null
}

const validateEmail = (email: string) => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	return emailRegex.test(email)
}

const checkForValidation = (key: string, value: string | File | null, onError: (key: string) => void) => {
	if (key === 'message') {
		return false // Skip validation for 'message' field
	}

	if (typeof value === 'string') {
		value = value.trim()
	}

	if (value === '' || value === null) {
		onError(key)
		return true
	}

	if (key === 'email' && !validateEmail(value as string)) {
		onError('validEmail')
		return true
	}

	return false
}

export const validateFormData = (formData: IFormData, onError: (key: string) => void) => {
	for (const [key, value] of Object.entries(formData)) {
		if (checkForValidation(key, value, onError)) {
			break // Exit the loop on the first validation error
		}
	}
	return
}
