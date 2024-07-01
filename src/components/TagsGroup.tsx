import { ArrowLeft, ArrowRight } from '@/icons'
import { useSelectedTag } from '@/providers/selectedTagProvider'
import { DEFAULT_COLOR } from '@/utils/theme'
import { Circle, HStack, Tag, chakra } from '@chakra-ui/react'
import { css } from '@emotion/react'
import { useHorizontalScrollShadow } from '@notice-org/renderer-helper'
import { motion } from 'framer-motion'
import { useCallback, useMemo, useRef } from 'react'

interface Props {
	tags: string[]
	activeTag: string
	accentColor?: string
}

//chakra factory only filters chakra related style props from getting to the DOM.
//For more fine-grained control of how and what prop should be forwarded, pass the shouldForwardProp option
/* https://chakra-ui.com/docs/styled-system/chakra-factory#allowing-custom-props-to-be-forwarded */
const Box = chakra('div', {
	shouldForwardProp: (prop) => {
		return !['maxW', 'boxSizing', 'showStart', 'showEnd'].includes(prop)
	},
})

export const TagsGroup = ({ tags, activeTag, accentColor }: Props) => {
	const { setSelectedTag } = useSelectedTag()

	const ref = useRef<HTMLDivElement>(null)
	const [showStart, showEnd] = useHorizontalScrollShadow(ref, tags)

	const scrollHorizontally = (scrollOffset: number) => {
		if (!ref.current) return

		ref.current.scrollLeft += scrollOffset
	}

	const filteredTags = useMemo(() => tags.filter((tag, index) => tags.indexOf(tag) == index), [tags])

	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	}

	const item = {
		hidden: { opacity: 0 },
		show: { opacity: 1 },
	}

	const capitalizedTag = useCallback((tag: string) => {
		// Split the sentence into an array of words
		const words = tag.split(' ')

		// Capitalize the first letter of each word
		const capitalizedWords = words.map((word) => {
			return word.charAt(0).toUpperCase() + word.slice(1)
		})

		// Join the words back into a sentence
		const capitalizedTag = capitalizedWords.join(' ')

		return capitalizedTag
	}, [])

	if (!tags.length) return null

	return (
		<Box
			as={motion.div}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			boxSizing="border-box"
			maxW={{ base: '90%', md: '70%' }}
			width="fit-content"
			position="relative"
			h="fit-content"
		>
			<HStack
				as={motion.div}
				variants={container}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
				px={4}
				py={2}
				boxSizing="border-box"
				ref={ref}
				align="center"
				overflow="auto"
				h="fit-content"
				css={css`
					scroll-behavior: smooth;
					-ms-overflow-style: none;
					scrollbar-width: none;
					&::-webkit-scrollbar {
						display: none;
					}
				`}
			>
				<Tag
					as={motion.span}
					variants={item}
					p={2}
					cursor="pointer"
					flexShrink={0}
					size="md"
					variant="solid"
					bgColor={activeTag === 'All' ? accentColor ?? DEFAULT_COLOR : '#F2F2F2'}
					color={activeTag === 'All' ? 'white' : 'blackAlpha.600'}
					userSelect="none"
					onClick={() => setSelectedTag('All')}
				>
					All
				</Tag>
				{filteredTags.map((tag) => {
					return (
						<Tag
							as={motion.span}
							variants={item}
							p={2}
							cursor="pointer"
							flexShrink={0}
							size="md"
							key={tag}
							variant="solid"
							bgColor={activeTag === tag ? accentColor ?? DEFAULT_COLOR : '#F2F2F2'}
							color={activeTag === tag ? 'white' : 'blackAlpha.600'}
							userSelect="none"
							onClick={() => setSelectedTag(tag)}
						>
							{capitalizedTag(tag)}
						</Tag>
					)
				})}
			</HStack>
			{showStart && (
				<Circle
					cursor="pointer"
					position="absolute"
					left={-4}
					top={3}
					zIndex={2}
					size="26px"
					bg="gray.200"
					color="white"
					onClick={() => scrollHorizontally(-80)}
				>
					<ArrowLeft size={12} color="black" />
				</Circle>
			)}
			{showEnd && (
				<Circle
					cursor="pointer"
					position="absolute"
					right={-5}
					top={3}
					zIndex={2}
					size="26px"
					bg="gray.200"
					color="white"
					onClick={() => scrollHorizontally(80)}
				>
					<ArrowRight size={12} color="black" />
				</Circle>
			)}
		</Box>
	)
}
