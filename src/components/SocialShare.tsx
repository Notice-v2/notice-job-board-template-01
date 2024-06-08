'use client'

import { FacebookIcon, LinkCopyIcon, LinkedinIcon, TwitterIcon } from '@/icons'
import { HStack, IconButton, Text, VStack, useClipboard, useToast } from '@chakra-ui/react'

interface Props {
	marginTop?: string
}

export const SocialShare = ({ marginTop }: Props) => {
	const toast = useToast()
	const toastId = 'link-copied-toast'

	const { onCopy } = useClipboard(typeof window !== 'undefined' ? window.location?.href : '')

	const onClick = (social?: 'twitter' | 'linkedin' | 'facebook') => {
		if (typeof window !== 'undefined') {
			let url: URL | undefined
			let title = window.document?.title
			const pageURL = new URL(window.location?.href)
			pageURL.searchParams.set('lang', 'en')
			pageURL.hash = ''
			const pageHref = pageURL.href

			switch (social) {
				case 'twitter':
					url = createURL`https://twitter.com/intent/tweet?text=${title}&url=${pageHref}`
					break
				case 'linkedin':
					url = createURL`https://www.linkedin.com/shareArticle?mini=true&title=${title}&url=${pageHref}`
					break
				case 'facebook':
					url = createURL`https://www.facebook.com/sharer/sharer.php?u=${pageHref}`
					break
				default:
					onLinkCopy()
			}

			if (url) openURL(url)
		}
	}

	const openURL = (url: string | URL) => {
		if (typeof window !== 'undefined' && url != null && typeof url === 'object' && 'href' in url) {
			window.open(url.href, '_blank')
		} else {
			window.open(url, '_blank')
		}
	}

	const createURL = (strings: TemplateStringsArray, ...values: any[]) => {
		const url = strings.reduce((acc, curr, idx) => acc + curr + encodeURIComponent(values[idx] ?? ''), '')
		return new URL(url)
	}

	const onLinkCopy = () => {
		onCopy()
		if (!toast.isActive(toastId)) {
			toast({
				id: toastId,
				title: 'Link successfully Copied.',
				description: "We've copied the link to your clipboard.",
				status: 'success',
				duration: 5000,
				isClosable: true,
			})
		}
	}

	return (
		<VStack align="flex-start" justify="center" mb={'8px'} mt={marginTop ?? '8px'} w="fit-content" spacing={1}>
			<Text color="gray.600" fontSize="xs">
				SHARE THIS JOB
			</Text>
			<HStack spacing={0} justify="center" align="start">
				<IconButton
					variant="ghost"
					size="xs"
					aria-label="linkedin"
					icon={<LinkedinIcon size={16} />}
					filter="grayscale(80%)"
					_hover={{ filter: 'grayscale(0%)', bg: 'blue.50' }}
					onClick={() => onClick('linkedin')}
				/>
				<IconButton
					variant="ghost"
					size="xs"
					aria-label="facebook"
					icon={<FacebookIcon size={16} />}
					filter="grayscale(80%)"
					_hover={{ filter: 'grayscale(0%)', bg: 'blue.50' }}
					onClick={() => onClick('facebook')}
				/>
				<IconButton
					variant="ghost"
					size="xs"
					aria-label="twitter"
					icon={<TwitterIcon size={16} />}
					filter="grayscale(80%)"
					_hover={{ filter: 'grayscale(0%)', bg: 'blue.50' }}
					onClick={() => onClick('twitter')}
				/>
				<IconButton
					variant="ghost"
					size="xs"
					aria-label="global-web"
					icon={<LinkCopyIcon size={16} />}
					filter="grayscale(80%)"
					_hover={{ filter: 'grayscale(0%)', bg: 'blue.50' }}
					onClick={() => onClick()}
				/>
			</HStack>
		</VStack>
	)
}
