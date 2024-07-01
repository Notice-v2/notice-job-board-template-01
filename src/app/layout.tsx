import { Navbar } from '@/components/Navbar'
import { NoticeLabel } from '@/components/NoticeLabel'
import { Providers } from '@/providers'
import { API, extractProjectID } from '@/tools/api'
import { headers } from 'next/headers'

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const projectData = await getProjectData()
	const { hideCreatedWithNotice } = projectData?.project || {}

	return (
		<html lang="en">
			<body>
				<Providers>
					<Navbar meta={projectData?.metadata} />
					{children}
					<NoticeLabel shouldHide={hideCreatedWithNotice} />
				</Providers>
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
