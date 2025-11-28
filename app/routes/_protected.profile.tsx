import NavigationBar from '../components/NavigationBar';
import { useAuth } from '../context/AuthContext';
import type { Route } from './+types/_protected.profile';

export function meta(_args: Route.MetaArgs): Array<{ title?: string; name?: string; content?: string }> {
  return [
    { title: 'Profile | Portal' },
    { name: 'description', content: 'Your home now' },
  ];
}

export default function Profile(): React.ReactElement {
  const { user } = useAuth();

  return (
    <div>
      <NavigationBar />

      <main>
        Welcome to your profile
      </main>
    </div>
  );
}
