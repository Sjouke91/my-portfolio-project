import Image from 'next/image';

export const ProfileHeader: React.FC = () => {
  return (
    <header>
      <Image
        src='/images/profile-picture.jpg'
        height={100}
        width={100}
        alt='profile picture of Sjouke Bosma'
      />
      <div>
        <h1>Sjouke Bosma</h1>
        <p>I'm a web developer</p>
      </div>
    </header>
  );
};
