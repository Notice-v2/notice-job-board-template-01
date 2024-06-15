'use client'

import { Box, Flex } from '@chakra-ui/react'
import styled from '@emotion/styled'

import { NoticeLogo } from '@/icons'
import { Link } from '@chakra-ui/next-js'

interface Props {
	shouldHide?: boolean
}

export const CreatedWithNotice = ({ shouldHide }: Props) => {
	if (shouldHide) return null
	return (
		<StyledBox>
			<Flex gap={2} justify="center" align="center" w="100%" mx={'auto'}>
				<Box background={''}>
					<NoticeLogo size={16} />
				</Box>

				<Link
					href="https://notice.studio"
					_hover={{ textDecoration: 'none' }}
					color={'black'}
					fontWeight={500}
					fontSize={12}
					target={'_blank'}
				>
					Created with Notice
				</Link>
			</Flex>
		</StyledBox>
	)
}

const StyledBox = styled(Box)`
	background-color: white;
	border: 0.5px solid grey;
	position: fixed; /* Fixes the badge to a position on the screen */
	bottom: 10px; /* Distance from the bottom of the viewport */
	right: 10px; /* Distance from the right of the viewport */
	color: #fff; /* Text color */
	padding: 5px 10px; /* Padding inside the badge */
	border-radius: 5px; /* Rounded corners */
	font-family: Arial, sans-serif; /* Font style */
	font-size: 14px; /* Font size */
	z-index: 1000; /* Ensures the badge stays on top of other content */
	text-align: center; /* Center the text inside the badge */
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3); /* Optional: Adds a slight shadow for depth */
`
