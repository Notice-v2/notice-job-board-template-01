import { BulletedListBlock } from './BulletedList.block'
import { CheckboxBlock } from './Checkbox.block'
import { CodeBlock } from './Code.block'
import { DividerBlock } from './Divider.block'
import { HeaderBlock } from './Header.block'
import { HintBlock } from './Hint.block'
import { ImageBlock } from './Image.block'
import { ListItemBlock } from './ListItem.block'
import { NumberedListBlock } from './NumberedList.block'
import { ParagraphBlock } from './Paragraph.block'
import { QuoteBlock } from './Quote.block'

export function renderBlock(block: any) {
	switch (block.type) {
		case 'image':
			return <ImageBlock key={block.id} block={block} />
		case 'paragraph':
			return <ParagraphBlock key={block.id} block={block} />
		case 'heading':
			return <HeaderBlock key={block.id} block={block} />
		case 'blockquote':
			return <QuoteBlock key={block.id} block={block} />
		case 'hint':
			return <HintBlock key={block.id} block={block} />
		case 'codeBlock':
			return <CodeBlock key={block.id} block={block} />
		case 'horizontalRule':
			return <DividerBlock key={block.id} block={block} />
		case 'checkbox':
			return <CheckboxBlock key={block.id} block={block} />
		case 'listItem':
			return <ListItemBlock key={block.id} block={block} />
		case 'bulletList':
			return (
				<BulletedListBlock key={block.id} block={block}>
					{block.content?.map((child: any) => renderBlock(child))}
				</BulletedListBlock>
			)
		case 'orderedList':
			return (
				<NumberedListBlock key={block.id} block={block}>
					{block.content?.map((child: any) => renderBlock(child))}
				</NumberedListBlock>
			)

		default:
			return <></>

		// missing
		// video, audio, document (and javascript but we will not implment it)
	}
}

interface Props {
	blocks: any[]
}

export function PageContent({ blocks }: Props) {
	return blocks.map((block) => renderBlock(block))
}
