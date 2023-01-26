import { Link } from 'react-router-dom';

interface HeaderProps {
  title: string,
}

const Header = ({ title }: HeaderProps) => {
  return (
    <div className='flex bg-white justify-center p-10'>
      <Link to='/' className='uppercase text-[#cc8ea3] text-5xl font-mono tracking-widest'>
        {title}
      </Link>
    </div>
  )
}

export default Header;
