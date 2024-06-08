import axios from 'axios'

export const API = axios.create({
	baseURL: 'http://localhost:3014/publications',
})

export function extractProjectID(headers: Headers, searchParams?: Record<string, any>) {
	let host: string | undefined
	try {
		// Take origin header first, because it's used by our proxies
		if (headers.has('origin')) {
			host = headers.get('origin')?.replace(/^https?:\/\//, '')
		}
		// Otherwise, take host header
		else {
			host = headers.get('host') || undefined
		}
	} catch (_) {
		host = undefined
	}

	if (!host) return null

	let projectId: string | undefined
	try {
		// *.notice.site wildcard
		if (/^.*\.notice\.site$/.test(host)) {
			projectId = host.split('.').at(-3)
		}
		// ?target= search param for local development
		else if (searchParams?.target) {
			projectId = searchParams.target
		}
		// Otherwise, we assume `host` is a custom domain
		else {
			projectId = host
		}
	} catch (_) {
		projectId = undefined
	}

	return projectId || null
}
