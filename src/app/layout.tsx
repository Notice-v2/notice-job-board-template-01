import { CreatedWithNotice } from '@/components/CreatedWithNotice'
import { headers } from 'next/headers'
import { Navbar } from '../components/Navbar'
import { Providers } from '../providers'
import { API, extractProjectID } from '../tools/api'

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
					<CreatedWithNotice shouldHide={hideCreatedWithNotice} />
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
