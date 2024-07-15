import { CustomCodeInjector } from '@/components/CustomCodeInjector'
import { Navbar } from '@/components/Navbar'
import { NoticeLabel } from '@/components/NoticeLabel'
import { Providers } from '@/providers'
import { API, extractProjectID } from '@/tools/api'
import { headers } from 'next/headers'
import Script from 'next/script'

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const projectData = await getProjectData()
	const { hideCreatedWithNotice, headCode } = projectData?.project || {}

	return (
		<html lang="en">
			<head>
				<Script id="custom-code-script" strategy="afterInteractive">
					{`window.__CUSTOM_CODE__ = ${JSON.stringify(headCode)};`}
				</Script>
			</head>

			<body>
				<Providers>
					<Navbar meta={projectData?.metadata} />
					{children}
					<NoticeLabel shouldHide={hideCreatedWithNotice} />
				</Providers>
				<CustomCodeInjector />
			</body>
		</html>
	)
}

async function getProjectData() {
	const projectId = extractProjectID(headers(), { target: null })

	if (!projectId) return null

	try {
		const { data } = await API.get(`/projects/${projectId}`)
		return data
	} catch (_) {
		return null
	}
}
