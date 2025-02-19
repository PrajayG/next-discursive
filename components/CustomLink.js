import Link from 'next/link';

export default function CustomLink({ as, href, ...otherProps }) {
  return (
    <>
      <Link  legacyBehaviour as={as} href={href}>
         <a>{...otherProps}</a>
      </Link>
    </>
  );
}
