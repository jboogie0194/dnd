import NavigationBar from '../components/NavigationBar';
import { useAuth } from '../context/AuthContext';
import type { Route } from './+types/_protected.campaign';

export function meta(_args: Route.MetaArgs): Array<{ title?: string; name?: string; content?: string }> {
  return [
    { title: 'Campaign | Portal' },
    { name: 'description', content: 'campaign ' },
  ];
}

export default function Campaign(): React.ReactElement {
  const { user } = useAuth();

  return (
    <div>
      <NavigationBar />

      <main>
        Campaigns
      </main>
    </div>
  );
}
