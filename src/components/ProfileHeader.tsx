import Image from 'next/image';
import { Text, Title } from '@/styles/typography';
import { Form, Header, Info, ProfileImageWrapper } from '@/styles/globals';
import { getSession, logout } from '@/app/actions/auth';
import Button from './elements/Button';
import { redirect } from 'next/navigation';

export const ProfileHeader: React.FC = async () => {
  const session = await getSession();
  // const session = false;

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
        <Title>Sjouke Bosma</Title>
        <Text size='xlarge'>I'm a web developer.</Text>
        {session && (
          <Form
            action={async () => {
              'use server';
              await logout();
              redirect('/about');
            }}
          >
            <Button variant='link' type='submit'>
              Logout
            </Button>
          </Form>
        )}
      </Info>
    </Header>
  );
};

export default ProfileHeader;
