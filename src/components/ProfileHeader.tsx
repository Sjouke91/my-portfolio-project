import Image from 'next/image';
import { DynamicText } from '@/styles/typography';
import { Form, Header, Info, ProfileImageWrapper } from '@/styles/globals';
import { getSession, logout } from '@/lib/login';
import Button from './elements/Button';
import { redirect } from 'next/navigation';

export const ProfileHeader: React.FC = async () => {
  const session = await getSession();

  return (
    <Header>
      <ProfileImageWrapper>
        <Image
          src='/images/profile-picture.jpg'
          alt='Profile picture of Sjouke Bosma'
          layout='fill' // This ensures the image fills the wrapper
          objectFit='cover' // Maintains the aspect ratio while cropping
        />
      </ProfileImageWrapper>
      <Info>
        <h1>Sjouke Bosma</h1>
        <DynamicText size='xlarge'>I'm a web developer.</DynamicText>
        {session && (
          <Form
            action={async () => {
              'use server';
              await logout();
              redirect('/');
            }}
          >
            <Button type='submit'>Logout</Button>
          </Form>
        )}
      </Info>
    </Header>
  );
};

export default ProfileHeader;
