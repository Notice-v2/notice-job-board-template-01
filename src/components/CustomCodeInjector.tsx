// app/components/CustomCodeInjector.tsx
'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

declare global {
	interface Window {
		__CUSTOM_CODE__: string | null
	}
}

const validHeadTags = ['title', 'base', 'link', 'meta', 'style', 'script', 'noscript']

export function CustomCodeInjector(): null {
	const pathname = usePathname()
	const searchParams = useSearchParams()
	const [isClient, setIsClient] = useState(false)
	const injectedScripts = useRef<Set<string>>(new Set())

	useEffect(() => {
		setIsClient(true)
	}, [])

	useEffect(() => {
		if (!isClient) return

		function injectCustomCode() {
			if (typeof window === 'undefined' || !window.__CUSTOM_CODE__) return

			const customCode = window.__CUSTOM_CODE__
			const temp = document.createElement('div')
			temp.innerHTML = customCode

			temp.childNodes.forEach((node) => {
				if (node.nodeType === Node.ELEMENT_NODE) {
					const element = node as Element
					if (validHeadTags.includes(element.tagName.toLowerCase())) {
						if (element.tagName.toLowerCase() === 'script') {
							const src = element.getAttribute('src')
							if (src && !injectedScripts.current.has(src)) {
								const newScript = document.createElement('script')
								newScript.src = src
								newScript.setAttribute('data-custom-injected', 'true')
								document.head.appendChild(newScript)
								injectedScripts.current.add(src)
							} else if (!src) {
								// For inline scripts, always inject
								const newScript = document.createElement('script')
								newScript.textContent = element.textContent
								newScript.setAttribute('data-custom-injected', 'true')
								document.head.appendChild(newScript)
							}
						} else {
							// For non-script elements, replace if exists, otherwise append
							const existingElement = document.head.querySelector(
								`[data-custom-injected="${element.tagName.toLowerCase()}"]`
							)
							if (existingElement) {
								existingElement.replaceWith(element.cloneNode(true))
							} else {
								const newElement = element.cloneNode(true) as HTMLElement
								newElement.setAttribute('data-custom-injected', element.tagName.toLowerCase())
								document.head.appendChild(newElement)
							}
						}
					}
				}
			})
		}

		injectCustomCode()

		window.addEventListener('custom-code-updated', injectCustomCode)

		return () => {
			window.removeEventListener('custom-code-updated', injectCustomCode)
		}
	}, [pathname, searchParams, isClient])

	return null
}
