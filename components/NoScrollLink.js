import Link from 'next/link'

const NoScrollLink = ({ children, href, passHref }) => (
    <Link href={href} passHref={passHref} scroll={false}>
        {children}
    </Link>
)

export default NoScrollLink
