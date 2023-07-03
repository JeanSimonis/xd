import Link from 'next/link';

interface Props {
  title: string;
  children: string;
  image: string;
  href: string;
}

const ScamCard = ({ title, children, image, href }: Props) => {
  return (
    <Link href={href}>
      <div className="border border-white rounded-lg cursor-pointer">
        <h2 className="border-b px-4 py-2">{title}</h2>
        <div className="flex flex-col md:flex-row gap-2 items-center px-2 py-2">
          <img src={image} alt={title} className="border border-white rounded-md w-60" />
          <div className="text-left py-2">{children}</div>
        </div>
      </div>
    </Link>
  );
};

export default ScamCard;
